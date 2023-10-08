import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
            }).catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
    }
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const outsider = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            outsider();
 }
    }, [])
    const authInfo = {
        
        user,
        createUser, 
        signIn,
        handleGoogleSignIn,
        handleGithubSignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}
export default AuthProvider;