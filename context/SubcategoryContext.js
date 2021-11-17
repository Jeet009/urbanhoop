import React, { createContext, useState } from "react";

export const SubcategoryContext = createContext();

export const SubcategoryProvider = (props) => {
  const [subcategories, setSubcategories] = useState([]);

  const handleSubcategoryAddition = (data) => {
    setSubcategories(data);
  };

  const contextProps = {
    subcategories,
    handleSubcategoryAddition,
  };

  return (
    <SubcategoryContext.Provider value={contextProps}>
      {props.children}
    </SubcategoryContext.Provider>
  );
};
