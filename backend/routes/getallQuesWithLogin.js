const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  req.app
    .get("db")
    .ref("quizTakers/" + req.body.quizID)
    .once("value", (snapshot) => {
      const val = snapshot.val();

      if (val && val[req.body.tokenID] !== undefined) {
        const creator = val.creator;

        if (val[req.body.tokenID]["emailID"] === req.body.emailID) {
          if (val[req.body.tokenID]["score"] === -1) {
            req.app
              .get("db")
              .ref("quizMaster/" + creator + "/" + req.body.quizID)
              .once(
                "value",
                (snapshot) => {
                  let data = snapshot.val();
                  if (data["metadata"].startTime > Date.now()) {
                    res.json({ error: "quiz has not yet stated", code: 0 });
                  } else if (data["metadata"].endTime < Date.now()) {
                    res.json({ error: "quiz has ended", code: 1 });
                  } else {
                    res.json({
                      question: data["questions"],
                      metadata: data["metadata"],
                      code: -1,
                    });
                  }
                },
                (errorObject) => {
                  res.json({ error: "The read failed: " + errorObject.name });
                }
              );
          } else {
            res.json({ error: "You have already responded", code: 5 });
          }
        } else {
          res.json({ error: "unauthorized", code: 4 });
        }
      } else {
        res.json({ error: "cannot retrieve the data", code: 3 });
      }
    });
});

module.exports = router;
