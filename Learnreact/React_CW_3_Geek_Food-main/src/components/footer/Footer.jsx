import React from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <h1>
          <PiHamburgerBold /> Our Logo
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
       
        <div className={styles.links}>
          <a href="#">About</a>
          <a href="#">Social</a>
          <a href="#">History</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
        </div>

        <div className={styles.socials}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaGithub />
          <CiBasketball />
        </div>


      </div>
    </>
  );
}

export default Footer;
