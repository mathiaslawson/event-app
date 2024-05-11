const crypto = require("crypto");
const db = require("../models");
const { responseMiddleware } = require("../utils/response");
const { attendees, donations } = db;

const processedTransactions = new Set();

const verifyWebhookSignature = (req, secret) => {
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  return hash === req.headers["x-paystack-signature"];
};

const processTransaction = async (eventData) => {
  try {
    const donation = await donations.findOne({
      where: {
        reference: eventData.reference,
      },
    });

    if (donation) {
      const attendee = await getOrCreateAttendee(eventData.customer.email);
      if (!attendee) {
        return responseMiddleware(
          res,
          404,
          "Attendee not found",
          null,
          "Error"
        );
      }
      await updateAttendeeAmount(attendee, eventData.amount);
      await deleteDonation(donation);
    } else {
      console.log("Donation not found for reference:", eventData.reference);
    }
  } catch (error) {
    console.error("Error occurred while processing webhook data:", error);
    // Handle error
  }
};

const getOrCreateAttendee = async (email) => {
  let attendee = await attendees.findOne({
    where: {
      email,
    },
  });

  return attendee;
};

const updateAttendeeAmount = async (attendee, amount) => {
  const newDonatedAmount =
    parseFloat(attendee.amount || 0) + parseFloat(amount);
  await attendees.update(
    {
      amount: newDonatedAmount,
    },
    {
      where: {
        email: attendee.email,
      },
    }
  );
};

const deleteDonation = async (donation) => {
  await donation.destroy();
};

const webhook = async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  if (!verifyWebhookSignature(req, secret)) {
    console.log("Hash mismatch. Request might be tampered with.");
    return responseMiddleware(res, 401, "Invalid request", null, "Error");
  }

  const eventData = req.body.data;

  if (processedTransactions.has(eventData.reference)) {
    console.log("Transaction already processed:", eventData.reference);
    return responseMiddleware(
      res,
      200,
      "Transaction already processed",
      null,
      "Success"
    );
  }

  processedTransactions.add(eventData.reference);

  if (eventData.status === "success") {
    await processTransaction(eventData);
    return responseMiddleware(
      res,
      200,
      "Transaction processed successfully",
      null,
      "Success"
    );
  } else {
    console.log("Transaction status is not successful.");
    return responseMiddleware(res, 400, "Transaction failed", null, "Error");
  }
};

module.exports = { webhook };
