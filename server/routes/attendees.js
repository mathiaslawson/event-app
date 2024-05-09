const express = require("express");
const {
  signup,
  signin,
  email_Verification,
} = require("../controllers/attendee/logs");

const route = express.Router();

route.post("/signup", signup)
route.post("/signin", signin)
route.get("/email-verification/:id/:token", email_Verification);

module.exports = route;
