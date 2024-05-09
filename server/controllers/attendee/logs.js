const { responseMiddleware } = require("../../utils/response");
const db = require("../../models");
const { attendees, Tokens } = db;
const { hashText, compareHashes } = require("../../utils/hashing");
const crypto = require("crypto");
const { sendEmail } = require("../../utils/comm");

module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Check if an attendee with the provided email already exists
      const existingAttendee = await attendees.findOne({ where: { email } });
      if (existingAttendee) {
        return responseMiddleware(
          res,
          409,
          "User already exists",
          null,
          "Error"
        );
      }

      // Hash the password
      const hashedPassword = await hashText(password, 10);

      // Create a new attendee
      const attendee = await attendees.create({
        name,
        email,
        password: hashedPassword,
      });

      // Generate a verification token
      const token = await Tokens.create({
        attendee_id: attendee.id,
        token: crypto.randomBytes(32).toString("hex"),
      });

      // Send the verification email
      const url = `http://localhost:3000/attendee/email-verification/${attendee.id}/${token.token}`;
      const emailSent = await sendEmail(
        attendee.email,
        "VERIFICATION EMAIL",
        "attendeeVerification.ejs",
        { name: attendee.name, verificationLink: url }
      );

      if (!emailSent) {
        return responseMiddleware(
          res,
          400,
          "Error sending email for verification",
          null,
          "Error"
        );
      }

      return responseMiddleware(
        res,
        200,
        "Email sent successfully! Please verify your email for confirmation",
        null,
        "Success"
      );
    } catch (error) {
      console.error("Error occurred during sign-up:", error);
      return responseMiddleware(
        res,
        500,
        "An error occurred during sign-up",
        null,
        "Server Error"
      );
    }
  },
  email_Verification: async (req, res) => {
    const { id, token: verificationToken } = req.params;
    console.log("req.params", req.params);

    if (!verificationToken) {
      return responseMiddleware(res, 400, "Missing Token", null, "Error");
    }

    // Start a Sequelize transaction
    const transaction = await db.sequelize.transaction();

    try {
      // Find the attendee by attendee_id
      const attendee = await attendees.findOne({
        where: { id },
        transaction,
      });
      if (!attendee) {
        await transaction.rollback();
        return responseMiddleware(
          res,
          400,
          "Invalid Attendee ID",
          null,
          "Error"
        );
      }

      // Find the token in the database
      const token = await Tokens.findOne({
        where: {
          attendee_id: attendee.id,
          token: verificationToken,
        },
        transaction,
      });
      if (!token) {
        await transaction.rollback();
        return responseMiddleware(res, 400, "Invalid Token", null, "Error");
      }

      // Update the attendee's verified status to true
      await attendees.update(
        { verified: true },
        { where: { id }, transaction }
      );

      // Delete the verification token from the database
      await Tokens.destroy({
        where: { token: verificationToken },
        transaction,
      });

      // Commit the transaction
      await transaction.commit();

      // Send success response
      return responseMiddleware(
        res,
        200,
        "Email verification successful",
        null,
        "Success"
      );
    } catch (error) {
      // Rollback the transaction and handle errors
      await transaction.rollback();
      console.error("Error occurred during email verification:", error);
      return responseMiddleware(
        res,
        500,
        "An error occurred during email verification",
        null,
        "Server Error"
      );
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    if (!email || !password) {
      return responseMiddleware(res, "400", "Missing Fields", null, "Error");
    }

    try {
      const attendee = await attendees.findOne({
        where: { email },
      });
      if (!attendee) {
        return responseMiddleware(
          res,
          "400",
          "Invalid Credentials",
          null,
          "Error"
        );
      }
      const result = await compareHashes(password, attendee.password);
      if (!result) {
        return responseMiddleware(
          res,
          "400",
          "Invalid Credentials",
          null,
          "Error"
        );
      }
      return responseMiddleware(
        res,
        200,
        "Login Successful",
        {
          id: attendee.id,
          name: attendee.name,
          email: attendee.email,
          event_type: attendee.event_type,
          burial_type: attendee.burial_type,
        },
        "Success"
      );
    } catch (error) {
      return responseMiddleware(
        res,
        500,
        "An error occurred during sign in",
        null,
        "Server Error"
      );
    }
  },
};
