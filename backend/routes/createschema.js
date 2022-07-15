const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  req.app
    .get("db")
    .ref("/quizMaster")
    .set({
      abcdes: {
        username: "Harsh",
        email: "harshm17172612",
        profile_picture: [1, 2, 3, 4, 5],
      },
    });
  res.json({ success: "Success" });
});

module.exports = router;
