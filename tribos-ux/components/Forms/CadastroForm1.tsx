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
import Avatar from './Avatar'

export default function CadastroForm1({ nextForm, id }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const usernameRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const [avatar_url, setAvatarUrl] = useState(null)
  const linkedinRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const portfolioRef = useRef<HTMLInputElement>()
  const ufRef = useRef<HTMLInputElement>()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = usernameRef.current.value
    const description = descriptionRef.current.value
    const cidade = cidadeRef.current.value
    const linkedin = linkedinRef.current.value
    const uf = ufRef.current.value

    const updates = {
      id: id,
      username: username,
      description: description,
      cidade: cidade,
      linkedin: linkedin,
      avatar_url: avatar_url,
      uf: uf,
    }

    let { error } = await supabase.from('profiles').upsert(updates)
    if (error) throw error
    alert('Profile updated!')

    nextForm()
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',
    height: '3rem',
    width: '157px',
    borderRadius: '1rem',

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
        required
      />

      <CssTextField
        sx={{ width: '325px' }}
        className={styles.form_cidade}
        label="Cidade"
        focused
        id="cidade"
        inputRef={cidadeRef}
        placeholder={'Cidade onde você está.'}
        required
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
        required
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
        inputRef={linkedinRef}
        placeholder={'Link do seu perfil'}
      />

      <CssTextField
        className={styles.form_uf}
        label="Estado"
        inputRef={ufRef}
        focused
        placeholder={'Estado em que você está'}
        select
        required
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
        inputRef={portfolioRef}
      />

      <div className={styles.form_upload_input}>
        <Avatar
          uid={id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
          }}
        />
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
