const { Op } = require("sequelize");
const { responseMiddleware } = require("../../utils/response");
const db = require("../../models");
const { attendees } = db;

module.exports = {
  getDonations: async (req, res) => {
    try {
      const allDonations = await attendees.findAll({
        where: { amount: { [Op.not]: null } },
        attributes: ["id", "name", "amount"], // specify the attributes to include in the response
      });

      if (!allDonations || allDonations.length === 0) {
        return responseMiddleware(
          res,
          400,
          "No donations made so far",
          null,
          "Error"
        );
      }

      return responseMiddleware(
        res,
        200,
        "Donations successfully retrieved",
        allDonations,
        "Success"
      );
    } catch (error) {
      console.error(error);
      return responseMiddleware(
        res,
        500,
        "Error from the server",
        null,
        "Server Error"
      );
    }
  },
  getAttendees: async (req, res) => {
    try {
      const allAttendees = await attendees.findAll({
        attributes: ["id", "name", "event_type", "burial_type"], // Specify the attributes to include in the response
      });

      if (!allAttendees || allAttendees.length === 0) {
        return responseMiddleware(
          res,
          400,
          "No attendees found",
          null,
          "Error"
        );
      }

      return responseMiddleware(
        res,
        200,
        "Attendees successfully retrieved",
        allAttendees,
        "Success"
      );
    } catch (error) {
      console.error(error);
      return responseMiddleware(
        res,
        500,
        "Error from the server",
        null,
        "Server Error"
      );
    }
  },
};
