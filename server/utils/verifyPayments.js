const https = require("https");

const verifyPayment = (reference) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.paystack.co",
      port: 443,
      path: `/transaction/verify/${reference}`,
      method: "GET",
      headers: {
        Authorization: "Bearer sk_test_02f9fc77f66c3f51e2496ac5ee11b568792a03fa",
      },
    };

    const reqVerify = https.request(options, (resVerify) => {
      let data = "";

      resVerify.on("data", (chunk) => {
        data += chunk;
      });

      resVerify.on("end", () => {
        resolve(JSON.parse(data));
      });
    });

    reqVerify.on("error", (error) => {
      reject(error);
    });

    reqVerify.end(); // This sends the request
  });
};

module.exports = verifyPayment;
