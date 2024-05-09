const express = require("express");
const organizerRoute = require("./organizer");
const attendeeRoute = require("./attendees");
const paystackRoute = require("./paystack");

const routes = express.Router();

routes.use("/organizer", organizerRoute);
routes.use("/attendee", attendeeRoute);
routes.use("paystack", paystackRoute);

module.exports = routes;
