import React,{useContext} from 'react'

const AuthContext =Rect.createContext()

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvide({children}){
    const [currentUser,setcurrentUser]=useState()
    const value ={
        cu
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
