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
          req.app
            .get("db")
            .ref(
              "quizMaster/" +
                creator +
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
        } else {
          res.json({ error: "unauthorized" });
        }
      } else {
        res.json({ error: "cannot retrieve the data" });
      }
    });
});

module.exports = router;
