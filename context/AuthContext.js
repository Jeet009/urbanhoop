import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();

  const initializeUser = async (userData, phoneNumber) => {
    setUser(userData);

    const res = await checkingUserAvailability(phoneNumber);

    if (!res[0]) {
      fetch("http://139.59.38.251:1337/customers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "",
          phoneNumber: phoneNumber,
          email: "",
          pincode: 0,
          address: "",
        }),
      })
        .then((res) => res.json())
        .then(() => {
          window.location.href = "/profile";
        });
    } else {
      window.location.href = "/profile";
    }
  };

  const checkingUserAvailability = async (data) => {
    const res = await fetch(
      `http://139.59.38.251:1337/customers?phoneNumber_contains=${data}`
    );
    const Data = await res.json();

    return Data;
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const updateUserDetails = (
    id,
    name,
    phoneNumber,
    email,
    pincode,
    address
  ) => {
    fetch(`http://139.59.38.251:1337/customers/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        pincode: pincode,
        address: address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "/profile";
      })
      .catch((err) => console.log(err));
  };

  const contextProps = {
    checkingUserAvailability,
    user,
    initializeUser,
    updateUserDetails,
  };

  return (
    <AuthContext.Provider value={contextProps}>
      {props.children}
    </AuthContext.Provider>
  );
};
