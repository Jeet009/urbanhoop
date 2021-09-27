import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./product.module.css";

function productList() {
  const router = useRouter();
  const { product_name } = router.query;

  return (
    <div className={styles.details_container}>
      <Container>
        <h1>{product_name}</h1>
        <h6>Food & Beverage</h6>
        <p>
          Adipisicing culpa aliqua id irure officia proident ipsum magna
          cupidatat est nisi commodo.
        </p>
        <Row>
          <Col xs={6}>
            <div className={styles.product_detail_image_one}></div>
          </Col>
          <Col xs={6}>
            <div className={styles.product_detail_image_two}></div>
          </Col>
        </Row>
        <br />
        <p>
          Adipisicing culpa aliqua id irure officia proident ipsum magna
          cupidatat est nisi commodo. Adipisicing culpa aliqua id irure officia
          proident ipsum magna cupidatat est nisi commodo.
        </p>
        <Row className={styles.details_table}>
          <>
            <Col xs={6}>
              <h5>Details</h5>
            </Col>
            <Col xs={6}>
              <p>
                Adipisicing culpa aliqua id irure officia proident ipsum magna
                cupidatat est nisi commodo.
              </p>
            </Col>
          </>
          <hr />
          <>
            <Col xs={6}>
              <h5>About Product</h5>
            </Col>
            <Col xs={6}>
              <p>
                Adipisicing culpa aliqua id irure officia proident ipsum magna
                cupidatat est nisi commodo.
              </p>
            </Col>
          </>
        </Row>
        <button className="btn btn-custom-float">
          <span className="fa fa-shopping-cart"></span>
          {"  "}Add To Cart
        </button>
      </Container>
    </div>
  );
}

export default productList;
