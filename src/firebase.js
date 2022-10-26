import firebase from "firbase/app";
import "firebase/auth";
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBaDywHbpPt6bSxn9Ewa46sDZcvwJBRCis",
    authDomain: "unichat-869e0.firebaseapp.com",
    projectId: "unichat-869e0",
    storageBucket: "unichat-869e0.appspot.com",
    messagingSenderId: "706707676302",
    appId: "1:706707676302:web:d115d145cb8cae18aabddf"
  }).auth(); 