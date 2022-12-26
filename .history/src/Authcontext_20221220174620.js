import React,{useContext,useState,UseEffect} from 'react'
import {auth} from './firebase'

const AuthContext =Rect.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvide({children}){
    const [currentUser,setcurrentUser]=useState()
    function signup(email,password){
        return auth.createUserWithEmailAndPassword
    }
    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged( user =)
    })
    auth.onAuthStateChanged(user => {
            setcurrentUser(user)
    })
    const value ={
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
