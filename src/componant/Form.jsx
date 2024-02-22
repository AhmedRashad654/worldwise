//https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en
import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useCities } from "../Context/CititesContext";
import useUrl from "../Hooks/useUrl";
import Spinner from "./Spinner";
import Message from "./Message";
export default function Form() {
  const navigate = useNavigate();
  const { createCity } = useCities();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const [note, setNote] = useState("");
  const [load, setLoad] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const { lat, lng } = useUrl();
  const BASE = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  useEffect(() => {
    async function fetchCity() {
      try {
        setLoad(true);
        setCityName("");
        let result = await fetch(`${BASE}?latitude=${lat}&longitude=${lng}`);
        let data = await result.json();
        setCityName(data.city);
        setEmoji(data.countryCode);
        setCountry(data.countryName);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoad(false);
      }
    }

    fetchCity();
  }, [lat, lng]);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      emoji,
      country,
      date,
      note,
      position: {
        lat,
        lng,
      },
    };

    await createCity(newCity);
    navigate(`/app/cities`);
  }
  console.log(cityName);
  if (load) return <Spinner />;
  if (!cityName)
    return <Message message="😉 this dosen't city , click somewhere else" />;
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="city">City Name?</label>
            <br />
            <input
              type="text"
              name="city"
              id="city"
              value={cityName}
              onChange={(name) => setCityName(name.target.value)}
            />
          </li>
          <li>
            <label htmlFor="date">what is date of Travel</label>
            <br />
            <input
              type="text"
              name="date"
              id="date"
              value={date}
              onChange={(date) => setDate(date)}
            />
          </li>
          <li>
            <label htmlFor="text">what is notes on city?</label>
            <br />
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="2"
              value={note}
              onChange={(note) => setNote(note.target.value)}
            ></textarea>
          </li>
        </ul>

        <button className="btn">ADD</button>
        <button
          className="btn1"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </form>
    </div>
  );
}
