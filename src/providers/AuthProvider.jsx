import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../pages/configs/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider
const githubProvider = new GithubAuthProvider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isItLoading, setIsItLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () => {
        setIsItLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            if (currentUser) {
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token from local===>', res.data.token)
                        setIsItLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token from local===>')
                setIsItLoading(false)
            }
            
        })
        return () => {
            unSubscribe()
        }
    }, [axiosPublic])



    const info = {
        user,
        isItLoading,
        createUser,
        login,
        googleLogIn,
        githubLogIn,
        updateUserProfile,
        logOut

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;