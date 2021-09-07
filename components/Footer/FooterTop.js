import React from "react";
import styles from "./footer.module.css";
import { Col, Container, Row } from "react-bootstrap";

function FooterTop() {
  return (
    <div className={styles.footerTop}>
      <div className={styles.overlay}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Why you should use our app ?</h1>
              <p>
                Anim aliqua nostrud laborum enim. Anim laboris commodo irure
                anim qui laboris. Sint occaecat ut nisi veniam ut. Nisi fugiat
                proident amet ut incididunt non sit veniam enim sit est.
                Voluptate do consequat incididunt consequat irure culpa duis
                excepteur aliquip commodo eu pariatur.
              </p>
              <button className="btn btn-custom">Download Now</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FooterTop;
