import React,{useContext,useState} from 'react'
import (auth)

const AuthContext =Rect.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvide({children}){
    const [currentUser,setcurrentUser]=useState()
    const value ={
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
