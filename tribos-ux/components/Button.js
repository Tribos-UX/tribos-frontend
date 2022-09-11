import styles from "./Button.module.scss";
import { useRouter } from "next/router";

// Icons
import { googleIcon } from "../components/Icons";
import { fbIcon } from "../components/Icons";

export default function Button({ text, type, svg, destino, icon }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`${destino}`)}
      type={type}
      role="button"
      className={styles.btn}>
      {svg === "google" && (
        <span className={styles.googleIcon}>{googleIcon}</span>
      )}
      {svg === "facebook" && <span className={styles.fbIcon}>{fbIcon}</span>}
      {text}
      <span>{icon}</span>
    </button>
  );
}
