const express = require("express");
const uniqid = require("uniqid");
const router = express.Router();

router.post("/", (req, res) => {
  // req.body.creator, req.body.quizID, req.body.tokenID

  req.app
    .get("db")
    .ref("quizTakers/" + req.body.quizID)
    .once(
      "value",
      (snapshot) => {
        let val = snapshot.val();
        if (val && req.body.creator === val["creator"]) {
          res.json(val);
        } else {
          res.json({ error: "unauthorized" });
        }
      },
      (errorObject) => {
        res.json({ error: "The read failed: " + errorObject.name });
      }
    );
});

module.exports = router;
