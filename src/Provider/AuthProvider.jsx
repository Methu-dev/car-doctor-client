import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser]= useState(null);
    const [loader, setLoader] = useState(true);


    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email,password)
    }


    useEffect(()=>{
      const unsubscraibe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoader(false);
        })
        return ()=>{
            return unsubscraibe();
        }
    },[])

    const logout = ()=>{
      setLoader(true)
     return signOut(auth)
    }

    const AuthInfo = {
      user,
      loader,
      createUser,
      signIn,
      logout,
    };
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
