import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password)
  }

  const singInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  // observe auth state change
  useEffect(() =>{
    const unSubsribe = onAuthStateChanged(auth, currentUser =>{
      console.log('Current value of the current user', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () =>{
      unSubsribe();
    }
  }, [])

  const authInfo = { user, loading, createUser, singInUser, logOut, signInWithGoogle }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes ={
  children: PropTypes.node,
}