import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./card.module.css";

function RectCardElement({ type }) {
  return (
    <div className={styles.cardRect}>
      {type == "cart" && (
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
                <h5 className="fa fa-plus-square"></h5>
                {"     "}1{"     "}
                <h5 className="fa fa-minus-square"></h5>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <h5 className="fa fa-close"></h5>
          </Col>
        </Row>
      )}
      {type == "order" && (
        <Row>
          <Col xs={12} md={2}>
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
            </div>
          </Col>
          <Col xs={6} md={4} className={styles.cardRecatText}>
            <span>Order Status</span>
            <div>
              <h5 className="fa fa-check-circle"></h5>
              {"  "}
              <h5 className="fa fa-check-circle"></h5>
              {"  "}
              <h5 className="fa fa-check-circle"></h5>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default RectCardElement;
