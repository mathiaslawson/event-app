const crypto = require("crypto");

const webhook = async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    const event = req.body;
  }
  console.log("webhooks", hash);
};
module.exports = { webhook };
