const db = require("../../models");
const { responseMiddleware } = require("../../utils/response");
const https = require("https");
const { donations, attendees } = db;

// Define the base options for HTTPS requests
const baseOptions = {
  hostname: "api.paystack.co",
  port: 443,
  method: "POST", // Default method is POST, can be overridden as needed
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    "Content-Type": "application/json",
  },
};

module.exports = {
  donation: async (req, res) => {
    const { email, amount, id } = req.body;
    try {
      const attendee = await attendees.findOne({
        where: {
          id,
          email,
        },
      });
      if (!attendee) {
        return responseMiddleware(
          res,
          "400",
          "This attendee does not exist",
          null,
          "Error"
        );
      }

      const params = JSON.stringify({
        email: attendee.email,
        amount: amount,
      });

      // Construct options for the payment initialization request
      const options = {
        ...baseOptions,
        path: "/transaction/initialize",
      };

      const reqpay = https
        .request(options, (respay) => {
          let data = "";

          respay.on("data", (chunk) => {
            data += chunk;
          });

          respay.on("end", async () => {
            const responseData = JSON.parse(data);
            console.log(responseData);

            // Check if payment initialization was successful
            if (responseData.status && responseData.data.reference) {
              // Save the transaction reference in the donations database
              await donations.create({
                attendee_id: attendee.id,
                email: attendee.email,
                name: attendee.name,
                reference: responseData.data.reference,
                // Add other relevant fields to save in the donations table
              });

              // Send the authorization URL back to the client
              return responseMiddleware(
                res,
                "200",
                "Payment initialized successfully",
                { authorization_url: responseData.data.authorization_url },
                "Success"
              );
            } else {
              // Handle error if payment initialization failed
              return responseMiddleware(
                res,
                "500",
                "Failed to initialize payment",
                null,
                "Error"
              );
            }
          });
        })
        .on("error", (error) => {
          console.error(error);
          return responseMiddleware(
            res,
            "500",
            "Error from the server",
            null,
            "Server Error"
          );
        });

      reqpay.write(params);
      reqpay.end();
    } catch (error) {
      console.error(error);
      return responseMiddleware(
        res,
        "500",
        "Error from the server",
        null,
        "Server Error"
      );
    }
  },
};
