//istead of importing all the firebase we nned only the app component of it
import firebase from 'firebase/app';
//getting the firestore from that firebase(imported)
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_938sgeKExijmkVUfJs6rjiF9IVEEQo8",
  authDomain: "anontwitter-fcb9c.firebaseapp.com",
  projectId: "anontwitter-fcb9c",
  storageBucket: "anontwitter-fcb9c.appspot.com",
  messagingSenderId: "437070415571",
  appId: "1:437070415571:web:44dfd8ab6645c2e9317626",
};
// Initialize Firebase with given config
firebase.initializeApp(firebaseConfig);


//exporting firestore
export const firestore = firebase.firestore();
//exporting firebase
export default firebase;