const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// Apply CORS Middleware **before** routes
app.use(cors());

const PORT = process.env.PORT || 8000;

// Import Routes
const leadRoutes = require("./routes/lead");
const activityRoutes = require("./routes/activity");
const reminderRoutes = require("./routes/reminder");

// Use Routes
app.use(leadRoutes);
app.use(activityRoutes);
app.use(reminderRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Database Connection
const dbConnection = require("./config/database");
dbConnection();

// Test Route
app.patch("/ping", (req, res) => {
  res.send({
    message: "pong",
  });
});
