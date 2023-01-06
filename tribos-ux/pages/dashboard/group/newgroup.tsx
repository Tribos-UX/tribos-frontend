// React Hooks
import { useState } from 'react'

// background image
import bgImage from '../../../public/GroupImageBg.png'

// Nextjs Tools
import Image from 'next//image'

// Styles
import styles from '/styles/Dashboard.module.scss'

// Forms
import GroupForm1 from '@/components/Forms/NewGroup/GroupForm1'
import GroupForm2 from '@/components/Forms/NewGroup/GroupForm2'
import GroupFormEnd from '@/components/Forms/NewGroup/GroupFormEnd'

// Layout
import DashboardLayout from '@/components/Layout/DashboardLayout/DashboardLayout'

// Icons
import {
  stepIndicatorNumber1,
  stepIndicatorNumber2,
  stepIndicatorNumber3,
  SublinhadoMenor,
} from '@/components/common/Icons'

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import step_ok from '../../../public/StepsOk.png'

export default function NewGroup({ user }) {
  const [formStep, setFormStep] = useState(0)

  const nextForm = () => {
    setFormStep((currentStep) => currentStep + 1)
  }

  console.log(formStep)
  return (
    <section className={styles.dashboard_welcome}>
      <section className={styles.container}>
        <h1
          className={
            formStep === 2
              ? styles.dashboard_titulo_hidden
              : styles.dashboard_titulo
          }
        >
          Vamos configurar seu primeiro
          <strong className={styles.dashboard_palavra_sublinhada}>
            grupo?
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
              <button onClick={() => setFormStep(0)}>
                <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
              </button>
            )}
          </figure>
          <span className={styles.linha}></span>
          <figure className={formStep === 1 ? styles.step_now : null}>
            {formStep >= 2 ? (
              <button onClick={() => setFormStep(1)}>
                <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
              </button>
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
            <GroupForm1 nextForm={nextForm} />
          </>
        )}
        {formStep === 1 && (
          <>
            <GroupForm2 id={user.id} nextForm={nextForm} />
          </>
        )}
        {formStep === 2 && (
          <>
            <GroupFormEnd />
          </>
        )}
      </section>
      {formStep === 0 && (
        <Image
          src={bgImage}
          alt="imagem de background"
          className={styles.background_image}
          width={1017}
          height={1024}
        />
      )}
      {formStep == 1 && (
        <Image
          src={
            'https://res.cloudinary.com/deaejawfj/image/upload/v1668457926/tribos-ux/form2backgroundblue_ilfva5.jpg'
          }
          alt="Imagem de uma menina com os braços levantados"
          className={styles.background_image}
          width={1017}
          height={1024}
        />
      )}
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

NewGroup.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
