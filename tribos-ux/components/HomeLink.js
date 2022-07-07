// Import Styles
import styles from "./HomeLink.module.scss";

// Nextjs tools
import Link from "next/link";

export default function HomeLink() {
  return (
    <nav className={styles.link}>
      <Link href="/">
        <a>UX TRIBOS</a>
      </Link>
    </nav>
  );
}
