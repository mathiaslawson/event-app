const cron = require("node-cron");
const verifyPayment = require("./verifyPayments");
const db = require("../models");
const { donations } = db;

const scheduledTask = cron.schedule("*/10 * * * *", async () => {
  try {
    const unverifiedDonations = await donations.findAll({
      where: {
        paid: false,
      },
    });

    if (!unverifiedDonations) {
      console.log("No unverified donations found");
    }

    for (const unverifiedDonation of unverifiedDonations) {
      console.log("unverifiedDonation.reference", unverifiedDonation.reference);
      const verificationResult = await verifyPayment(unverifiedDonation.reference);
      console.log("verificationResult", verificationResult);
      if (verificationResult && verificationResult.data) {
        if (verificationResult.data.status === "success") {
          // Update the donation record in the database
          await donations.update(
            {
              amount: verificationResult.data.amount,
              paid: true,
            },
            {
              where: {
                reference: unverifiedDonation.reference,
              },
            }
          );
        } else if (verificationResult.data.status === "abandoned") {
          // Log abandoned transactions
          console.log(
            `Transaction abandoned - Reference: ${unverifiedDonation.reference}`
          );
        }
      }
    }
  } catch (error) {
    console.error("Error occurred during cron job execution:", error);
  }
});

module.exports = scheduledTask;
