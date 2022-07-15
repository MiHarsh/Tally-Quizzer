import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0qLIcHt1aDuuv4775zMAzWK8yrAF4ihE",
  databaseURL: "https://tally-quizzer-default-rtdb.firebaseio.com/",
  authDomain: "tally-quizzer.firebaseapp.com",
  projectId: "tally-quizzer",
  storageBucket: "tally-quizzer.appspot.com",
  messagingSenderId: "971043272370",
  appId: "1:971043272370:web:d87240d75982cf8f25fbab",
  measurementId: "G-JEL8SSX5V4",
});

const auth = app.auth();
const storage = app.storage();
const database = app.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { storage, database, auth, googleProvider, app as default };
