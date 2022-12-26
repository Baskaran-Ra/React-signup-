import React,{useContext,useState,useEffect} from 'react'
import {auth} from './firebase'

const AuthContext =React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({children}){
    const [currentUser,setcurrentUser]=useState()
    
    function Signup(email,password){
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
