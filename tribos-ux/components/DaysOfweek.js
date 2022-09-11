// Styles
import styles from "../components/DaysOfweek.module.scss";

export default function DaysOfweek({ day, number }) {
  return (
    <div className={styles.container}>
      {day}
      {number}
    </div>
  );
}
