import { createContext, useContext, useEffect, useState } from "react";
import { auth} from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"

const AuthContext = createContext()
export function AuthContextProvider({children}){
    const [user, setuser] = useState({})
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
        setuser(currentuser)
      })
      
      return () => {
        unsubscribe()
      }
    })
    
    return(
        <AuthContext.Provider value={{signup,user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthContext)
}