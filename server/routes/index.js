const express = require("express");
const organizerRoute = require("./organizer");

const routes = express.Router();

routes.use("/organizer", organizerRoute);

module.exports = routes;
