import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { AuthContext } from "./AuthContext";
import { db } from "../firebase/config";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    user && fetchCartData().then((data) => setCartData(data));
  }, [user]);

  const fetchCartData = async () => {
    const dataArray = [];

    const querySnapshot = await getDocs(collection(db, user.phoneNumber));
    querySnapshot.forEach((product) => {
      dataArray.push({
        ...product.data(),
        key: product.id,
      });
    });

    return dataArray;
  };

  const handleCartAddition = async (data) => {
    const prevData = await JSON.parse(localStorage.getItem("cart"));

    const docRef = await addDoc(collection(db, user.phoneNumber), {
      cart: data,
      quantity: 1,
    });
    fetchCartData().then((data) => {
      setCartData(data);
    });

    if (prevData) {
      let products = prevData;
      products.push(data);
      localStorage.setItem("cart", JSON.stringify(products));
      setCartData(products);
    } else {
      localStorage.setItem("cart", JSON.stringify([data]));
      setCartData(data);
    }
  };

  const handleDeleteCartData = async (key) => {
    await deleteDoc(doc(db, user.phoneNumber, key));
    fetchCartData().then((data) => setCartData(data));
  };

  const handleQuantityIncrement = async (key) => {
    await updateDoc(doc(db, user.phoneNumber, key), {
      quantity: increment(1),
    });
    fetchCartData().then((data) => setCartData(data));
  };

  const handleQuantityDecrement = async (key) => {
    await updateDoc(doc(db, user.phoneNumber, key), {
      quantity: increment(-1),
    });
    fetchCartData().then((data) => setCartData(data));
  };

  const contextProps = {
    cartData,
    handleCartAddition,
    handleDeleteCartData,
    handleQuantityIncrement,
    handleQuantityDecrement,
    setTotalCartPrice,
    setTotalCartQuantity,
    totalCartPrice,
    totalCartQuantity,
  };

  return (
    <CartContext.Provider value={contextProps}>
      {props.children}
    </CartContext.Provider>
  );
};
