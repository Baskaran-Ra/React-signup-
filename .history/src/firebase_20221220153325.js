import firebase from "firebase/app"
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env. REACT_APP_FIREBASE_API_KEY ,
    projectId: process.env.REACT_APP_FIREBASE_API_KEY ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BU ,
    messagingSenderId: 
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
    measurementId: process.env.REACT_APP_FIREBASE_APP_ID 
})