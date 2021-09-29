import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./card.module.css";

function RectCardElement() {
  return (
    <div className={styles.cardRect}>
      <Row>
        <Col xs={4}>
          <div
            className={styles.cardRectImage}
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
            }}
          ></div>
        </Col>
        <Col xs={6}>
          <div className={styles.cardRecatText}>
            <h6>Food With Items</h6>
            <span>Category</span>
            <div>
              <span className="fa fa-plus-square"></span>
              {"     "}1{"     "}
              <span className="fa fa-minus-square"></span>
            </div>
          </div>
        </Col>
        <Col xs={2}>
          <h5 className="fa fa-close"></h5>
        </Col>
      </Row>
    </div>
  );
}

export default RectCardElement;
