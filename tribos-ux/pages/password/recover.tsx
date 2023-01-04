// Styles modules
import styles from '../../styles/PasswordRecover.module.scss'

//Nextjs tools
import Image from 'next/image'
import Link from 'next/link'

// Images
import Group461 from '../../public/Group461.svg'

// Supabase
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// React
import { useRef } from 'react'

// Layout
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import NestedLayout from '../../components/Layout/NestedLayout/NestedLayout'

export default function Recover() {
  const supabase = useSupabaseClient()
  const email = useRef<HTMLInputElement>()

  console.log(email)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.resetPasswordForEmail(
      `${email.current.value}`
    )

    return alert('Verifique a caixa de entrada de seu email!')
  }

  return (
    <section className={styles.forgot_password_main}>
      <div className={styles.login_img}>
        <Image src={Group461} alt="Image Login" />
      </div>

      <form className={styles.forgot_password} onSubmit={handleSubmit}>
        <h1>Esqueceu a senha? Sem problemas!</h1>
        <p>
          Insira o email que você usou para criar a sua conta, iremos enviar um
          código de confirmação!
        </p>

        <fieldset className={styles.forgot_password_input}>
          <legend>Email</legend>
          <input placeholder="Digite seu email" type="email" />
        </fieldset>

        <div className={styles.forgot_password_button}>
          <button type="submit">Avançar</button>
        </div>
        <p>ou</p>
        <Link className={styles.recover_contact} href="/contato">
          Não lembra? Entre em contato.
        </Link>
        <h3>
          Lembrou a senha?
          <Link href="/login">Entre!</Link>
        </h3>
      </form>
    </section>
  )
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  }
}

Recover.getLayout = (page) => <NestedLayout>{page}</NestedLayout>
