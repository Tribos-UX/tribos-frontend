// React Hooks
import { useState } from "react";

// Nextjs tools
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "./Navbar.module.scss";

// Icons
import { closeIcon, menuHamburguerIcon } from "../../common/Icons";

// Logo
import logotribos from "../../../public/UXTRIBOSLOGO1.png"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={showMenu ? styles.navbar_mobile : styles.navbar}>
      <Link href="/" className={showMenu ? styles.navbar_mobile_title : ""}>
        <Image src={logotribos} alt="Logo do UX Tribos" width="139" height="38" />
      </Link>

      <div className={showMenu ? styles.links_mobile : styles.links}>
        <Link href="/sobre">Sobre</Link>
        <Link href="/grupos">Grupos </Link>
        <Link href="/parceiros">Parceiros</Link>
        <Link href="/contato">Contato</Link>
      </div>

      <div className={showMenu ? styles.nav_btns_mobile : styles.nav_btns}>
        <Link className={styles.button} href="/login">Entrar</Link>
        <Link className={styles.button} href="/signup">Cadastre-se</Link>
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
