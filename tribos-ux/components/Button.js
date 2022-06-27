import styles from "./Button.module.css";

export function Button({ children, text }) {
  return (
    <button className={styles.btn_register}>
      <span>{children}</span>
      {text}
    </button>
  );
}
