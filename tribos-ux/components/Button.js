import styles from "./Button.module.scss";

export function Button({ text, type }) {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>;
}
