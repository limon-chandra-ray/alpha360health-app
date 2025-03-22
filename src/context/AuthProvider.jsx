
import { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const getAuthUser=()=>{
        const email = localStorage.getItem('email');
        const userRole = localStorage.getItem("user_role");
        const accountStatus = localStorage.getItem("astatus");
        return {
            "email":email,
            "userRole":userRole,
            "status": accountStatus ? accountStatus : 0
        }
    }
    const setAuthUser=(email,userRole)=>{
        localStorage.setItem('email',email);
        localStorage.setItem('user_role',userRole);
        localStorage.setItem("astatus",1)
        return true;
    }
    const logOut= (newPath)=>{
        localStorage.removeItem("email");
        localStorage.removeItem("user_role");
        const navigate = useNavigate();
        navigate(newPath,{replace:true})
     }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser, 
        login, 
        logOut,
        signUpWithGmail,
        getAuthUser,
        setAuthUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;