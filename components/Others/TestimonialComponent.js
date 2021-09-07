import React from "react";
import { Col, Row } from "react-bootstrap";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";

function TestimonialComponent() {
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <BackgroundImageContainerEle
            title={"Testimonials"}
            height={"50vh"}
            overlay={true}
            backgroundImage={
              "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <BackgroundImageContainerEle
            title={"Testimonials"}
            height={"50vh"}
            overlay={true}
            backgroundImage={
              "https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </Col>
      </Row>
      <br />
    </>
  );
}

export default TestimonialComponent;
