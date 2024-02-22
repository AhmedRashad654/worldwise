import React from "react";
import Navbar from "../componant/Navbar";
import styles from "./Product.module.css";
import img from "../Image/image2.width-800.jpg";
export default function Product() {
  return (
    <div className={styles.product}>
      <Navbar />
      <div className={styles.context}>
        <div className={styles.img}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.text}>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non ?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </div>
    </div>
  );
}
