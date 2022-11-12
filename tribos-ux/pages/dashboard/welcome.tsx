// React Hooks
import { useContext, useEffect, useState } from 'react'

// Nextjs Tools
import Image from 'next//image'
import { useRouter } from 'next/router'

// Styles
import styles from '/styles/Dashboard.module.scss'

// BackgroundImages
import backgroundImage from '../../public/backgroundImageDashboard.png'
import form1background from '../../public/form1backgroundblue.jpg'

// Forms Steps
import CadastroForm1 from '@/components/Forms/CadastroForm1'
import CadastroForm2 from '@/components/Forms/CadastroForm2'

// Layout
import DashboardLayout from '@/components/Layout/DashboardLayout/DashboardLayout'

// Icons
import CadastroEnd from '@/components/Forms/CadastroEnd'
import {
  stepIndicatorNumber1,
  stepIndicatorNumber2,
  stepIndicatorNumber3,
  SublinhadoMenor,
} from '../../components/common/Icons'

export default function Welcome() {
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [behance, setBehance] = useState('')
  const [formStep, setFormStep] = useState(0)

  const nextForm = (e) => {
    e.preventDefault();
    setFormStep((currentStep) => currentStep + 1)
  }
  return (
    <section className={styles.dashboard_welcome}>
      <div className={styles.container}>
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

        <div className={styles.dashboard_steps_indicator}>
          <div>{stepIndicatorNumber1}</div>
          <div>{stepIndicatorNumber2}</div>
          <div>{stepIndicatorNumber3}</div>
        </div>

        <h2 className={styles.dashboard_subtitulo}>Gostariamos de saber um pouco mais sobre você </h2>

        {formStep === 0 && (
          <>
            <CadastroForm1 nextForm={nextForm} />
          </>
        )}
        {formStep === 1 && (
          <>
            <CadastroForm2 nextForm={nextForm} />
          </>
        )
        }
      </div >
      {formStep === 0 && (<Image src={backgroundImage} alt="imagem de background" className={styles.background_image} />
      )}
      {
        formStep === 1 && (
          <Image src=
    </section >

  )
}
  )
}

Welcome.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
