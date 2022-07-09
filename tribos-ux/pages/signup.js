// Components
import { Button } from "../components/Button";

// Icons
import { ExclamationMark, exclamationMark } from "../components/Icons";

// Styles modules
import styles from "../styles/Signup.module.scss";

// Images
import loginImg from "../public/login.jpg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";

// Layout for the page
import NestedLayout from "../components/NestedLayout";

// Firebase
import { auth, provider } from "../firebase/clientApp";

// React Hooks
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Sign up with email and password with firebase

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não conferem");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("ola");
  };

  return (
    <main className={styles.signup_main}>
      <div className={styles.login_img}>
        <Image src={loginImg} alt="Image Login" />
      </div>

      <section className={styles.signup_form}>
        <article className={styles.signup_intro}>
          <h2>Criar minha conta no UX Tribos</h2>
          <p>
            Crie sua conta gratuitamente e encontre uma comunidade de pessoas
            com objetivos em comum com os seus, aprender UX!
          </p>
        </article>

        <form className={styles.signup_inputs} onSubmit={handleSubmit}>
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

          <div className={styles.password_advisor}>
            <ExclamationMark />
            <p>
              Mínimo de 6 caracteres, pelo menos um número e um caractere
              especial
            </p>
          </div>

          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input placeholder="Digite sua senha" type="password" />
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

          <div className={styles.signup_input}>
            <button type="submit">Cadastrar</button>
          </div>
        </form>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <div className={styles.buttons}>
          <Button text={"Google"} svg={"google"} />
          <Button text={"Facebook"} svg={"facebook"} />
        </div>

        <div className={styles.info_signup}>
          <h3>
            Já tem cadastro?
            <Link href="/">
              <a> Entre!</a>
            </Link>
          </h3>
        </div>
      </section>
    </main>
  );
}

Signup.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;
