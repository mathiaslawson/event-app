const express = require("express");
const { webhook } = require("../controllers/webhook");

const route = express.Router();

route.post("/webhook", webhook);

module.exports = route;
