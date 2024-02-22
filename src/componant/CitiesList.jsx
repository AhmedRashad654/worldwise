import React from "react";
import styles from "./CitiesList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Context/CititesContext";
export default function CitiesList() {
  const { cities, Loading } = useCities();

  if (Loading) return <Spinner />;

  if (!cities || cities.length === 0)
    return <Message message="🖐 Add your first city by clicking on map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => (
        <CityItem key={index} city={city} />
      ))}
    </ul>
  );
}
