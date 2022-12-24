import Button from '@mui/material/Button'
import { supabase } from 'pages/api/supabase'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Styles
import {
  Box,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
  TextField,
} from '@mui/material'

// Supabase
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

// Styles
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm }): JSX.Element {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(user)
  const usernameRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const [avatar_url, setAvatarUrl] = useState(null)
  const linkedinRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const portfolioRef = useRef<HTMLInputElement>()
  const ufRef = useRef<HTMLInputElement>()

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.log(error)
    }
    console.log(session, user)
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const username = usernameRef.current.value
    const description = descriptionRef.current.value
    const cidade = cidadeRef.current.value

    const updates = {
      id: user.id,
      username: username,
      description: description,
      cidade: cidade,
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      setError(error.message)
      return setLoading(false)
    }
    nextForm()
    console.log(username)
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',
    width: '157px',

    '&:hover': {
      color: '#d87036',
      backgroundColor: '#fbfbfc',
    },
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#000000',
      fontSize: '1.125rem',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#AFB0B2',
        borderRadius: '1rem',
      },
    },
    input: {
      minWidth: '20rem',
      '&::placeholder': {
        fontSize: '14px',
      },
    },
  })

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <CssTextField
        sx={{ width: '325px' }}
        className={styles.form_nome}
        label="Nome"
        focused
        placeholder={'Como você gostaria de ser chamado(a)?'}
        id="username"
        type="text"
        inputRef={usernameRef}
      />

      <CssTextField
        sx={{ width: '325px' }}
        className={styles.form_cidade}
        label="Cidade"
        focused
        id="cidade"
        inputRef={cidadeRef}
        placeholder={'Cidade onde você está.'}
      />

      <CssTextField
        className={styles.form_descricao}
        sx={{ width: '325px' }}
        label="Descricao"
        multiline
        focused
        id="descricao"
        placeholder={'Adicione uma breve descricao sobre voce.'}
        type="text"
        inputRef={descriptionRef}
      />

      <CssTextField
        className={styles.form_linkedin}
        sx={{ width: '325px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
        label="LinkedIn"
        focused
        id="LinkedIn"
        ref={linkedinRef}
        placeholder={'Link do seu perfil'}
      />

      <CssTextField
        className={styles.form_uf}
        label="Estado"
        ref={ufRef}
        focused
        placeholder={'Estado em que você está'}
        select
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={12}>Acre</MenuItem>
        <MenuItem value={27}>Alagoas</MenuItem>
        <MenuItem value={16}>Amapá</MenuItem>
        <MenuItem value={13}>Amazonas</MenuItem>
        <MenuItem value={29}>Bahia</MenuItem>
        <MenuItem value={23}>Ceará</MenuItem>
        <MenuItem value={53}>Distrito Federal</MenuItem>
        <MenuItem value={24}>Rio Grande do Norte</MenuItem>
        <MenuItem value={43}>Rio Grande do Sul</MenuItem>
        <MenuItem value={33}>Rio de Janeiro</MenuItem>
        <MenuItem value={35}>São Paulo</MenuItem>
      </CssTextField>

      <CssTextField
        sx={{ width: '325px' }}
        className={styles.form_porfolio}
        label="Portfólio"
        focused
        id="portfolio"
        placeholder={'Link do seu portfólio.'}
        ref={portfolioRef}
      />

      <div className={styles.form_upload_input}>
        <span>Insira uma foto de perfil</span>
        <Button
          sx={{ color: '#D87036', background: '#FBFBFC', width: '297px' }}
          variant="contained"
          component="label"
        >
          Inserir
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>

      <Button
        className={styles.form_button}
        type="submit"
        variant="contained"
        sx={style}
        endIcon={<EastSharpIcon />}
      >
        Avançar
      </Button>
    </form>
  )
}
