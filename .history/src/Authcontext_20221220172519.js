import React,{useContext} from 'react'

const AuthContext =Rect.createContext()

export function useAuth() {
  return useContext(AuthContext)(
    <div>Authcontext</div>
  )
}
