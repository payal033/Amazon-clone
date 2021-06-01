// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  // Paste your firebase config file here
  apiKey: "YOUR_API_kEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "583583",
  appId: "542:web:5459cc5978a6e49a81c77f",
  measurementId: "G-LQ4WT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db , auth };
