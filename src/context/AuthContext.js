import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
       const unMount =  onAuthStateChanged(auth, (user) => {
           console.log("settig the context of user",user);
            setCurrentUser(user);
        });

        return ()=> {
            unMount();
        }
    }, [])
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}