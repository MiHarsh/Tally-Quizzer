const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  req.app
    .get("db")
    .ref("quizMaster/" + req.body.currentUser + "/" + req.body.quizID)
    .once(
      "value",
      (snapshot) => {
        let val = snapshot.val();
        if (val) {
          res.json({ metadata: val.metadata, questions: val.questions });
        } else {
          res.json({ metadata: {}, questions: {} });
        }
      },
      (errorObject) => {
        res.json({ error: "The read failed: " + errorObject.name });
      }
    );
});

module.exports = router;
