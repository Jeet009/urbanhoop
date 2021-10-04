import React from "react";
import { Container } from "react-bootstrap";
import BackgroundImageContainerEle from "../../components/Elements/BackgroundImageContainerEle";
import RectCardElement from "../../components/Elements/RectCardElement";

function index() {
  return (
    <>
      <Container>
        <BackgroundImageContainerEle
          title={"UrbanHoop"}
          height={"40vh"}
          overlay={true}
          href="#"
          backgroundImage={
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <br />
        <RectCardElement type="order" />
        <RectCardElement type="order" />
      </Container>
    </>
  );
}

export default index;
