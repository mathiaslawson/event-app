const { responseMiddleware } = require("../../utils/response");
const { hashText, compareHashes } = require("../../utils/hashing");
const { sendEmail } = require("../../utils/comm");
const crypto = require("crypto");
const db = require("../../models");
const { where, Op } = require("sequelize");
const { Console } = require("console");
const { Organizers, Tokens } = db;

module.exports = {
  signUp: async (req, res) => {
    const { username, email, password } = req.body;

    // Start a Sequelize transaction
    const transaction = await db.sequelize.transaction();

    try {
      // Check if an organizer with the provided email already exists
      const existingOrganizer = await Organizers.findOne({
        where: { email: email },
        transaction,
      });

      if (existingOrganizer) {
        // Rollback the transaction and return a conflict response
        await transaction.rollback();
        return responseMiddleware(
          res,
          409,
          "Email already exists",
          null,
          "error"
        );
      }

      // Hash the password
      const hashed_password = await hashText(password, 10);

      // Create a new organizer within the transaction
      const organizer = await Organizers.create(
        {
          username,
          email,
          password: hashed_password,
        },
        { transaction }
      );

      // Generate a verification token
      const token = await Tokens.create(
        {
          organizer_id: organizer.organizer_id,
          token: crypto.randomBytes(32).toString("hex"),
        },
        { transaction }
      );

      // Commit the transaction
      await transaction.commit();

      // Send the verification email
      const url = `http://localhost:3000/organizer/email-verification/${organizer.organizer_id}/${token.token}`;
      const email_sent = await sendEmail(
        organizer.email,
        "VERIFICATION EMAIL",
        "organizerVerification.ejs",
        { organizer: organizer.username, verificationLink: url }
      );

      if (!email_sent) {
        return responseMiddleware(
          res,
          400,
          "Error sending email for verification",
          null,
          "error"
        );
      }

      return responseMiddleware(
        res,
        200,
        "Email sent successfully! Please verify your email for confirmation",
        null,
        "success"
      );
    } catch (error) {
      // Rollback the transaction and handle errors
      await transaction.rollback();
      console.error("Error occurred during sign-up:", error);
      if (error instanceof Error) {
        return responseMiddleware(
          res,
          500,
          error.message,
          null,
          "server error"
        );
      }
      return responseMiddleware(
        res,
        500,
        "Error in the server",
        null,
        "server error"
      );
    }
  },

  /// VERIFYING EMAIL LINK SENT TO THE CLIENT
  email_verification: async (req, res) => {
    const { organizer_id, token: verificationToken } = req.params;
    console.log("req.params", req.params);

    if (!verificationToken) {
      return responseMiddleware(res, 400, "Missing Token", null, "Error");
    }

    // Start a Sequelize transaction
    const transaction = await db.sequelize.transaction();

    try {
      // Find the organizer by organizer_id
      const organizer = await Organizers.findOne({
        where: { organizer_id },
        transaction,
      });
      if (!organizer) {
        await transaction.rollback();
        return responseMiddleware(
          res,
          400,
          "Invalid Organizer ID",
          null,
          "Error"
        );
      }

      // Find the token in the database
      const token = await Tokens.findOne({
        where: {
          organizer_id: organizer.organizer_id,
          token: verificationToken,
        },
        transaction,
      });
      if (!token) {
        await transaction.rollback();
        return responseMiddleware(res, 400, "Invalid Token", null, "Error");
      }

      // Update the organizer's verified status to true
      await Organizers.update(
        { verified: true },
        { where: { organizer_id }, transaction }
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
    if (!email || !password) {
      return responseMiddleware(res, "400", "Missing Fields", null, "Error");
    }

    try {
      const organizer = await Organizers.findOne({
        where: { email },
      });
      if (!organizer) {
        return responseMiddleware(
          res,
          "400",
          "Invalid Credentials",
          null,
          "Error"
        );
      }
      const result = await compareHashes(password, organizer.password);
      if (!result) {
        return responseMiddleware(
          res,
          "400",
          "Invalid Credentials",
          null,
          "Error"
        );
      }
      return responseMiddleware(res, 200, "Login Successful", null, "Success");
    } catch (error) {
      return responseMiddleware(
        res,
        500,
        "An error occurred during email verification",
        null,
        "Server Error"
      );
    }
  },
};
