// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "",
  projectId: "clon",
  storageBucket: "clon",
  messagingSenderId: "58358",
  appId: "1:5459cc5978a6e49a81c77f",
  measurementId: "G-L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db , auth };
