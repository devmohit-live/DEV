//istead of importing all the firebase we nned only the app component of it
import firebase from "firebase/app";
//getting the firestore from that firebase(imported)
import "firebase/firestore";

const firebaseConfig = require("./conf.json");
// Initialize Firebase with given config
firebase.initializeApp(firebaseConfig);

//exporting firestore
export const firestore = firebase.firestore();
//exporting firebase
export default firebase;
