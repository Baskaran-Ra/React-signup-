import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBjv0DUl92PxfdzqkkAfkMgWxikStYg03Y",
    authDomain: "login-e3fb4.firebaseapp.com",
    projectId: "login-e3fb4",
    storageBucket: "login-e3fb4.appspot.com",
    messagingSenderId: "904759587478",
    appId: "1:904759587478:web:89af2707b91a04a82308b7",
    measurementId: "G-HYXNRYPCFN"
})

export const auth = app.auth()
export default app