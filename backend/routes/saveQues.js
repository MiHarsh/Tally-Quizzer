const express = require("express");
const uniqid = require("uniqid");

const router = express.Router();

router.post("/", (req, res) => {
  const quesID = uniqid();
  req.app
    .get("db")
    .ref(
      "/quizMaster/" +
        req.body.currentUser +
        "/" +
        req.body.quizID +
        "/" +
        "questions"
    )
    .update({
      [quesID]: req.body.question,
    });

  req.app
    .get("db")
    .ref(
      "/quizMaster/" +
        req.body.currentUser +
        "/" +
        req.body.quizID +
        "/" +
        "answers"
    )
    .update({
      [quesID]: req.body.answer,
    });
  res.json({ success: "successfully Saved", quesID: quesID });
});

module.exports = router;
