import { collection, updateDoc } from "@firebase/firestore";
import React, { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";
import { AuthContext } from "./AuthContext";

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
  return <ProfileContext.Provider>{props.children}</ProfileContext.Provider>;
};
