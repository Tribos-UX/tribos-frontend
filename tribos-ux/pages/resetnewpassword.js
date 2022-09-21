// Nextjs tools
import Image from "next/future/image";

//Images
import Group461 from "../public/Group461.svg"

// Components
import Layout from "../components/Layouts";

// Styles
import styles from "../styles/ForgotPassword.module.scss";

export default function About() {

    return (
        <main className={styles.forgotpassword_main}>
            <div className={styles.forgotpassword_img}>
                <Image src={Group461} alt="Image Login" />
            </div>

            <section className={styles.forgotpassword_form}>
                <article className={styles.forgotpassword_intro}>
                    <h2>Esqueceu a senha? Sem problemas!</h2>
                    <p>
                        Insira o email que você usou para criar a sua conta, iremos enviar um código de confirmação!
                    </p>
                </article>

                <form className={styles.forgotpassword_input}>
                    <fieldset className={styles.email_input}>
                        <legend>Email</legend>
                        <input
                            placeholder="Digite seu email"
                            type="email"
                            name="email"
                        />
                    </fieldset>

                </form>

                <div className={styles.info_login}>
                    <p>ou</p>
                    <h3>Não lembra? Entre em contato</h3>
                    <h4>
                        Lembrou a senha? Entre!
                    </h4>
                </div>
            </section>

        </main>
    )
}
