// Sublinhado
import { Sublinhado } from "../components/Icons";

// styles
import styles from "./UxTribosTitle.module.scss";

export default function UxTribosTitle() {
  return (
    <strong className={styles.titulo}>
      UX Tribos
      <span>
        <Sublinhado />
      </span>
    </strong>
  );
}
