// React Hooks
import { useState } from "react";

// Styles
import styles from "./Navbar.module.scss";

// Nextjs tools
import Link from "next/link";
import Image from "next/future/image";

// Components
import Button from "./Button";

// Logo
import UXtribosLogo from "../public/UXTRIBOSLOGO.png";

// Icons
import { closeIcon, menuHamburguerIcon } from "./Icons";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={showMenu ? styles.navbar_mobile : styles.navbar}>
      <Link href="/">
        <a>
          <Image
            src={UXtribosLogo}
            className={showMenu ? styles.navbar_mobile_title : ""}
          />
        </a>
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
        <Button text={"Entrar"} destino={"/login"} />
        <Button text={"Cadastre-se"} destino={"/signup"} />
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className={styles.menu_hamburguer}
      >
        {showMenu ? closeIcon : menuHamburguerIcon}
      </button>
    </nav>
  );
}
