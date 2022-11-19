// Styles modules
import styles from "/styles/PasswordNew.module.scss";

//Nextjs tools
import Image from "next/image";

import Group461 from "../../public/Group461.svg";

import NestedLayout from "../../components/Layout/NestedLayout/NestedLayout";


export default function New() {
    return (
        <div>
            <main className={styles.forgot_password_main}>
                <div className={styles.login_img}>
                    <Image src={Group461} alt="Image Login" />
                </div>

                <form className={styles.forgot_password}>

                    <h1>Esqueceu a senha? Sem problemas!</h1>
                    <p>ÓTIMO! Código certo! Digite sua nova senha</p>

                    <fieldset className={styles.forgot_password_input}>
                        <legend>Nova senha</legend>
                        <input
                            placeholder="Nova senha"
                            type="password"
                        />
                    </fieldset>

                    <fieldset className={styles.forgot_password_input}>
                        <legend>Confirme sua nova senha</legend>
                        <input
                            placeholder="Confirmação de nova senha"
                            type="password"
                        />
                    </fieldset>

                    <div className={styles.forgot_password_button}>
                        <button>Concluir</button>
                    </div>
                </form>
            </main >
        </div>
    )
}

New.getLayout = (page) => <NestedLayout>{page}</NestedLayout>;