import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { CarouselContext } from "../../context/CarouselContext";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";

function CarouselComponent() {
  const { photos } = useContext(CarouselContext);
  return (
    <Carousel prevIcon={false} nextIcon={false}>
      {photos.map((data) => (
        <Carousel.Item>
          <BackgroundImageContainerEle
            title={"All Categories"}
            overlay={false}
            type="carousel"
            href="/"
            backgroundImage={`http://139.59.38.251:1337${data.images[0].url}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
