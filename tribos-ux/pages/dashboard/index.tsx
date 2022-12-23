// React Hooks
import { useContext, useEffect, useRef, useState } from 'react'

// Nextjs Tools
import Image from 'next//image'

// Styles
import styles from '/styles/Dashboard.module.scss'

// Forms Steps
import CadastroEnd from '@/components/Forms/CadastroEnd'
import CadastroForm1 from '@/components/Forms/CadastroForm1'
import CadastroForm2 from '@/components/Forms/CadastroForm2'

// Layout
import DashboardLayout from '@/components/Layout/DashboardLayout/DashboardLayout'

// Icons
import {
  stepIndicatorNumber1,
  stepIndicatorNumber2,
  stepIndicatorNumber3,
  SublinhadoMenor,
} from '../../components/common/Icons'

import step_ok from '../../public/StepsOk.png'

export default function Welcome() {
  const [formStep, setFormStep] = useState(0)

  const nextForm = () => {
    setFormStep((currentStep) => currentStep + 1)
  }
  return (
    <section className={styles.dashboard_welcome}>
      <section className={styles.container}>
        {formStep !== 3 &&
          <h1 className={styles.dashboard_titulo}>
          Olá, seja bem-vindo(a)! <br></br>
          Vamos configurar seu
          <strong className={styles.dashboard_palavra_sublinhada}>
            perfil?
            <span>
              <SublinhadoMenor />
            </span>
          </strong>
        </h1>

        }
      
        <div className={styles.dashboard_steps_indicator}>
          <figure className={formStep === 0 ? styles.step_now : null}>
            {formStep === 0 ? (
              stepIndicatorNumber1
            ) : (
              <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
            )}
          </figure>
          <figure className={formStep === 1 ? styles.step_now : null}>
            {formStep >= 2 ? (
              <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
            ) : (
              stepIndicatorNumber2
            )}
          </figure>
          <figure>
            {formStep >= 2 ? (
              <Image src={step_ok} alt={'Está ok'} width={42} height={42} />
            ) : (
              stepIndicatorNumber2
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
            <CadastroForm1 nextForm={nextForm} />
          </>
        )}
        {formStep === 1 && (
          <>
            <CadastroForm2 nextForm={nextForm} />
          </>
        )}
        {formStep === 2 && (
          <>
            <CadastroEnd />
          </>
        )}
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

Welcome.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
