const express = require("express");

const router = express.Router();

const calculateScore = (original, answered) => {
  let score = 0;
  let updatedAns = answered;

  for (let key in answered) {
    let ccount = 0;

    if (!answered[key].attempted) {
      continue;
    }

    if (answered[key].opt1 === true) {
      if (original[key].opt1 === false) {
        // wrong answer
        updatedAns[key]["isCorrect"] = false;
        continue;
      } else {
        ccount += 1;
      }
    }

    if (answered[key].opt2 === true) {
      if (original[key].opt2 === false) {
        // wrong answer
        updatedAns[key]["isCorrect"] = false;
        continue;
      } else {
        ccount += 1;
      }
    }

    if (answered[key].opt3 === true) {
      if (original[key].opt3 === false) {
        // wrong answer
        updatedAns[key]["isCorrect"] = false;
        continue;
      } else {
        ccount += 1;
      }
    }

    if (answered[key].opt4 === true) {
      if (original[key].opt4 === false) {
        // wrong answer
        updatedAns[key]["isCorrect"] = false;
        continue;
      } else {
        ccount += 1;
      }
    }

    if (
      original[key].totalCorrect === 1 ||
      ccount === original[key].totalCorrect
    ) {
      score += parseInt(original[key].mmarks);
    } else {
      score += (4 * ccount) / parseInt(original[key].mmarks);
    }

    updatedAns[key]["isCorrect"] = true;
  }

  return { score: score, ans: updatedAns };
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
              let { score, ans } = calculateScore(answers, req.body.answers);
              req.app
                .get("db")
                .ref("quizTakers/" + req.body.quizID + "/" + req.body.tokenID)
                .update({
                  score: score,
                  answers: ans,
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
