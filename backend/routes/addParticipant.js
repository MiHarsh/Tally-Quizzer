const express = require("express");
const uniqid = require("uniqid");
const router = express.Router();

router.post("/", (req, res) => {
  // req.body.creator, req.body.quizID, req.body.tokenID
  const token = uniqid();
  req.app
    .get("db")
    .ref("quizMaster/" + req.body.creator + "/" + req.body.quizID)
    .once(
      "value",
      (snapshot) => {
        const answers = snapshot.val();
        if (answers) {
          // hence quizMaster authorized
          req.app
            .get("db")
            .ref("quizTakers/" + req.body.quizID)
            .update({
              creator: req.body.creator,
            });
          req.app
            .get("db")
            .ref("quizTakers/" + req.body.quizID + "/" + token)
            .update({
              score: -1,
              answers: "abcd",
              emailID: req.body.emailID,
              name: req.body.name,
              totalScore: 0,
            });
          res.json({ success: "successfully saved" });
        } else {
          res.json({ error: "unauthorized or no data found" });
        }
      },
      (errorObject) => {
        res.json({ error: "The read failed: " + errorObject.name });
      }
    );
});

module.exports = router;
