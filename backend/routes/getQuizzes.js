const express = require("express");
const uniqid = require("uniqid");
const router = express.Router();

router.post("/", (req, res) => {
  // req.body.creator, req.body.quizID, req.body.tokenID

  req.app
    .get("db")
    .ref("quizMaster/" + req.body.creator)
    .once(
      "value",
      (snapshot) => {
        res.json(snapshot.val());
      },
      (errorObject) => {
        res.json({ error: "The read failed: " + errorObject.name });
      }
    );
});

module.exports = router;
