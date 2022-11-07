// Nextjs Tools
import Link from "next/link";

// Icons
import { LinkedinIcon, MediumIcon } from "../../common/Icons";

// Styles modules
import styles from "./Footer.module.scss";

export default function Footer() {
  const fbIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13.2508 19.0557V12.5271H15.053L15.2918 10.2773H13.2508L13.2538 9.15125C13.2538 8.56447 13.3096 8.25006 14.1524 8.25006H15.279V6H13.4766C11.3116 6 10.5495 7.0914 10.5495 8.92678V10.2776H9.2V12.5274H10.5495V19.0557H13.2508Z"
        fill="white"
      />
    </svg>
  );
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <h1>©UX Tribos 2022</h1>

        <div className={styles.footer_logos}>
          <ul>
            <li>
              <Link href={"linkedin.com"}>
                <LinkedinIcon />
              </Link>
            </li>
            <li>
              <Link href={"medium.com"}>
                <MediumIcon />
              </Link>
            </li>
            <li>
              <Link href={"facebook.com"}>{fbIcon}</Link>
            </li>
            <li>
              <Link href={"google.com"}></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_terms}>
        <p>© 2022 Todos os direitos reservados</p>
        <Link href={"/privacidade"}>Politica de Privacidade</Link>
        <Link href={"/termo"}>Termos de serviço</Link>
      </div>
    </footer>
  );
}
