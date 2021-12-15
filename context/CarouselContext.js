import React, { createContext, useState, useEffect } from "react";

export const CarouselContext = createContext();

export const CarouselProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    handlePhotoFetch().then((data) => setPhotos(data));
  }, []);

  const handlePhotoFetch = async () => {
    const res = await fetch(`http://139.59.38.251:1337/sliders`);
    const data = await res.json();

    return data;
  };

  const contextProps = {
    photos,
  };

  return (
    <CarouselContext.Provider value={contextProps}>
      {props.children}
    </CarouselContext.Provider>
  );
};
