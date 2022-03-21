import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [Search, setSearch] = useState([]);
  const [SearchText, setSearchText] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchText = (data) => {
    setSearchText(data);
  };

  const handleSearchResult = (data) => {
    setSearch(data);
  };

  const contextProps = {
    SearchText,
    handleSearchText,
    handleSearchResult,
    showSearch,
    setShowSearch,
  };

  return (
    <SearchContext.Provider value={contextProps}>
      {props.children}
    </SearchContext.Provider>
  );
};
