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
import { useEffect, useRef, useState } from "react";
import {supabase} from "./api/supabase"

import NestedLayout from "../components/Layout/NestedLayout/NestedLayout"

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const emailRef =  useRef<HTMLInputElement>();;
  const passwordRef =  useRef<HTMLInputElement>();;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Get the email and password from the form
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password });
    
    
    if (error) {
      router.push("/signup")
      return setIsLoading(false);
    }

  };


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
             ref={emailRef}
            />
          </fieldset>
          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password"
              ref={passwordRef}
            />
          </fieldset>

          <div className={styles.checkbox}>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembre de mim
            </label>

            <Link href={"/password/recover"}>Esqueci a senha</Link>
          </div>

          <button type="submit" className={styles.login_input}>Submit</button>
        </form>

        <div className={styles.info_login}>
          <h3>Esqueceu a senha?</h3>
          <p>ou</p>
          <h3>
            Ainda não tem uma conta?
            <Link href="/signup">Cadastre-se</Link>
          </h3>
        </div>
        <div> {error}</div>
      </section>
    </main>
  );
}

Login.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
