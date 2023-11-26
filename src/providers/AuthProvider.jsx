import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase.config";


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider
const githubProvider = new GithubAuthProvider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isItLoading, setIsItLoading] = useState(true)

    const createUser = (email, password) => {
        setIsItLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        setIsItLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogIn = () => {
        setIsItLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogIn = () => {
        setIsItLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setIsItLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setIsItLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const info = {
        user,
        isItLoading,
        createUser,
        login,
        googleLogIn,
        githubLogIn,
        logOut

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;