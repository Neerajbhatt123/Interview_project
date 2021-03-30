const express = require("express");
const candidate = require("../models/candidate");
const router = express.Router();
const Candidate = require("../models/candidate");

// getting all candidate
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// getting one candidate
router.get("/:id", getCandidate, (req, res) => {
  res.send(req.candidate.name);
});

// Create one candidate
router.post("/", async (req, res) => {
  const candidate = new Candidate({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const newCandidate = await candidate.save();
    res.status(201).json(newCandidate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getCandidate(req, res, next) {
  try {
    candidate = await candidate.findById(req.param.id);
    {
      if (candidate == null) {
        return res.status(404).json({ message: "Cannot Find subscriber" });
      }
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
