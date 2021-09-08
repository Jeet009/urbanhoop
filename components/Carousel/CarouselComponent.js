import React from "react";
import { Carousel } from "react-bootstrap";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";

function CarouselComponent() {
  return (
    <Carousel prevIcon={false} nextIcon={false}>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          height={"50vh"}
          overlay={false}
          href="/"
          backgroundImage={
            "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          height={"50vh"}
          overlay={false}
          href="/"
          backgroundImage={
            "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <BackgroundImageContainerEle
          title={"All Categories"}
          height={"50vh"}
          overlay={false}
          href="/"
          backgroundImage={
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
