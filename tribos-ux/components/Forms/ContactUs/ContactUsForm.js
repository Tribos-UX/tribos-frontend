// Styles
import styles from "../ContactUs/ContactUsForm.module.scss"

export default function ContactUsForm() {
    return (
        <form className={styles.contato_form}>
            <h1>Fale conosco 💬</h1>
            <span>Deixe sua mensagem e responderemos em breve.</span>

            <fieldset className={styles.contato_input}>
                <legend>Email</legend>
                <input
                    type="email"
                    placeholder="Digite seu email"
                />
            </fieldset>

            <fieldset className={styles.contato_input}>
                <legend>Nome</legend>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                />
            </fieldset>

            <fieldset className={styles.contato_input}>
                <legend>Assunto</legend>
                <input
                    type="text"
                    placeholder="Digite o titulo da mensagem"
                />
            </fieldset>

            <fieldset className={styles.contato_msg_input}>
                <legend>Mensagem</legend>
                <textarea
                    placeholder="Digite sua mensagem"
                />
            </fieldset>

            <div className={styles.contato_button}>
                <button type="submit">Enviar mensagem</button>
            </div>
        </form>
    )
}
