const express = require("express");
const app = express();
const teamController = require("./controllers/teamController");

// Set up the MongoDB connection
require("./db");

const PORT = process.env.PORT || 3000;

app.use("/api", teamController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
