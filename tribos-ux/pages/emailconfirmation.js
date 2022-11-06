// Nextjs tools
import Image from "next//image";

//Images
import emailConfirm from "../public/emailconfirmation.svg";

// Styles
import styles from "../styles/EmailConfirmation.module.scss";

export default function emailConfirmation() {
  return (
    <div className={styles.container_confirmation}>
      <Image
        className={styles.emailconfirm_img}
        src={emailConfirm}
        alt="Tribos UX Confirmation Image"
        width={394}
        height={430}
      />
      <h1>Só mais um pouquinho. Quase lá!</h1>
      <span>
        Uma mensagem foi enviada ao seu email, após a confirmação, você poderá
        entrar na plataforma.
      </span>
      <button>Voltar e entrar na conta</button>
    </div>
  );
}
