import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";

function ExtraFooter() {
  return (
    <div className={styles.extraFooter}>
      <Container>
        <Row>
          <Col xs={12} lg={6} className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </Col>

          <Col xs={12} lg={6}>
            <br />
            <h1>Extra Section</h1>
            <p>
              Anim aliqua nostrud laborum enim. Anim laboris commodo irure anim
              qui laboris. Sint occaecat ut nisi veniam ut. Nisi fugiat proident
              amet ut incididunt non sit veniam enim sit est. Voluptate do
              consequat incididunt consequat irure culpa duis excepteur aliquip
              commodo eu pariatur.
            </p>
            <button className="btn btn-custom">Contact Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExtraFooter;
