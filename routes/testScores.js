const express = require("express");
const candidate = require("../models/candidate");
const TestScore = require("../models/testScore");
const router = express.Router();

// getting all candidate
router.get("/", async (req, res) => {
  try {
    const testScores = await TestScore.find();
    res.json(testScores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// UnderTesting form maximum !!!
//router.get("/", async(req,res) =>{
//try {

  //const averageScore = await TestScore.aggregate(
   //[{$group: {_id: "$name",
     //      avgAmount: { $avg: { $multiply: [ "$round1", "$round2","$round3"] } },
       //  } } ]);
  //}
  //catch(err){
    //res.status(500).json({message: err.message});
  //} 
//});

// UnderTesting form maximum !!!

// router.get("/", async (req, res) => {
//   try {
//     const testScoresHigh = await TestScore.find().sort({ age: -1 }).limit(1);
//     res.json(testScoresHigh);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// getting one candidate
router.get("/:id", (req, res) => {
  res.send(req.param.id);
});

// Create one candidate
router.post("/", async (req, res) => {
  const testScore = new TestScore({
    round1: req.body.round1,
    round2: req.body.round2,
    round3: req.body.round3,
  });
  try {
    const newTestScore = await testScore.save();
    res.status(201).json(newTestScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
