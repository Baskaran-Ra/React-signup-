import firebase from "firebase/app"
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: ,
    projectId: "login-e3fb4",
    storageBucket: "login-e3fb4.appspot.com",
    messagingSenderId: "904759587478",
    appId: "1:904759587478:web:89af2707b91a04a82308b7",
    measurementId: "G-HYXNRYPCFN"
})