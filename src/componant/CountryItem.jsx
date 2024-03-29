import React from "react";
import styles from "./CountryItem.module.css";
export default function CountryItem({ country }) {
  return (
    <li className={styles.CountryItem}>
      <span>🏴</span>
      <span>{country.country}</span>
    </li>
  );
}
