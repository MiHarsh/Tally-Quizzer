const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
require("dotenv").config();

// Bodyparser middleware
app.use(express.json());
app.use(cors());

// database configs
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
dbRef = db.ref();

app.set("db", db);

// use routes
app.use("/api/status", require("./routes/status"));
app.use("/api/allData", require("./routes/getalldata"));
app.use("/api/create", require("./routes/createschema"));
app.use("/api/saveQues", require("./routes/saveQues"));
app.use("/api/getQues", require("./routes/getallQues"));
app.use("/api/getQuesWithLogin", require("./routes/getallQuesWithLogin"));
app.use("/api/saveResponse", require("./routes/saveUserResponse"));
app.use("/api/addParticipants", require("./routes/addParticipant"));
app.use("/api/getParticipants", require("./routes/getParticipant"));
app.use("/api/saveMetaData", require("./routes/saveMetaData"));
app.use("/api/getQuizzes", require("./routes/getQuizzes"));
app.use("/api/mailParticipants", require("./routes/mailParticipants"));

// serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static("public"));
}

const port = process.env.BACKEND_NODE_PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
