// Cookies
import { setCookie, getCookie } from "cookies-next";

// import styles from modules
import styles from "../styles/Login.module.scss";

//import images from public
import loginImg from "../public/login.jpg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Layout
import NestedLayout from "../components/NestedLayout";

// React Hooks
import { useState } from "react";

// Firebase
import firebase from "/firebase/clientApp";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = async (email, password) => {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;
          const userProfile = await firebase
            .firestore()
            .collection("users")
            .doc(uid)
            .get();
          let data = {
            uid: uid,
            email: email,
          };

          console.log(data);

          router.push("/dashboard/firstacess");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (email !== "" && password !== "") {
      login(email, password);
    }
  };

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

            <Link href={"/password/recover"}>
              <a>Esqueci a senha</a>
            </Link>
          </div>

          <div className={styles.login_input}>
          </div>
        </form>

        <div className={styles.info_login}>
          <h3>Esqueceu a senha?</h3>
          <p>ou</p>
          <h3>
            Ainda não tem uma conta?
            <Link href="/signup">
              <a> Cadastre-se</a>
            </Link>
          </h3>
        </div>
      </section>
    </main>
  );
}

Login.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;

