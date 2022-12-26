import React,{useContext} from 'react'

const AuthContext =Rect.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvide({children}){
    return (
        <AuthContext.Provider
    )
}
