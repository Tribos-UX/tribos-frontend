import styles from "./Button.module.css";

export function Button({ text, style }) {
  return <button className={styles.btn_register}>{text}</button>;
}
