// Styles modules
import styles from "/styles/PasswordCodeWrong.module.scss";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";

import Group461 from "../../public/Group461.svg";

import NestedLayout from "../../components/Layout/NestedLayout/NestedLayout";

export default function CodeWrong() {
    return (
        <div>
            <main className={styles.forgot_password_main}>
                <div className={styles.login_img}>
                    <Image src={Group461} alt="Image Login" />
                </div>

                <form className={styles.forgot_password}>

                    <h1>Esqueceu a senha? Sem problemas!</h1>
                    <p>Código errado :( Tente novamente!</p>

                    <fieldset className={styles.forgot_password_input}>
                        <legend>Codigo de confirmacao</legend>
                        <input
                            placeholder="Codigo de confirmacao"
                            type="text"
                        />
                    </fieldset>

                    <div className={styles.forgot_password_button}>
                        <Link href="/password/new">Avancar</Link>
                    </div>

                    <div>
                        <span> </span>
                        <p>ou</p>
                        <span> </span>
                    </div>

                    <div className={styles.info_forgot_password}>
                        <h3>
                            Nao recebeu o codigo? Reenvie!
                        </h3>
                    </div>
                </form>
            </main >
        </div>
    )
}

CodeWrong.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;