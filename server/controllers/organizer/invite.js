const { responseMiddleware } = require("../../utils/response");
const db = require("../../models");
const { attendees, donations } = db;

module.exports = {
  addingToReception: async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return responseMiddleware(
        res,
        "400",
        "Attendee ID is required",
        null,
        "Error"
      );
    }
    try {
      const attendee = await attendees.findOne({
        where: { id },
      });

      if (!attendee) {
        return responseMiddleware(
          res,
          "400",
          "This attendee does not exist",
          null,
          "Error"
        );
      }

      const donation = await donations.findOne({
        where: { attendee_id: attendee.id },
      });

      if (!donation) {
        return responseMiddleware(
          res,
          "400",
          `${attendee.name} has not made any donation`,
          null,
          "Error"
        );
      }

      if (!donation.paid) {
        return responseMiddleware(
          res,
          "400",
          `${attendee.name} has not confirmed his donation`,
          null,
          "Error"
        );
      }

      // Check if the attendee's event types already include "Reception"
      if (!attendee.event_type.includes("Reception")) {
        // Update the attendee's event_type
        await attendee.update({
          event_type: [...attendee.event_type, "Reception"],
        });

        return responseMiddleware(
          res,
          "200",
          `${attendee.name} has been added to the reception list`,
          null,
          "Success"
        );
      } else {
        return responseMiddleware(
          res,
          "400",
          `${attendee.name} is already in the reception`,
          null,
          "Error"
        );
      }
    } catch (error) {
      return responseMiddleware(
        res,
        "500",
        "Error occurred while updating attendee's event type",
        null,
        "Server Error"
      );
    }
  },

  addToPrivateBurial: async (req, res) => {
    const { id } = req.body;
    try {
      // Find the attendee by their ID
      const attendee = await attendees.findOne({
        where: {
          id,
        },
      });

      // Check if the attendee exists
      if (!attendee) {
        return responseMiddleware(
          res,
          "404",
          "Attendee not found",
          null,
          "Error"
        );
      }

      // Update the attendee's burial_type to "Private"
      await attendee.update({ burial_type: "Private" });

      // Add "Burial" to the event_type array
      if (!attendee.event_type.includes("Burial")) {
        await attendee.update({
          event_type: [...attendee.event_type, "Burial"],
        });
      }

      return responseMiddleware(
        res,
        "200",
        `${attendee.name} has been added to the private burial`,
        null,
        "Success"
      );
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error adding attendee to private burial:", error);
      return responseMiddleware(
        res,
        "500",
        "Error adding attendee to private burial",
        null,
        "Server Error"
      );
    }
  },
};
