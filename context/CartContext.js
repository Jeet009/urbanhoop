import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const handleCartAddition = async (data) => {
    const prevData = await JSON.parse(localStorage.getItem("cart"));

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

  const contextProps = {
    cartData,
    handleCartAddition,
  };

  return (
    <CartContext.Provider value={contextProps}>
      {props.children}
    </CartContext.Provider>
  );
};
