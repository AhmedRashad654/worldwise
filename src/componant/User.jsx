import React from "react";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import { useCities } from "../Context/CititesContext";
export default function User() {
  const navigate = useNavigate();
  const { userLogin, out } = useCities();
  function handleOut() {
    out();
    navigate("/");
  }
  const { img, name } = userLogin;
  return (
    <div className={styles.user}>
      <img src={img} alt="fg" />
      <span>welcome, {name}</span>
      <button onClick={handleOut}>LOGOUT</button>
    </div>
  );
}
