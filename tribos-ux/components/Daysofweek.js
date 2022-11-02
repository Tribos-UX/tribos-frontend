// Styles
import styles from "../components/DaysOfweek.module.scss";

export default function DaysOfweek({ day, number }) {
    return (
        <button className={styles.container}>
            <p className={styles.day}>{day}</p>
            <p className={styles.number}>{number}</p>
        </button>
    );
}