import React from "react";
import styles from "../styles/Login.module.css";
import loginImage from "../public/login.png";
import Image from "next/image";
import { Button } from "../components/Button";
import googleIcon from "../public/google-icons-fill.png";

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
          <Button text={` Google `} />
          <Button text={"Facebook"} />
        </div>
        <div className={styles.continue}>
          <span></span>
          <p>Ou continue com</p>
          <span></span>
        </div>
        <form></form>
      </div>
    </div>
  );
}

export default login;
