// supabase
import { supabase } from "./api/supabase";

// Styles modules
import styles from "../styles/Signup.module.scss";

// Images
import Group461 from "../public/Group461.svg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import NestedLayout from "../components/Layout/NestedLayout/NestedLayout"

// React Hooks
import { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Home/Layout'
import { ExclamationMark } from "../components/common/Icons";

export default function Signup() {
  const router = useRouter();
   // useRef to store the input element
   const emailRef =  useRef<HTMLInputElement>();;
   const passwordRef =  useRef<HTMLInputElement>();;
   const passwordRepeatRef =  useRef<HTMLInputElement>();;
     // Error state
  const [error, setError] = useState(null);
   
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Get the email and password from the form
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordRepeat = passwordRepeatRef.current.value;

    // Get error from supabase auth
    const { error } = await supabase.auth.signUp({ email: email, password: passwordRepeat });

    console.log(error);

    if (password != passwordRepeat) {
      return setError(`Passwords don't match`);
    }

    if (error) {
      return setError(error.message);
    }
    return router.push("/dashboard");
  };

  return (
    <main className={styles.signup_main}>
      <div className={styles.login_img}>
        <Image src={Group461} alt="Image Login" />
      </div>

      <section className={styles.signup_form}>
        <article className={styles.signup_intro}>
          <h2>Criar minha conta no UX Tribos</h2>
          <p>
            Crie sua conta gratuitamente e encontre uma comunidade de pessoas
            com objetivos em comum com os seus, aprender UX!
          </p>
        </article>

        <form className={styles.signup_inputs}  onSubmit={handleSubmit}>
          <fieldset className={styles.email_input}>
            <legend>Email</legend>
            <input
              placeholder="Digite seu email"
              type="email"
              name="email" ref={emailRef}
            />
          </fieldset>
          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password" ref={passwordRef}
            />
          </fieldset>

          <div className={styles.password_advisor}>
            <ExclamationMark />
            <p>
              Mínimo de 6 caracteres, pelo menos um número e um caractere
              especial
            </p>
          </div>

          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Digite sua senha"
              type="password"
              ref={passwordRepeatRef}
            />
          </fieldset>

          <div className={styles.checkbox_terms}>
            <label htmlFor="agreement">
              <input type="checkbox" id="agreement_terms" />
              Eu li, entendi e aceito os{" "}
              <button className={styles.terms}>Termos e Condições</button>
            </label>
            <label htmlFor="agreement">
              <input type="checkbox" id="agreement_privacy" />
              Eu li, entendi e aceito a{" "}
              <button className={styles.privacy}>
                Política de Privacidade
              </button>
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <div className={styles.buttons}></div>

        <div className={styles.info_signup}>
          <h3>
            Já tem cadastro?
            <Link href="/login">Entre!</Link>
          </h3>
        </div>
      </section>
    </main>
  );
}

Signup.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
function useAuth(): { signUp: any; } {
  throw new Error("Function not implemented.");
}

