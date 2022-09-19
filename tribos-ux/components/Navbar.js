// React Hooks
import { useState } from "react";

// Styles
import styles from "./Navbar.module.scss";

// Nextjs tools
import Link from "next/link";

// Components
import Button from "./Button";

// Icons
import { closeIcon, menuHamburguerIcon } from "./Icons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={showMenu ? styles.navbar_mobile : styles.navbar}>
      <Link href="/">
        <a className={showMenu ? styles.navbar_mobile_title : ""}> UX TRIBOS</a>
      </Link>

      <div className={showMenu ? styles.links_mobile : styles.links}>
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

      <div className={showMenu ? styles.nav_btns_mobile : styles.nav_btns}>
        <button className={styles.button}>Entrar</button>
        <button className={styles.button}>Cadastre-se</button>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className={styles.menu_hamburguer}>
        {showMenu ? closeIcon : menuHamburguerIcon}
      </button>
    </nav>
  );
}
