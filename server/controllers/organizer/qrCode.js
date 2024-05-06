const QRcode = require("qrcode");
const { responseMiddleware } = require("../../utils/response");


const qrCodeGenerator =  (req, res) => {
  const url = req.body.url;

  QRcode.toDataURL(url, (err, qrCodeUrl) => {
    if (err) {
      return responseMiddleware(res, 500, "Server Side error", null, "Error");
    } else {
      return responseMiddleware(
        res,
        200,
        "QR Code Generated",
        { qrCodeUrl },
        "Success"
      );
    }
  });
};
module.exports = qrCodeGenerator;
