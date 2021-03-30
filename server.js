require("dotenv").config();

const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));

db.once("open", () => console.log("connnected to database"));

app.use(express.json());

const candidateRouter = require("./routes/candidates");
const testScoreRouter = require("./routes/testScores");

app.use("/candidates", candidateRouter);
app.use("/testScores", testScoreRouter);

app.listen(3000, () => console.log("Server started"));
