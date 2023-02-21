const functions = require("firebase-functions");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRouter = require("./routes/taskRoute");

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: false,
})
.then(() => console.log("Connected to Mongoose"))
.catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// Routes
app.use("/api", taskRouter);

// Export the Express app as a Firebase Functions
exports.app = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
