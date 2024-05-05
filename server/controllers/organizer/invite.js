const { responseMiddleware } = require("../../utils/response");
const db = require("../../models");
const { attendees, donations } = db;

module.exports = {
  addNewAttendee: async (req, res) => {
    const { name } = req.body;
    console.log("name", name);

    try {
      const newAttendees = await attendees.create({
        name,
      });
      console.log("newAttendees", newAttendees);

      if (!newAttendees) {
        return responseMiddleware(
          res,
          "400",
          "Error adding user",
          null,
          "Error"
        );
      }
      return responseMiddleware(
        res,
        "201",
        "User successfully added",
        null,
        "Success"
      );
    } catch (error) {
      if (error instanceof Error) {
        return responseMiddleware(
          res,
          "500",
          error.message,
          null,
          "Server Error"
        );
      }
      return responseMiddleware(
        res,
        "500",
        "Error from the server",
        null,
        "Server Error"
      );
    }
  },
  addingToReception: async (req, res) => {
    const { id } = req.body;
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
          "This attendee has not made any donation",
          null,
          "Error"
        );
      }

      if (!donation.paid) {
        return responseMiddleware(
          res,
          "400",
          "This attendee has not paid yet",
          null,
          "Error"
        );
      }

      // Get the current event types of the attendee
      let currentEventTypes = attendee.event_type || [];

      // Push "Reception" to the event types array
      currentEventTypes.push("Reception");

      // Update the attendee's event_type
      await attendee.update({ event_type: currentEventTypes });

      return responseMiddleware(
        res,
        "200",
        "Attendee's event type updated to include Reception",
        null,
        "Success"
      );
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
};
