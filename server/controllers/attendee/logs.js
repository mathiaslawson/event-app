const { responseMiddleware } = require("../../utils/response");
const db = require("../../models");
const { attendees, Tokens } = db;
module.exports = {
  signup: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const attendee = await attendees.findOne({ where: { email } });
      if (attendee) {
        return responseMiddleware(res, 409, "User already exists", null, "Error")
      }
      
    } catch (error) {}
  },
};
