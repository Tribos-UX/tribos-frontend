import React from "react";
import styles from "./Navbar.module.scss";

// Nextjs tools
import Link from "next/link";

// Components
import { Button } from "./Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a> UX TRIBOS</a>
      </Link>

      <div className={styles.links}>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/grupos">
          <a>Grupos</a>
        </Link>
        <Link href="/parceiros">
          <a>Parceiros</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
      </div>

      <div className={styles.nav_btns}>
        <Button text={"Entrar"} />
        <Button text={"Cadastre-se"} />
      </div>
    </nav>
  );
}
