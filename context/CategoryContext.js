import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const handleCategoryAddition = (data) => {
    setCategories(data);
  };

  const contextProps = {
    categories,
    handleCategoryAddition,
  };

  return (
    <CategoryContext.Provider value={contextProps}>
      {props.children}
    </CategoryContext.Provider>
  );
};
