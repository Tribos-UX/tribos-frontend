// Styles
import styles from '/styles/Faq.module.scss'

export default function Faq() {
  return (
    <div>
      <span>FAQ</span>
      <h1>Como podemos te ajudar?</h1>

      <fieldset>
        <legend>Pesquise</legend>
        <input placeholder="Digite aqui sua duvida" type="text" />
      </fieldset>

      <div className={styles.faq_navigation}>
        <ul>
          <li>Geral</li>
          <li>Plataforma</li>
          <li>API's</li>
          <li>Parcerias</li>
          <li>Gamificacao</li>
          <li>Outros</li>
        </ul>
      </div>

      <div className={styles.faq_question}>
        <h2>Nao encontrou o que procurava?</h2>

        <form className={styles.faq_form}>
          <h1>Fale conosco 💬</h1>
          <span>Deixe sua mensagem e responderemos em breve.</span>

          <fieldset className={styles.faq_input}>
            <legend>Email</legend>
            <input placeholder="Digite seu email" />
          </fieldset>

          <fieldset className={styles.faq_input}>
            <legend>Nome</legend>
            <input placeholder="Digite seu nome" />
          </fieldset>
          <fieldset className={styles.faq_input}>
            <legend>Assunto</legend>
            <input placeholder="Digite o titulo da mensagem" />
          </fieldset>
          <fieldset className={styles.faq_input}>
            <legend>Mensagem</legend>
            <input placeholder="Digite sua mensagem" />
          </fieldset>

          <div className={styles.faq_button}>
            <button>Enviar mensagem</button>
          </div>
        </form>
      </div>
    </div>
  )
}
