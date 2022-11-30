// Styles modules
import styles from "/styles/PasswordRecover.module.scss";

import Link from "next/link";

//Nextjs tools
import Image from "next/image";

import Group461 from "../../public/Group461.svg";

import NestedLayout from "../../components/Layout/NestedLayout/NestedLayout";

export default function Recover() {
  return (
    <main className={styles.forgot_password_main}>
      <div className={styles.login_img}>
        <Image src={Group461} alt="Image Login" />
      </div>

      <form className={styles.forgot_password}>

        <h1>Esqueceu a senha? Sem problemas!</h1>
        <p>Insira o email que você usou para criar a sua conta, iremos enviar um código de confirmação!</p>

        <fieldset className={styles.forgot_password_input}>
          <legend>Email</legend>
          <input
            placeholder="Digite seu email"
            type="email"
          />
        </fieldset>

        <div className={styles.forgot_password_button}>
          <Link href="/password/code">Avançar</Link>
        </div>
        <p>ou</p>
        <Link
          className={styles.recover_contact}
          href="/contato">Não lembra? Entre em contato.
        </Link>
        <h3>
          Lembrou a senha?
          <Link href="/login">Entre!</Link>
        </h3>
      </form>
    </main >
  )
}

Recover.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;