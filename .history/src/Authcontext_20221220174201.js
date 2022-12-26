import React,{useContext,useState} from 'react'
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
    auth.
    const value ={
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
