import React from "react";
import styles from "./CountryList.module.css";
import { useCities } from "../Context/CititesContext";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
export default function CountryList() {
  const { cities, Loading } = useCities();
  if (Loading) return <Spinner />;
  if (!cities || cities.length === 0) {
    return <Message message="👋 Add first Country by click on map" />;
  }

  const countries = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji: curr.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.CountryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}
