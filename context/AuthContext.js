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
      fetch(`${process.env.API_URL}/customers`, {
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
          window.location.reload();
        });
    } else {
      window.location.reload();
    }
  };

  const checkingUserAvailability = async (data) => {
    const res = await fetch(
      `${process.env.API_URL}/customers?phoneNumber_contains=${data}`
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
    fetch(`${process.env.API_URL}/customers/${id}`, {
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
