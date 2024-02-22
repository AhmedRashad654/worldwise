import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Image/logo.jpeg";
import styles from "./Navber.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.lin}>
        <img src={logo} alt="logo" />
        <span>worldwise</span>
      </Link>
      <ul className="groupLink">
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={styles.btnv}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
