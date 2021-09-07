import React from "react";
import styles from "./card.module.css";

function CardElement({ backgroundImage }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardImage}
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      ></div>
      <div className={styles.cardText}>
        <br />
        <h5>Title</h5>
        <h6>Elit ut consequat ex laboris.</h6>
      </div>
    </div>
  );
}

export default CardElement;
