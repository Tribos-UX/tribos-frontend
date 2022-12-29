// Nextjs tools
import Image from "next//image";

//Images
import error from "../public/error.svg";

// Styles
import styles from "../styles/Error.module.scss";

export default function Error() {
  return (
    <div className={styles.container_error}>
      <Image
        className={styles.error_img}
        src={error}
        alt="Page Not Found"
        width={388}
        height={458}
      />
      <h1>Página não encontrada</h1>
      <button className={styles.error_return}>
        Retornar á página principal
      </button>
    </div>
  );
}
