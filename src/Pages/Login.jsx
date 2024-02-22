import React, { useState } from "react";
import styles from "./Login.module.css";
import Navbar from "../componant/Navbar";
import { useCities } from "../Context/CititesContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const img = " https://i.pravatar.cc/48?u=";
  const navigate = useNavigate();
  const id = crypto.randomUUID();
  // const id = "ffdfdfdfdre76";
  const { Login } = useCities();
  const user = {
    name,
    email,
    img: `${img}${id}`,
  };
  function handleLogin(e) {
    e.preventDefault();
    Login(user);
    if (name && email) {
      navigate("/app");
    }
  }
  return (
    <div className={styles.login}>
      <Navbar />
      <form className={styles.form} onSubmit={handleLogin}>
        <div>
          <label htmlFor="user">user name</label>
          <br />
          <input
            type="text"
            id="user"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
