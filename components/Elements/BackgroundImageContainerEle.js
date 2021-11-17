import React from "react";
import styles from "./background.module.css";
import Link from "next/link";

function BackgroundImageContainerEle({
  title,
  height,
  backgroundImage,
  overlay,
  href,
  type,
}) {
  return (
    <a
      href={href}
      className={
        type == "carousel" ? styles.backgroundContainer : styles.backgroundCover
      }
      style={{
        minHeight: height,
        backgroundImage: "url(" + backgroundImage + ")",
      }}
    >
      <div
        className={overlay ? styles.overlay : styles.main}
        style={{ minHeight: height }}
      >
        {overlay && title != "Testimonials" ? title : " "}
        {title == "Testimonials" && (
          <>
            <div className={styles.testimonialText}>
              <p>
                Enim dolore nulla amet aute id nulla proident id culpa.
                Reprehenderit proident cillum anim dolor reprehenderit.
              </p>
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}></div>
                <span>Jeet Mukherjee</span>
              </div>
            </div>
          </>
        )}
      </div>
    </a>
  );
}

export default BackgroundImageContainerEle;
