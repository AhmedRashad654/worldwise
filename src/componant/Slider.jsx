import React, { useState } from "react";
import styles from "./Slider.module.css";
import one1 from "../Image/project1.jpg";
import one2 from "../Image/project2.jpg";
import one3 from "../Image/project3.jpeg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const data = [one1, one2, one3];
const styleImage = {
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};
const active = {
  backgroundColor: "rgba(3, 166, 3, 0.29)",
};
export default function Homepage() {
  const [change, setChange] = useState(0);

  return (
    <>
      <div
        className={styles.Homepage}
        style={{
          ...styleImage,
          backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),
           url("${data[change]}")`,
        }}
      >
        <Navbar />

        <div className={styles.collRadiues}>
          {data.map((e, i) => (
            <span
              className={`${styles.spanradiues}`}
              key={i}
              style={change === i ? active : null}
              onClick={() => setChange(() => i)}
            ></span>
          ))}
        </div>
        <div className={styles.text}>
          <h3>
            You travel the world. <br /> WorldWise keeps track of your
            adventures.
          </h3>
          <br />
          <h5>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful
            <br /> experiences, and show your friends how you have wandered the
            world
          </h5>
          <br />
          <br />
          <Link className="btn" to="Login">
            START TRAKING NOW
          </Link>
        </div>
      </div>
    </>
  );
}
