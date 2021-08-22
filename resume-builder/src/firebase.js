import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = require("./config.json");
// Initialize Firebase with given config
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
