import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./profile.module.css";

function index() {
  return (
    <>
      <Container className={styles.profileDiv}>
        <Row>
          <Col xs={6} md={6}>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
              }}
            ></div>
          </Col>
          <Col xs={6} md={6}>
            <div className={styles.profileText}>
              <h5>Jeet Mukherjee</h5>
              <h6>+91 8001268005</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
