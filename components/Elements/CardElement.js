import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

function CardElement({
  backgroundImage,
  product,
  title,
  sub_category_name,
  href,
}) {
  return (
    <Link href={href}>
      <a className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: "url(" + backgroundImage + ")" }}
        ></div>
        <div className={styles.cardText}>
          <br />
          {product && (
            <>
              <h5>Title</h5>
              <h6>Elit ut consequat ex laboris.</h6>
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
