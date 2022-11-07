// Nextjs
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../Sidebar/Sidebar.module.scss";

// Images
import sidebaravatar from "../../public/sidebaravatar.png";

// Icons
import {
  dashboardIcon,
  onePersonIcon,
  questionMarkIcon,
  twoPersonIcon,
} from "../common/Icons";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar_main} role="navigation">
      <picture className={styles.sidebar_avatar}>
        <Image
          src={sidebaravatar}
          alt={"Avatar do usuário"}
          width={54}
          height={54}
        />
      </picture>
      <nav>
        <ul className={styles.sidebar_nav}>
          <li>
            <Link href={"/dashboard/"} className={styles.sidebar_icons}>
              {dashboardIcon}
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/groups"} className={styles.sidebar_icons}>
              {twoPersonIcon}
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/perfil"} className={styles.sidebar_icons}>
              {onePersonIcon}
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/faq"} className={styles.sidebar_icons}>
              {questionMarkIcon}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
