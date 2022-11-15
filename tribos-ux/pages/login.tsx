// import styles from modules
import styles from "../styles/Login.module.scss";

//import images from public
import Group461 from "../public/Group461.svg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Navbar from "../components/Layout/Navbar/Navbar"

// React Hooks
import { useState } from "react";

import NestedLayout from "../components/Layout/NestedLayout/NestedLayout"

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <main className={styles.login_main}>
      <div className={styles.login_img}>
        <Image src={Group461} alt="Image Login" />
      </div>

      <section className={styles.login_form}>
        <article className={styles.intro}>
          <h2>Legal ver você aqui!</h2>
          <p>
            Entre no UX Tribos e comece a conversar com os grupos de estudos.
          </p>
        </article>

        <div className={styles.buttons}></div>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <form className={styles.login_inputs}>
          <fieldset className={styles.email_input}>
            <legend>Email</legend>
            <input
              placeholder="Digite seu email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div className={styles.checkbox}>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembre de mim
            </label>

            <Link href={"/password/recover"}>Esqueci a senha</Link>
          </div>

          <div className={styles.login_input}></div>
        </form>

        <div className={styles.info_login}>
          <h3>Esqueceu a senha?</h3>
          <p>ou</p>
          <h3>
            Ainda não tem uma conta?
            <Link href="/signup">Cadastre-se</Link>
          </h3>
        </div>
      </section>
    </main>
  );
}

Login.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
