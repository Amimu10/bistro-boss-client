import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const  googleProvider = new GoogleAuthProvider();

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); 
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const logOut = () => {
    setLoading(true); 
   return signOut(auth);

}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
         setUser(currentuser)
         setLoading(false);
    })
    return () => {
        return unsubscribe();
    }
}, [])

const authInfo = {
    user,
    loading,
    creatUser,
    signIn,
    googleSignIn,
    logOut
    
};



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;