import React from "react";
import { Col, Row } from "react-bootstrap";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";

function OfferComponent() {
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <BackgroundImageContainerEle
            title={""}
            height={"50vh"}
            overlay={true}
            backgroundImage={
              "https://images.pexels.com/photos/7263029/pexels-photo-7263029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <BackgroundImageContainerEle
            title={""}
            height={"50vh"}
            overlay={true}
            backgroundImage={
              "https://images.pexels.com/photos/1114376/pexels-photo-1114376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Col>
      </Row>
      <br />
    </>
  );
}

export default OfferComponent;
