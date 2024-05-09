const express = require("express");
const {
  signUp,
  email_verification,
  signin,
} = require("../controllers/organizer/logs");
const {
  addNewAttendee,
  addingToReception,
  addToPrivateBurial,
} = require("../controllers/organizer/invite");
const {
  donation,
  totalDonations,
} = require("../controllers/organizer/donations");
const QRcodeGenerator = require("../controllers/organizer/qrCode");
const {
  getAttendees,
  getDonations,
} = require("../controllers/organizer/attendees");
const route = express.Router();

route.post("/signup", signUp);
route.post("/signin", signin);
route.get("/email-verification/:organizer_id/:token", email_verification);

route.post("/add-new-attendee", addNewAttendee);
route.post("/add-to-reception", addingToReception);
route.post("/add-to-private-burial", addToPrivateBurial);
route.get("/get-all-donations", getDonations);
route.get("/get-all-attendees", getAttendees);
route.post("/donate", donation);
route.get("/total-donation", totalDonations);
route.post("/qr-code", QRcodeGenerator);

module.exports = route;
