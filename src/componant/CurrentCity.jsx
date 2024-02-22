import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../Context/CititesContext";
import styles from "./CurrentCity.module.css";
export default function CurrentCity() {
  const { getCity, currentCity } = useCities();
  const { note, cityName, date } = currentCity;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getCity(id);
  }, [getCity, id]);
  return (
    <div className={styles.currentCity}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>🏴</span>
          {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h5>You went to {cityName} on</h5>
        <p>{date}</p>
      </div>
      {note && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{note}</p>
        </div>
      )}

      <div className={styles.row}>
        <h4>Learn more</h4>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <button className="btn" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
    </div>
  );
}
