import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

// Nextjs tools
import Image from 'next//image'
import Layout from '../components/Layout/HomeLayout/Layout'

//Images
import contatoImg from '../public/contato-img.svg'

// Styles
import styles from '../styles/Contato.module.scss'

export default function Contato() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()

  function sendEmail(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Preencha todos os campos')
      return
    }

    router.push('/contatoresposta')
  }

  return (
    <div className={styles.contato_container}>
      <div className={styles.contato_description}>
        <div className={styles.contato_img}>
          <Image src={contatoImg} alt="Contact Image" />
        </div>
        <p>
          <strong>Precisa falar com a gente?</strong>
          Entre em contato no formulário ao lado e responderemos o mais rápido
          possível!
        </p>
      </div>

      <form className={styles.contato_form} onSubmit={sendEmail}>
        <h1>Fale conosco 💬</h1>
        <span>Deixe sua mensagem e responderemos em breve.</span>

        <fieldset className={styles.contato_input}>
          <legend>Email</legend>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset className={styles.contato_input}>
          <legend>Nome</legend>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>

        <fieldset className={styles.contato_input}>
          <legend>Assunto</legend>
          <input
            type="text"
            placeholder="Digite o titulo da mensagem"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </fieldset>

        <fieldset className={styles.contato_msg_input}>
          <legend>Mensagem</legend>
          <textarea
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </fieldset>

        <div className={styles.partners_section}>
          <button type="submit">Enviar mensagem</button>
        </div>
      </form>
    </div>
  )
}

Contato.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
