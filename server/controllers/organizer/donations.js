const db = require("../../models");
const { responseMiddleware } = require("../../utils/response");
const https = require("https");
const { donations, attendees } = db;

module.exports = {
  donation: async (req, res) => {
    const { email, amount, id } = req.body;
    try {
      const attendee = await attendees.findOne({
        where: {
          id: id,
        },
      });
      if (!attendee) {
        return responseMiddleware(
          res,
          "400",
          "This user is not yet a member",
          null,
          "Error"
        );
      }

      const params = JSON.stringify({
        email: email,
        amount: amount,
      });

      const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: "/transaction/initialize",
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
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
