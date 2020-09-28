import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAEResQapvEl7a4-x58KTLF0mE1iCxBbdw",
  authDomain: "tinder-app-clone-7bf9d.firebaseapp.com",
  databaseURL: "https://tinder-app-clone-7bf9d.firebaseio.com",
  projectId: "tinder-app-clone-7bf9d",
  storageBucket: "tinder-app-clone-7bf9d.appspot.com",
  messagingSenderId: "913032979965",
  appId: "1:913032979965:web:4ae031bace18163703e594",
  measurementId: "G-N6KTP2TLC8",
};

const firebaseApp= firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
