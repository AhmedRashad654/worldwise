import React from "react";
import styles from "./City.module.css";
import logo from "../Image/logo.jpeg";
import { NavLink, Outlet } from "react-router-dom";
export default function City() {
  return (
    <div className={styles.city}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <NavLink to="Cities">CITIES</NavLink>
        </li>
        <li>
          <NavLink to="Countires">COUNTIRES</NavLink>
        </li>
      </ul>
      <Outlet />
      <p className={styles.footer}>
        © copy right {new Date().getFullYear()} by worldwise
      </p>
    </div>
  );
}
