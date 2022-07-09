import styles from "./Button.module.scss";

// Icons
import { googleIcon } from "../components/Icons";
import { fbIcon } from "../components/Icons";

export function Button({ text, type, svg }) {
  return (
    <button type={type} role="button" className={styles.btn}>
      {svg === "google" && (
        <span className={styles.googleIcon}>{googleIcon}</span>
      )}
      {svg === "facebook" && <span className={styles.fbIcon}>{fbIcon}</span>}
      {text}
    </button>
  );
}
