// Styles modules
import styles from "/styles/WrongCode.module.scss";

// Nextjs tools
import Image from "next//image";

import loginImg from "../../public/login.jpg";

// Layout for the page
import NestedLayout from "../../components/NestedLayout";

export default function CodeWrong() {
  return (
    <div>
      <main className={styles.forgot_password_main}>
        <Image src={loginImg} alt="Image Login" />
        <div className={styles.login_img}></div>

        <form className={styles.forgot_password}>
          <h1>Esqueceu a senha? Sem problemas!</h1>
          <p>
            Insira o email que você usou para criar a sua conta, iremos enviar
            um código de confirmação!
          </p>

          <fieldset className={styles.forgot_password_input}>
            <legend>Email</legend>
            <input placeholder="Digite seu email" type="email" />
          </fieldset>

          <div className={styles.forgot_password_button}>
            <button>Avancar</button>
          </div>

          <div>
            <span> </span>
            <p>ou</p>
            <span> </span>
          </div>

          <div className={styles.info_forgot_password}>
            <h3>Nao lembra? Entre em contato.</h3>

            <div className={styles.info_forgot_password}>
              <h3>Lembrou a senha? Entre!</h3>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

CodeWrong.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
