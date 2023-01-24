// React Hooks
import { useState } from 'react'

// Nextjs Tools
import Image from 'next//image'

// Styles
import styles from '/styles/Dashboard.module.scss'

// Layout
import DashboardLayout from '@/components/Layout/DashboardLayout/DashboardLayout'

// Forms Steps
import {
  stepIndicatorNumber1,
  stepIndicatorNumber2,
  stepIndicatorNumber3,
  SublinhadoMenor,
} from '../../components/common/Icons'
import step_ok from '../../public/StepsOk.png'

// Forms
import CadastroEnd from '@/components/Forms/Cadastro/CadastroEnd'
import CadastroForm1 from '@/components/Forms/Cadastro/CadastroForm1'
import CadastroForm2 from '@/components/Forms/Cadastro/CadastroForm2'

// Supabase
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function Welcome({ user }) {
  const [formStep, setFormStep] = useState(0)

  const nextForm = () => {
    setFormStep((currentStep) => currentStep + 1)
  }

  return (
    <>
      <section className={styles.dashboard_welcome}>
        <section className={styles.container}>
          <h1
            className={
              formStep === 2
                ? styles.dashboard_titulo_hidden
                : styles.dashboard_titulo
            }
          >
            Olá, seja bem-vindo(a)! <br></br>
            Vamos configurar seu
            <strong className={styles.dashboard_palavra_sublinhada}>
              perfil?
              <span>
                <SublinhadoMenor />
              </span>
            </strong>
          </h1>

          <div className={styles.dashboard_steps_indicator}>
            <figure className={formStep === 0 ? styles.step_now : null}>
              {formStep === 0 ? (
                stepIndicatorNumber1
              ) : (
                <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
              )}
            </figure>
            <span className={styles.linha}></span>
            <figure className={formStep === 1 ? styles.step_now : null}>
              {formStep >= 2 ? (
                <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
              ) : (
                stepIndicatorNumber2
              )}
            </figure>
            <span className={styles.linha}></span>
            <figure>
              {formStep >= 2 ? (
                <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
              ) : (
                stepIndicatorNumber3
              )}
            </figure>
          </div>

          {formStep === 3 ? (
            <h2 className={styles.dashboard_subtitulo}>
              Gostariamos de saber um pouco mais sobre você{' '}
            </h2>
          ) : null}

          {formStep === 0 && (
            <>
              <CadastroForm1 nextForm={nextForm} id={user.id} />
            </>
          )}
          {formStep === 1 && (
            <>
              <CadastroForm2 id={user.id} nextForm={nextForm} />
            </>
          )}
          {formStep === 2 && (
            <>
              <CadastroEnd />
            </>
          )}
        </section>
      </section>
      {formStep === 0 && (
        <Image
          src={`https://res.cloudinary.com/deaejawfj/image/upload/v1668628144/tribos-ux/Component_7_omsd53.png`}
          alt="imagem de background"
          className={styles.background_image}
          width={1017}
          height={1024}
        />
      )}
      {formStep == 1 && (
        <Image
          src={
            'https://res.cloudinary.com/deaejawfj/image/upload/v1668628144/tribos-ux/Component_7_omsd53.png'
          }
          alt="Imagem de uma menina com os braços levantados"
          className={styles.background_image}
          width={1017}
          height={1024}
        />
      )}
    </>
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

Welcome.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
