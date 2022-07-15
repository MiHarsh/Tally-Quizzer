import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0qLIcHt1aDuuv4775zMAzWK8yrAF4ihE",
  authDomain: "tally-quizzer.firebaseapp.com",
  projectId: "tally-quizzer",
  storageBucket: "tally-quizzer.appspot.com",
  messagingSenderId: "971043272370",
  appId: "1:971043272370:web:d87240d75982cf8f25fbab",
  measurementId: "G-JEL8SSX5V4",
});

const auth = app.auth();
const storage = app.storage();
export { storage, auth, app as default };
