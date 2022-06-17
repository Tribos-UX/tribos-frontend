import React from "react";
import styles from "../styles/Home.module.css";

// Components
import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>UX TRIBOS</div>
      <div className={styles.links}>
        <ul>
          <li>Sobre</li>
          <li>Grupos</li>
          <li>Parceiros</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className={styles.btn_nav}>
        <button className={styles.btn_signin}>Entrar</button>
        <button className={styles.btn_register}>Cadastrar</button>
      </div>
    </nav>
  );
}
