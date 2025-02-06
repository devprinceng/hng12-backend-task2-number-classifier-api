const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors()); // Enable CORS
app.use("/api", routes);

module.exports = app;
