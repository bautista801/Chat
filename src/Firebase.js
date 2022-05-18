import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAc9AgfmmFz3O8th4mbuVGMAYRnOn3ZwBg",
    authDomain: "registerandapi.firebaseapp.com",
    projectId: "registerandapi",
    storageBucket: "registerandapi.appspot.com",
    messagingSenderId: "161920880897",
    appId: "1:161920880897:web:0749825757f0293ffa4b00"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, db, provider}