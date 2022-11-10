// React Hooks
import { useState } from "react";

// Nextjs tools
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../Navbar/Navbar.module.scss"

// Icons
import { closeIcon, menuHamburguerIcon } from "../../common/Icons";

// Logo
import logoTribos from "../../../public/UXTRIBOSLOGO1.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={showMenu ? styles.navbar_mobile : styles.navbar}>
        <Link href="/" className={showMenu ? styles.navbar_mobile_title : ""}>
          <Image
            src={logoTribos}
            alt="Logo do UX Tribos"
            width="139"
            height="38"
          />
        </Link>

        <ul className={showMenu ? styles.links_mobile : null}>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/parceiros">Parceiros </Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>

        <div className={showMenu ? styles.nav_links_mobile : styles.links_btns}>
          <Link className={styles.button} href="/login">
            Entrar
          </Link>
          <Link className={styles.button} href="/signup">
            Cadastre-se
          </Link>
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className={styles.menu_hamburguer}
        >
          {showMenu ? closeIcon : menuHamburguerIcon}
        </button>
      </nav>
    </header>
  );
}
