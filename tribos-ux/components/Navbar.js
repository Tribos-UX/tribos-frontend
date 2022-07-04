// import Nextjs tools
import Link from "next/link";
import { Button } from "./Button";

// Import Styles
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>UX TRIBOS</a>
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
