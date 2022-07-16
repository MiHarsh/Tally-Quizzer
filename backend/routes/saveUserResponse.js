const express = require("express");

const router = express.Router();

const calculateScore = (original, answered) => {
  return 24;
};

router.post("/", (req, res) => {
  /*
  TO DO: 
    Get list of all questions along with marking schemes
    Get responses, iterate through each attempted responses, calculate score 
  */

  // attempt to save the response
  req.app
    .get("db")
    .ref("quizTakers/" + req.body.quizID + "/" + req.body.tokenID + "/answers")
    .update(req.body.answers);

  let score = 0;

  req.app
    .get("db")
    .ref("quizTakers/" + req.body.quizID)
    .once("value", (snapshot) => {
      const val = snapshot.val();
      if (val && val[req.body.tokenID] !== undefined) {
        const creator = val.creator;
        req.app
          .get("db")
          .ref("quizMaster/" + creator + "/" + req.body.quizID + "/answers")
          .once(
            "value",
            (snapshot) => {
              const answers = snapshot.val();
              score = calculateScore(answers, req.body.answers);
              req.app
                .get("db")
                .ref("quizTakers/" + req.body.quizID + "/" + req.body.tokenID)
                .update({
                  score: score,
                });
            },
            (errorObject) => {
              res.json({ error: "The read failed: " + errorObject.name });
            }
          );
      }
    });

  res.json({ success: "successfully Saved" });
});

module.exports = router;
