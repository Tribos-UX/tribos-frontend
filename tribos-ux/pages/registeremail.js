// Imagem
import cadastroEmailImagem from "../public/email-service.jpg";

//Nextjs
import Image from "next/image";

//Styles
import styles from "../styles/CadastroEmail.module.scss";

export default function cadastroEmail() {
  return (
    <main className={styles.container}>
      <section className={styles.image}>
        <Image
          src={cadastroEmailImagem}
          alt="Picture of the author"
          width={632}
          height={771}
        />
      </section>
      <section>
        <p>Só mais um pouquinho.</p>
        <p>Quase lá!</p>
      </section>
    </main>
  );
}
