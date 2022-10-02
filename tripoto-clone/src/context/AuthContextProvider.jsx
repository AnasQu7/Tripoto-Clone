import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext();


export default function AuthContextProvider({children}){
    const [Account , setAccount] = useState({
email : ""})
    
    const [Auth , setAuth] = useState(false);
    const toggleAuth = (x)=>{
        setAuth(x)
    }
    const toggleAccount = (x)=>{
      setAccount(x);
    }
   return(
    <AuthContext.Provider value={{Auth,toggleAuth , Account , toggleAccount}}>
        {children}
    </AuthContext.Provider>
   )
}