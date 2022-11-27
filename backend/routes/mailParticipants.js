const express = require("express");
const uniqid = require("uniqid");
const router = express.Router();

const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSCODE,
  },
});
router.post("/", (req, res) => {
  req.app
    .get("db")
    .ref("quizTakers/" + req.body.quizID)
    .once(
      "value",
      (snapshot) => {
        let val = snapshot.val();
        if (val && req.body.creator === val["creator"]) {
          for (let key in val) {
            if (typeof val[key] === "object") {
              //
              var mailOptions = {
                from: process.env.EMAIL_ID,
                to: val[key].emailID,
                subject: "Invite For Your New Quiz",
                text:
                  "Hey, Please use the following url and authenticate via your emails to access the quiz- " +
                  `http://localhost:3000/takequiz?quizID=${req.body.quizID}&tokenID=${key}`,
              };

              transport.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
            }
          }
        } else {
          res.json({ error: "unauthorized" });
        }
      },
      (errorObject) => {
        res.json({ error: "The read failed: " + errorObject.name });
      }
    );
  res.json({ success: "Mailed Successfully" });
});

module.exports = router;
