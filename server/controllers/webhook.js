const crypto = require("crypto");

const webhook = async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  
  // Create hash from request body
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  // Verify the hash with the signature in request headers
  if (hash === req.headers["x-paystack-signature"]) {
    const event = req.body;
    console.log("Request body:", req.body); // Original request body
    console.log("Hash:", hash); // Hash of the request body
  } else {
    console.log("Hash mismatch. Request might be tampered with.");
  }
};

module.exports = { webhook };
