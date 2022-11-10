// styles
import { Sublinhado } from "../common/Icons";
import styles from "../UxTitle/UxTribosTitle.module.scss";


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
