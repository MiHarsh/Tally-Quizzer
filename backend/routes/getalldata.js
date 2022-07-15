const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  req.app
    .get("db")
    .ref()
    .on(
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
