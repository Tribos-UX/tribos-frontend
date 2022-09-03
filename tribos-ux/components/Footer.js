// Nextjs Tools
import Link from "next/link";

// Icons
import { LinkedinIcon, MediumIcon } from "./Icons";

// Styles modules
import styles from "./Footer.module.scss";

export const googleIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58133 0 0 3.582 0 8C0 12.418 3.58133 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8.09333 12.6787C5.51467 12.6787 3.42667 10.5853 3.42667 8C3.42667 5.41467 5.51467 3.32133 8.09333 3.32133C9.35333 3.32133 10.4067 3.786 11.2147 4.54067L9.89867 5.85933V5.85667C9.40867 5.38867 8.78733 5.14867 8.09333 5.14867C6.55333 5.14867 5.302 6.45267 5.302 7.99733C5.302 9.54067 6.55333 10.8487 8.09333 10.8487C9.49067 10.8487 10.4413 10.0473 10.6373 8.94733H8.09333V7.12267H12.4833C12.542 7.436 12.5733 7.76267 12.5733 8.10533C12.5733 10.7787 10.7887 12.6787 8.09333 12.6787Z"
      fill="white"
    />
  </svg>
);

export default function Footer() {
  const fbIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
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
        <h1>UX Tribos 2022</h1>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>

        <div className={styles.footer_logos}>
          <ul>
            <li>
              <Link href={"linkedin.com"}>
                <a>
                  <LinkedinIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"medium.com"}>
                <a>
                  <MediumIcon />
                </a>
              </Link>
            </li>
            <li>
              <Link href={"facebook.com"}>
                <a>{fbIcon}</a>
              </Link>
            </li>
            <li>
              <Link href={"google.com"}>
                <a>{googleIcon} </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer_terms}>
        <p>Politica de Privacidade</p>
        <p>Termos de serviço</p>
      </div>
    </footer>
  );
}
