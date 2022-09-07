// react
import { createContext, useContext, useState, useEffect } from 'react';
// firebase
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
  // state
  const [user, setUser] = useState({});

  // Signup
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, 'users', email), {
      watchList: [],
    });
  };

  // Signin
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signout
  const logout = () => {
    return signOut(auth);
  };

  // effect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logout, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
