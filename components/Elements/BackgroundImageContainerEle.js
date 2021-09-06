import React from "react";
import styles from "./background.module.css";

function BackgroundImageContainerEle({
  title,
  height,
  backgroundImage,
  overlay,
}) {
  return (
    <div
      className={styles.backgroundContainer}
      href="#"
      style={{
        minHeight: height,
        backgroundImage: "url(" + backgroundImage + ")",
      }}
    >
      <div
        className={overlay ? styles.overlay : styles.main}
        style={{ minHeight: height }}
      >
        {overlay ? title : " "}
      </div>
    </div>
  );
}

export default BackgroundImageContainerEle;
