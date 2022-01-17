import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import styles from "./card.module.css";

function RectCardElement({
  type,
  name,
  subcategory,
  backgroundImage,
  ProductId,
  quantity,
  selling_price,
  orderData,
}) {
  const {
    handleDeleteCartData,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = useContext(CartContext);

  return (
    <div className={styles.cardRect}>
      {type == "cart" && (
        <Row>
          <Col xs={4}>
            <div
              className={styles.cardRectImage}
              style={{
                backgroundImage: `url(http://139.59.38.251:1337${backgroundImage})`,
              }}
            ></div>
          </Col>
          <Col xs={6}>
            <div className={styles.cardRecatText}>
              <h6>{name}</h6>
              <span>{subcategory}</span>
              <span>{selling_price}</span>
              <div>
                <h5
                  className="fa fa-plus-square"
                  onClick={() => handleQuantityIncrement(ProductId)}
                ></h5>
                {"     "}
                {quantity}
                {"     "}
                <h5
                  className="fa fa-minus-square"
                  onClick={() => handleQuantityDecrement(ProductId)}
                ></h5>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <h5
              className="fa fa-close"
              onClick={() => handleDeleteCartData(ProductId)}
            ></h5>
          </Col>
        </Row>
      )}
      {type == "order" && (
        <Row>
          <Col xs={12} md={2}>
            <div
              className={styles.cardRectImage}
              style={{
                backgroundImage: "url(/assets/logo.jpg)",
              }}
            ></div>
          </Col>
          <Col xs={6}>
            <div className={styles.cardRecatText}>
              {orderData &&
                orderData.cart_data.map((data) => (
                  <h4>
                    <ul>
                      <li>{data.product_name}</li>
                    </ul>
                  </h4>
                ))}
              <span>Total Order Amount : {orderData.totalCartPrice}</span>
              <span>Total Order Quantity : {orderData.totalCartQuantity}</span>
            </div>
          </Col>
          <Col xs={6} md={4} className={styles.cardRecatText}>
            <span>Order Status</span>
            <h6>PLACED & Approved</h6>
            <hr />
            <span>Contact Details</span>
            <h6>+91 XXXXX XXXXX</h6>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default RectCardElement;
