// Styles
import styles from '/styles/Faq.module.scss'

// Components
import ContactUsForm from "../../components/Forms/ContactUs/ContactUsForm"
import CardFaq from "../../components/Cards/Faq/CardFaq"

export default function Faq() {
  return (
    <div className={styles.faq_container}>
      <div className={styles.faq_intro}>
        <div className={styles.faq_info}>
          <span>FAQ</span>
          <h1>Como podemos te ajudar?</h1>
        </div>

        <div className={styles.faq_input}>
          <fieldset>
            <legend>Pesquise</legend>
            <input placeholder="Digite aqui sua duvida" type="text" />
          </fieldset>
        </div>

        <nav className={styles.faq_navigation}>
          <ul>
            <li>Geral</li>
            <li>Plataforma</li>
            <li>API's</li>
            <li>Parcerias</li>
            <li>Gamificacao</li>
            <li>Outros</li>
          </ul>
        </nav>
      </div>

      <div className={styles.faq_cards}>
        <div className={styles.faq_card}><CardFaq /></div>
        <div className={styles.faq_card}><CardFaq /></div>
        <div className={styles.faq_card}><CardFaq /></div>
        <div className={styles.faq_card}><CardFaq /></div>
        <div className={styles.faq_card}><CardFaq /></div>
        <div className={styles.faq_card}><CardFaq /></div>
      </div>

      <div className={styles.faq_question}>
        <h2>Nao encontrou o que procurava?</h2>
        <ContactUsForm />
      </div>
    </div>
  )
}
