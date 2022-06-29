import styles from "./Button.module.scss";

export function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
