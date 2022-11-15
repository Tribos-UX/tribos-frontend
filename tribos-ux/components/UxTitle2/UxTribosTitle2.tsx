// styles
import { Sublinhado } from "../common/Icons";
import styles from "../UxTitle2/UxTribosTitle2.module.scss";


export default function UxTribosTitle2({ title }) {
    return (
        <strong className={styles.titulo}>
            {title}
            <span>
                <Sublinhado />
            </span>
        </strong>
    );
}
