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
        "metadata"
    )
    .update(req.body.metadata);

  res.json({ success: "successfully Saved", quesID: quesID });
});

module.exports = router;
