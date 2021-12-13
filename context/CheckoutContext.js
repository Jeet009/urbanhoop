import React, { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {
  const [checkoutDetails, setCheckoutDetails] = useState({});

  const handleCheckoutAddition = (data) => {
    setCheckoutDetails(data);
    console.log(data);
  };

  const contextProps = {
    checkoutDetails,
    handleCheckoutAddition,
  };

  return (
    <CheckoutContext.Provider value={contextProps}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
