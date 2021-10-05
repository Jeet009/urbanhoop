import React from "react";
import { Carousel } from "react-bootstrap";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";

function CarouselComponent() {
  return (
    <Carousel prevIcon={false} nextIcon={false}>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          overlay={false}
          type="carousel"
          href="/"
          backgroundImage={"/assets/demo.png"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          overlay={false}
          type="carousel"
          href="/"
          backgroundImage={"/assets/demo.png"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          overlay={false}
          type="carousel"
          href="/"
          backgroundImage={"/assets/demo.png"}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
