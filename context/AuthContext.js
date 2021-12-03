import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();

  const initializeUser = (userData) => {
    setUser(userData);

    axios
      .post("http://139.59.38.251:1337/auth/local/register")
      .then((response) => {
        window.location.href = "/profile";
      })
      .catch((error) => {
        window.location.href = "/profile";
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const contextProps = {
    user,
    initializeUser,
  };

  return (
    <AuthContext.Provider value={contextProps}>
      {props.children}
    </AuthContext.Provider>
  );
};
