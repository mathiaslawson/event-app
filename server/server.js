const express = require("express");
const cors = require("cors");
require("dotenv").config();
const route = require("./routes/index");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(route);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
