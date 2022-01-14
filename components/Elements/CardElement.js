import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { Badge } from "react-bootstrap";

function CardElement({
  backgroundImage,
  product,
  title,
  sub_category_name,
  href,
  price,
  unit,
  net_value,
}) {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <div
          className={styles.cardImage}
          style={{
            backgroundImage: `url(${process.env.API_URL}${backgroundImage})`,
          }}
        ></div>
        <div className={styles.cardText}>
          <br />
          {product && (
            <>
              <h6>
                <Badge bg="danger">{sub_category_name}</Badge>
              </h6>
              <h5>{title}</h5>
              <h5>Rs. {price} /- </h5>
              <h6>
                ({net_value} {unit})
              </h6>
            </>
          )}
          {!product && (
            <center>
              <h5>{title}</h5>
              <h6>{sub_category_name}</h6>
            </center>
          )}
        </div>
      </a>
    </Link>
  );
}

export default CardElement;
