// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC9cu-lucohltjprlnXCtetUFyjtGlN6l0",
  authDomain: "clone-178d9.firebaseapp.com",
  projectId: "clone-178d9",
  storageBucket: "clone-178d9.appspot.com",
  messagingSenderId: "583583986542",
  appId: "1:583583986542:web:5459cc5978a6e49a81c77f",
  measurementId: "G-LQ4WTHQXZ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db , auth };
