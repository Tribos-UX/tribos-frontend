// Sublinhado
import { Sublinhado } from "../components/Icons";

// styles
import styles from "./UxTribosTitle.module.scss";

export default function UxTribosTitle({ title }) {
  return (
    <strong className={styles.titulo}>
      {title}
      <span>
        <Sublinhado />
      </span>
    </strong>
  );
}
