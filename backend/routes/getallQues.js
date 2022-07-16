const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  req.app
    .get("db")
    .ref(
      "quizMaster/" +
        req.body.currentUser +
        "/" +
        req.body.quizID +
        "/" +
        "questions"
    )
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
