import firebase from "firebase/app"
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env. REACT_APP_FIREBASE_API_KEY ,
    projectId: process.env.REACT_APP_FIREBASE_API_KEY ,
    storageBucket: process.env. ,
    messagingSenderId: process.env. ,
    appId: process.env. ,
    measurementId: process.env. 
})