import React from "react";
import Navbar from "../componant/Navbar";
import styles from "./Pricing.module.css";
import img from "../Image/img-2.jpg";
export default function Pricing() {
  return (
    <div className={styles.pricing}>
      <Navbar />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <main>
          <img src={img} alt="img" />
        </main>
      </section>
    </div>
  );
}
