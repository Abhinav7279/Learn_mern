import React from "react";
import house from "../../assets/house.avif";
import styles from "./house_section.module.css";

function HouseSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={house} alt="" />
        </div>
        <div className={styles.right}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <button>Get in Touch</button>

        </div>
      </div>
    </>
  );
}

export default HouseSection;
