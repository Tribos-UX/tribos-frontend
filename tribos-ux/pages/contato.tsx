// Nextjs tools
import Image from "next//image";
import Layout from "../components/Layout/Home/Layout";

//Images
import contatoImg from "../public/contato-img.svg";

// Styles
import styles from "../styles/Contato.module.scss";

export default function Contato() {
  return (
    <div className={styles.contato_container}>
      <div className={styles.contato_description}>
        <div className={styles.contato_img}>
          <Image src={contatoImg} alt="Contact Image" />
        </div>
        <h1>
          {" "}
          Precisa falar com a gente? Entre em contato no formulário ao lado e
          responderemos o mais rápido possível!
        </h1>
      </div>

      <form className={styles.contato_form}>
        <h1>Fale conosco 💬</h1>
        <span>Deixe sua mensagem e responderemos em breve.</span>

        <fieldset className={styles.contato_input}>
          <legend>Email</legend>
          <input placeholder="Digite seu email" />
        </fieldset>

        <fieldset className={styles.contato_input}>
          <legend>Nome</legend>
          <input placeholder="Digite seu nome" />
        </fieldset>
        <fieldset className={styles.contato_input}>
          <legend>Assunto</legend>
          <input placeholder="Digite o titulo da mensagem" />
        </fieldset>
        <fieldset className={styles.contato_input}>
          <legend>Mensagem</legend>
          <input placeholder="Digite sua mensagem" />
        </fieldset>

        <div className={styles.partners_section}>
          <button>Enviar mensagem</button>
        </div>
      </form>
    </div>
  );
}

Contato.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
