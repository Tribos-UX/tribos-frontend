import styles from "./Button.module.scss";

export function Button({ text, cls, type, svg }) {
  return (
    <button
      type={type}
      role="button"
      className={`${styles.btn} ${styles[cls]}`}>
      <span>{svg}</span>
      {text}
    </button>
  );
}
