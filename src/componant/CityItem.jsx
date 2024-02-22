import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../Context/CititesContext";
export default function CityItem({ city }) {
  const { deleteCity, currentCity } = useCities();
  const { cityName, id } = city;
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.item} ${
          id === currentCity.id ? styles["active-item"] : ""
        }`}
        to={`${id}`}
      >
        <div className={styles.one}>
          <span> 🏴</span>
          <span>{cityName}</span>
        </div>

        <button className={styles.close} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
