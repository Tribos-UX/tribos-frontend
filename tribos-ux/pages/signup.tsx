// supabase
import { supabase } from './api/supabase'

// Styles modules
import styles from '../styles/Signup.module.scss'

// Images
import Group461 from '../public/Group461.svg'

// React
import React from 'react'

//Nextjs tools
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../components/Layout/Home/Layout'

// React Hooks
import { useRef, useState } from 'react'

// Icons
import { ExclamationMark, FbIcon, GoogleIcon } from '../components/common/Icons'

// Material Ui
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function Signup() {
  const router = useRouter()

  // useRef to store the input element
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const passwordRepeatRef = useRef<HTMLInputElement>()

  // Error state
  const [error, setError] = useState(null)

  // Show Password
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    // Get the email and password from the form
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordRepeat = passwordRepeatRef.current.value

    // Get error from supabase auth
    const { error } = await supabase.auth.signUp({
      email: email,
      password: passwordRepeat,
    })

    console.log(error)

    if (password != passwordRepeat) {
      return setError(`Passwords don't match`)
    }

    if (error) {
      return setError(error.message)
    }
    return router.push('/dashboard')
  }

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    width: '180px',
    padding: '10px 24px',
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#344054',
    borderRadius: '1rem',
    backgroundColor: '#FBFBFC',
    color: '#344054',
    fontFamily: [
      'Montserrat',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#D87036',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  })

  return (
    <div className={styles.signup_main}>
      <Image
        src={Group461}
        alt="Image Login"
        width={1333}
        height={886}
        className={styles.login_img}
      />

      <section className={styles.signup_form}>
        <h1>Criar minha conta no UX Tribos</h1>
        <p>
          Crie sua conta gratuitamente e encontre uma comunidade de pessoas com
          objetivos em comum com os seus, aprender UX!
        </p>

        <form className={styles.signup_inputs} onSubmit={handleSubmit}>
          <fieldset className={styles.email_input}>
            <legend>Email</legend>
            <input
              placeholder="Digite seu email"
              type={showPassword ? 'text' : 'password'}
              name="email"
              ref={emailRef}
            />
          </fieldset>
          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Digite sua senha"
              type="password"
              name="password"
              ref={passwordRef}
            />
          </fieldset>

          <div className={styles.password_advisor}>
            <ExclamationMark />
            <p>
              Mínimo de 6 caracteres, pelo menos um número e um caractere
              especial
            </p>
          </div>

          <fieldset className={styles.password_input}>
            <legend>Senha</legend>
            <input
              placeholder="Confirme sua senha"
              type="password"
              ref={passwordRepeatRef}
            />
          </fieldset>

          <div className={styles.checkbox_terms}>
            <label htmlFor="agreement">
              <input type="checkbox" id="agreement_terms" required />
              Eu li, entendi e aceito os{' '}
              <button className={styles.terms}>Termos e Condições</button>
            </label>
            <label htmlFor="agreement">
              <input type="checkbox" id="agreement_privacy" required />
              Eu li, entendi e aceito a{' '}
              <button className={styles.privacy}>
                Política de Privacidade
              </button>
            </label>
          </div>
          <Button
            type="submit"
            sx={{
              backgroundColor: '#D87036',
              borderRadius: '1rem',
              padding: '0.7rem 0',
              fontSize: '1.125rem',
              fontWeight: '700',
              fontFamily: 'Montserrat',
              color: '#FFFFFF',
              '&:hover': {
                color: '#D87036',
              },
            }}
          >
            Entrar
          </Button>
        </form>

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <div className={styles.buttons}>
          <BootstrapButton
            startIcon={<GoogleIcon />}
            variant="contained"
            disableRipple
          >
            <b>Google</b>
          </BootstrapButton>
          <BootstrapButton
            startIcon={<FbIcon />}
            variant="contained"
            disableRipple
          >
            <b>Facebook</b>
          </BootstrapButton>
        </div>

        <div className={styles.info_signup}>
          <h3>
            Já tem cadastro?
            <Link href="/login">Entre!</Link>
          </h3>
        </div>
      </section>
    </div>
  )
}

Signup.getLayout = (page) => <Layout>{page}</Layout>

