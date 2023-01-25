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

import Layout from '../components/Layout/HomeLayout/Layout'

// React Hooks
import { useRef, useState } from 'react'

// Icons
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { ExclamationMark, FbIcon, GoogleIcon } from '../components/common/Icons'

// Material Ui
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material'

// Supabase
import { Box } from '@mui/system'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Signup() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const [loading, SetLoading] = useState(false)

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

    SetLoading(true)

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
        <p className={styles.signup_form_p}>
          Crie sua conta gratuitamente e encontre uma comunidade de pessoas com
          objetivos em comum com os seus, aprender UX!
        </p>

        <form className={styles.signup_inputs} onSubmit={handleSubmit}>
          <TextField
            inputRef={emailRef}
            sx={{
              '& label.Mui-focused': {
                color: '#000000',
              },
              '& .MuiFormLabel-root': {
                display: 'flex',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '1rem',
                fontFamily: 'Lato',
                '&.Mui-focused fieldset': {
                  borderColor: '#D87036',
                  border: '1px solid #D87036',
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={'Digite seu email'}
            type="email"
            label={
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '1rem',
                  fontColor: '#00000',
                  fontFamily: 'Lato',
                }}
              >
                E-mail
              </Typography>
            }
            required
          />
          <TextField
            sx={{
              '& label.Mui-focused': {
                color: '#000000',
              },
              '& .MuiFormLabel-root': {
                display: 'flex',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '1rem',
                fontFamily: 'Lato',
                '&.Mui-focused fieldset': {
                  borderColor: '#D87036',
                  border: '1px solid #D87036',
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={passwordRef}
            placeholder={'Digite sua senha'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="outlined-password-input"
            label={
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '1rem',
                  fontColor: '#00000',
                  fontFamily: 'Lato',
                }}
              >
                {' '}
                Senha{' '}
              </Typography>
            }
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            helperText={
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',

                  fontFamily: 'Lato',
                  width: '100%',
                  fontWeight: '400',
                }}
              >
                {' '}
                <ExclamationMark />
                <p>
                  Mínimo de 6 caracteres, pelo menos um número e um caractere
                  especial
                </p>
              </Box>
            }
          />
          <TextField
            sx={{
              '& label.Mui-focused': {
                color: '#000000',
              },
              '& .MuiFormLabel-root': {
                display: 'flex',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '1rem',
                fontFamily: 'Lato',
                '&.Mui-focused fieldset': {
                  borderColor: '#D87036',
                  border: '1px solid #D87036',
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={passwordRepeatRef}
            placeholder={'Digite sua senha'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="outlined-password-input"
            label={
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '1rem',
                  fontColor: '#00000',
                  fontFamily: 'Lato',
                }}
              >
                {' '}
                Senha{' '}
              </Typography>
            }
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
          />

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
      {loading && (
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            opacity: '0.5',
            height: '100vh',
            width: '100vw',
            top: 0,
          }}
        >
          <CircularProgress
            sx={{ position: 'relative', top: '50%', left: '50%' }}
          />
        </Box>
      )}
    </div>
  )
}

Signup.getLayout = (page) => <Layout>{page}</Layout>
