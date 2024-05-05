const express = require("express");
const {
  signUp,
  email_verification,
  signin,
} = require("../controllers/organizer/logs");
const {
  addNewAttendee,
  addingToReception,
} = require("../controllers/organizer/invite");
const { donation } = require("../controllers/organizer/donations");

const route = express.Router();

route.post("/signup", signUp);
route.post("/signin", signin);
route.get("/email-verification/:organizer_id/:token", email_verification);

route.post("/add-new-attendee", addNewAttendee);
route.post("/add-to-reception", addingToReception);
route.post("/donate", donation);

module.exports = route;
