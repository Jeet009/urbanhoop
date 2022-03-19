import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { AuthContext } from "./AuthContext";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    user &&
      fetchOrders().then((data) => {
        setOrders(data);
      });
  }, [user]);

  const fetchOrders = async () => {
    const dataArray = [];

    const querySnapshot = await getDocs(
      query(
        collection(db, "orders"),
        where("phoneNumber", "==", user.phoneNumber),
        // orderBy("createdAt")
      )
    );
    querySnapshot.forEach((product) => {
      dataArray.push({
        ...product.data(),
        key: product.id,
      });
    });

    return dataArray;
  };

  const contextProps = {
    orders,
  };

  return (
    <OrderContext.Provider value={contextProps}>
      {props.children}
    </OrderContext.Provider>
  );
};
