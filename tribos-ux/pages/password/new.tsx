// Styles modules
import styles from '/styles/PasswordNew.module.scss'

//Nextjs tools
import Image from 'next/image'

import Group461 from '../../public/Group461.svg'

import { ExclamationMark } from '@/components/common/Icons'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useRef } from 'react'
import NestedLayout from '../../components/Layout/NestedLayout/NestedLayout'

export default function New() {
  const supabase = useSupabaseClient()
  const emailRef = useRef<HTMLInputElement>()

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'PASSWORD_RECOVERY') {
        const { data, error } = await supabase.auth.updateUser({
          password: emailRef.current.value,
        })

        if (data) alert('Password updated successfully!')
        if (error) alert('There was an error updating your password.')
      }
    })
  }, [])
  return (
    <div>
      <section className={styles.forgot_password_main}>
        <picture className={styles.login_img}>
          <Image src={Group461} alt="Image Login" />
        </picture>

        <form className={styles.forgot_password}>
          <h1>
            Esqueceu a senha? <br className={styles.forgot_password_br}></br>{' '}
            Sem problemas!
          </h1>
          <p>ÓTIMO! Código certo! Digite sua nova senha</p>

          <fieldset className={styles.forgot_password_input}>
            <legend>Nova senha</legend>
            <input placeholder="Nova senha" type="password" />
          </fieldset>
          <div className={styles.password_advisor}>
            <ExclamationMark />
            <p>
              Mínimo de 6 caracteres, pelo menos um número e um caractere
              especial
            </p>
          </div>

          <fieldset className={styles.forgot_password_input}>
            <legend>Confirme sua nova senha</legend>
            <input
              placeholder="Confirmação de nova senha"
              type="password"
              ref={emailRef}
            />
          </fieldset>

          <div className={styles.forgot_password_button}>
            <button>Concluir</button>
          </div>
        </form>
      </section>
    </div>
  )
}

New.getLayout = (page) => <NestedLayout>{page}</NestedLayout>
