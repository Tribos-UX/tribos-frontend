// import styles from modules
import styles from '../styles/Login.module.scss'

//import images from public
import Group461 from '../public/Group461.svg'

//Nextjs tools
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Supabase
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// React Hooks
import { useRef, useState } from 'react'

// Material Ui
import { FbIcon, GoogleIcon } from '@/components/common/Icons'
import {
  Button,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

// Layout
import Layout from '@/components/Layout/HomeLayout/Layout'

export default function Login() {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Get the email and password from the form
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      setError(error.message)
      return setIsLoading(false)
    }

    router.push('/dashboard')
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
    <section className={styles.login_main}>
      <picture className={styles.login_img}>
        <Image src={Group461} alt="Image Login" />
      </picture>

      <section className={styles.login_form}>
        <article className={styles.intro}>
          <p>Legal ver você aqui 😊</p>
          <h1>
            Entre no UX Tribos e comece a conversar com os grupos de estudos.
          </h1>
        </article>

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

        <div className={styles.continue}>
          <span> </span>
          <p>Ou continue com</p>
          <span> </span>
        </div>

        <form className={styles.login_inputs} onSubmit={handleLogin}>
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
          />

          <div className={styles.checkbox}>
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Lembre de mim
            </label>

            <Link href={'/password/recover'}>Esqueci a senha</Link>
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
        {error && <h2>{error}</h2>}
        <div className={styles.info_login}>
          <p>
            Esqueceu a senha?{' '}
            <Link href={'/password/recover'}>Clique aqui</Link>{' '}
          </p>
          <p>ou</p>
          <p>
            Ainda não tem uma conta?
            <Link href="/signup">Cadastre-se</Link>
          </p>
        </div>
      </section>
      {isLoading && (
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
    </section>
  )
}

Login.getLayout = (page) => <Layout>{page}</Layout>
