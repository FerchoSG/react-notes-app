import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLk-fBmSYyu9GOzwnIGzaVunCRuFEJUQo",
    authDomain: "fercho-note-app.firebaseapp.com",
    databaseURL: "https://fercho-note-app.firebaseio.com",
    projectId: "fercho-note-app",
    storageBucket: "fercho-note-app.appspot.com",
    messagingSenderId: "318594786111",
    appId: "1:318594786111:web:d0abf06e3bda5fc0f4a98a"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();