// React hooks
import React from "react";

// import styles
import styles from "./Navbar.module.css";

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
        <Button text={"Entrar"} />
        <Button text={"Cadastrar"} />
      </div>
    </nav>
  );
}
