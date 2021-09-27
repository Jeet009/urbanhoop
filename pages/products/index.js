import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import CardElement from "../../components/Elements/CardElement";
function index() {
  const router = useRouter();
  const { subcategoryname } = router.query;
  return (
    <div>
      <center>
        <br />
        <h4>{subcategoryname}</h4>
      </center>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Product 1"
              href={"/products/1?product_name=Product 1"}
              sub_category_name={subcategoryname}
              product={true}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/3937468/pexels-photo-3937468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Product 2"
              href={"/products/1?product_name=Product 2"}
              sub_category_name={subcategoryname}
              product={true}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Product 3"
              href={"/products/1?product_name=Product 3"}
              sub_category_name={subcategoryname}
              product={true}
            />
          </Col>
          <Col xs={12} md={3}>
            <CardElement
              backgroundImage="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Product 4"
              href={"/products/1?product_name=Product 4"}
              sub_category_name={subcategoryname}
              product={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
