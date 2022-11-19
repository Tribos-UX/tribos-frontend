// Styles modules
import styles from "/styles/PasswordCode.module.scss";

//Nextjs tools
import Image from "next/image";
import Link from "next/link";

import Group461 from "../../public/Group461.svg";

import NestedLayout from "../../components/Layout/NestedLayout/NestedLayout";


export default function Code() {
    return (
        <div>
            <main className={styles.forgot_password_main}>
                <div className={styles.login_img}>
                    <Image src={Group461} alt="Image Login" />
                </div>

                <form className={styles.forgot_password}>

                    <h1>Esqueceu a senha? Sem problemas!</h1>
                    <p>Digite o seu código de confirmação</p>

                    <fieldset className={styles.forgot_password_input}>
                        <legend>Código de confirmação</legend>
                        <input
                            placeholder="Código de confirmação"
                            type="text"
                        />
                    </fieldset>

                    <div className={styles.forgot_password_button}>
                        <Link href="/password/new">Avançar</Link>
                    </div>

                    <div>
                        <span> </span>
                        <p>ou</p>
                        <span> </span>
                    </div>

                    <div className={styles.info_forgot_password}>
                        <h3>
                            Nao recebeu o código? Reenvie!
                        </h3>
                    </div>
                </form>
            </main >
        </div>
    )
}

Code.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;