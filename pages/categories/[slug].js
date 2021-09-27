import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import CardElement from "../../components/Elements/CardElement";

function SubCategories() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <center>
        <br />
        <h4>{name}</h4>
      </center>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Vegetable"
              href={"/products?subcategoryname=Vegetable"}
              sub_category_name={name}
              product={false}
            />
          </Col>
          <Col xs={12} md={6}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/3937468/pexels-photo-3937468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Restaurant"
              href={"/products?subcategoryname=Restaurant"}
              sub_category_name={name}
              product={false}
            />
          </Col>
          <Col xs={12} md={12}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Grocery"
              href={"/products?subcategoryname=Grocery"}
              sub_category_name={name}
              product={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubCategories;
