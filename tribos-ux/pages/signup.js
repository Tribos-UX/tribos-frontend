// Icons
import { ExclamationMark, exclamationMark } from "../components/Icons";

// Styles modules
import styles from "../styles/Signup.module.scss";

// Images
import loginImg from "../public/login.jpg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Layout for the page
import NestedLayout from "../components/NestedLayout";

// Firebase
import firebase from "../firebase/clientApp";

// React Hooks
import { useRef, useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  const router = useRouter();

  // Sign up with email and password with firebase

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("As senhas não conferem");
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            email: email,
          })

          .then(() => {
            let data = {
              uid: uid,
              email: value.user.email,
            };

            router.push("/dashboard/firstacess");
          });
      })

      .catch((error) => {
        console.log(error);
      });
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
            <input
              placeholder="Digite sua senha"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <div className={styles.signup_input}></div>
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
