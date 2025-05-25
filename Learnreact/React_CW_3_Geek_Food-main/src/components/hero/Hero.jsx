import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles["hero-container"]}>
        <div className={styles.content}>
            <h1>
                <span>Let us find your</span>
                <span className={styles["bottom-heading"]}>Forever Food.</span>
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div className={styles["button-div"]}>
                <button className={styles["first-btn"]}>Search Now</button>
                <button className={styles["second-btn"]}>Know More</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
