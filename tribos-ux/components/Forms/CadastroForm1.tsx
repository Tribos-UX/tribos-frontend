import Button from '@mui/material/Button'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Styles
import {
  Autocomplete,
  Box,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from '@mui/material'

// Supabase
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// Styles
import { estadosBR } from '../utils/estadosBR'
import Avatar from './Avatar'
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm, id }) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const supabase = useSupabaseClient()
  const usernameRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const [avatar_url, setAvatarUrl] = useState(null)
  const linkedinRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const portfolioRef = useRef<HTMLInputElement>()

  const [open, setOpen] = React.useState(false)
  const [uf, setUF] = React.useState('')
  const [municipios, setMunicipios] = useState(null)

  const handleChange = (event: SelectChangeEvent) => {
    setUF(event.target.value)
  }

  useEffect(() => {
    setLoading(true)
    // Faça a requisição para a API quando o componente for montado
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}
    `)
      .then((response) => response.json())
      .then((data) => setMunicipios(data))
      .catch((error) => console.error(error))
    setLoading(false)
  }, [uf]) // Execute o efeito colateral apenas uma vez

  console.log(id)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = usernameRef.current.value
    const description = descriptionRef.current.value
    const cidade = cidadeRef.current.value
    const linkedin = linkedinRef.current.value

    const updates = {
      id: id,
      username: username,
      description: description,
      cidade: cidade,
      linkedin: linkedin,
      avatar_url: avatar_url,
      uf: uf,
      updated_at: new Date().toISOString(),
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

      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
        ref={cidadeRef}
        getOptionLabel={(option: string) => option}
        options={municipios}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Munícipio"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
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
        sx={{ width: '325px', marginTop: '0.5rem' }}
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

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={uf}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {estadosBR.map(({ estado, identificador }) => (
            <MenuItem value={identificador}>{estado}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <CssTextField
        sx={{ width: '325px', marginTop: '0.5rem' }}
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
          onUpload={(url: any) => {
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
