import { Button } from "../components/Button";

// import styles from modules
import styles from "../styles/Login.module.scss";

//import images from public
import loginImg from "../public/login.jpg";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";

const fbIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13.2508 19.0557V12.5271H15.053L15.2918 10.2773H13.2508L13.2538 9.15125C13.2538 8.56447 13.3096 8.25006 14.1524 8.25006H15.279V6H13.4766C11.3116 6 10.5495 7.0914 10.5495 8.92678V10.2776H9.2V12.5274H10.5495V19.0557H13.2508Z"
      fill="#2D5BFF"
    />
  </svg>
);

const googleIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 0C3.58133 0 0 3.582 0 8C0 12.418 3.58133 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8.09333 12.6787C5.51467 12.6787 3.42667 10.5853 3.42667 8C3.42667 5.41467 5.51467 3.32133 8.09333 3.32133C9.35333 3.32133 10.4067 3.786 11.2147 4.54067L9.89867 5.85933V5.85667C9.40867 5.38867 8.78733 5.14867 8.09333 5.14867C6.55333 5.14867 5.302 6.45267 5.302 7.99733C5.302 9.54067 6.55333 10.8487 8.09333 10.8487C9.49067 10.8487 10.4413 10.0473 10.6373 8.94733H8.09333V7.12267H12.4833C12.542 7.436 12.5733 7.76267 12.5733 8.10533C12.5733 10.7787 10.7887 12.6787 8.09333 12.6787Z"
      fill="#D87036"
    />
  </svg>
);

export default function Login() {
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
          <Button text={"Google"} svg={googleIcon} />
          <Button text={"Facebook"} svg={fbIcon} />
        </div>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <form className={styles.login_inputs}>
          <fieldset className={styles.email_input}>
            <legend>Email</legend>
            <input placeholder="Digite seu email" type="email" />
          </fieldset>
          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input placeholder="Digite sua senha" type="password" />
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
