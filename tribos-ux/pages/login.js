import React from "react";
import styles from "../styles/Login.module.css";
import loginImage from "../public/login.png";
import Image from "next/image";
import { Button } from "../components/Button";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function login() {
  return (
    <div className={styles.login_main}>
      <div className={styles.login_logo}>
        <Image src={loginImage} alt="Image Login" />
      </div>

      <div className={styles.intro}>
        <h2> Legal ver você aqui :) </h2>
        <p>Entre no UX Tribos e começe a conversar com os grupos de estudos</p>

        <div className={styles.buttons}>
          <div className={styles.btn_google}>
            <Button>
              <AiFillGoogleCircle size={24} color="#D87036" />
              <h4>Google</h4>
            </Button>
          </div>
          <div className={styles.btn_facebook}>
            <Button>
              <BsFacebook size={24} color="#2D5BFF" />
              <h4>Facebook</h4>
            </Button>
          </div>
        </div>

        <div className={styles.continue}>
          <span></span>
          <p>Ou continue com</p>
          <span></span>
        </div>
        <form className={styles.login_inputs}>
          <fieldset className={styles.email_input}>
            <legend>Email</legend>
            <input placeholder="Digite seu email" type="email" />
          </fieldset>
          <fieldset className={styles.email_input}>
            <legend>Senha</legend>
            <input placeholder="Digite sua senha" type="password" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default login;
