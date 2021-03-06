// Components
import { Button } from "../components/Button";

// import styles from modules
import styles from "../styles/Login.module.scss";

//import images from public
import loginImg from "../public/login.jpg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";
import NestedLayout from "../components/NestedLayout";

// React Hooks
import { useState } from "react";

// Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};

  return (
    <main className={styles.login_main}>
      <div className={styles.login_img}>
        <Image src={loginImg} alt="Image Login" />
      </div>

      <section className={styles.login_form}>
        <article className={styles.intro}>
          <h2>Legal ver você aqui!</h2>
          <p>
            Entre na UX Tribos e comece a conversar com os grupos de estudos.
          </p>
        </article>

        <div className={styles.buttons}>
          <Button text={"Google"} svg="google" />
          <Button text={"Facebook"} svg="facebook" />
        </div>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <form className={styles.login_inputs} onSubmit={handleSubmit}>
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

            <Link href={"/"}>
              <a>Esqueci a senha</a>
            </Link>
          </div>

          <div className={styles.login_input}>
            <Button text={"Entrar"} type={"submit"} />
          </div>
        </form>

        <div className={styles.info_login}>
          <h3>Esqueceu a senha?</h3>
          <p>ou</p>
          <h3>
            Ainda não tem uma conta?
            <Link href="/">
              <a> Cadastre-se</a>
            </Link>
          </h3>
        </div>
      </section>
    </main>
  );
}

Login.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
