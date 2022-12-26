import React,{useContext,useState,useEffect} from 'react'
import {auth} from './firebase'

const AuthContext =Rct.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvide({children}){
    const [currentUser,setcurrentUser]=useState()
    function signup(email,password){
        return auth.createUserWithEmailAndPassword
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user =>{
            setcurrentUser(user)
        })
        return unsubscribe
    },[])

    const value ={
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
