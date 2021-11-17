import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const handleProductAddition = (data) => {
    setProducts(data);
  };

  const contextProps = {
    products,
    handleProductAddition,
  };

  return (
    <ProductContext.Provider value={contextProps}>
      {props.children}
    </ProductContext.Provider>
  );
};
