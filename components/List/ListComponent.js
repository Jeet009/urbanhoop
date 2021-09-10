import React from "react";
import { Col, Row } from "react-bootstrap";
import CardElement from "../Elements/CardElement";

function ListComponent({ title }) {
  return (
    <div>
      <h4>{title}</h4>

      <Row>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
        <Col xs={6} md={2}>
          <CardElement
            backgroundImage="https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            product={true}
            href={"/"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ListComponent;
