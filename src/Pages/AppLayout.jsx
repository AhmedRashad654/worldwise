import React from "react";
import styles from "./AppLayout.module.css";
import City from "../componant/City";
import Map from "../componant/Map";
import User from "../componant/User";
export default function AppLayout() {
  return (
    <div className={styles.App}>
      <User />
      <City />
      <Map />
    </div>
  );
}
