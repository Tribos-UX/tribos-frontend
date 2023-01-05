import Button from '@mui/material/Button'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { styled } from '@mui/system'

import { useAutocomplete } from '@mui/base/AutocompleteUnstyled'

// Material UI
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'

// Supabase
import { useSupabaseClient } from '@supabase/auth-helpers-react'

// Styles
import { estadosBR } from '@/components/utils/estadosBR'
import Avatar from './Avatar'
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm, id }) {
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
  const [municipios, setMunicipios] = useState([])

  const handleChange = (event: SelectChangeEvent) => {
    setUF(event.target.value)
  }

  useEffect(() => {
    setLoading(true)
    // Faça a requisição para a API quando o componente for montado
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios
    `)
      .then((response) => response.json())
      .then((data) => {
        setMunicipios(data)
      })
      .catch((error) => console.error(error))
    setLoading(false)
  }, [uf]) // Execute o efeito colateral apenas uma vez

  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = usernameRef.current.value
    const description = descriptionRef.current.value
    const cidade = cidadeRef.current.defaultValue
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

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        sx={{ width: '325px', borderRadius: '1rem' }}
        className={styles.form_nome}
        label="Nome"
        InputLabelProps={{ shrink: true }}
        placeholder={'Como você gostaria de ser chamado(a)?'}
        id="username"
        type="text"
        inputRef={usernameRef}
        required
      />

      <TextField
        className={styles.form_descricao}
        sx={{ width: '325px', borderRadius: '1rem' }}
        label="Descricao"
        InputLabelProps={{ shrink: true }}
        multiline
        id="descricao"
        placeholder={'Adicione uma breve descricao sobre voce.'}
        type="text"
        inputRef={descriptionRef}
        required
      />

      <TextField
        className={styles.form_linkedin}
        sx={{ width: '325px', borderRadius: '1rem' }}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
        label="LinkedIn"
        id="LinkedIn"
        inputRef={linkedinRef}
        placeholder={'Link do seu perfil'}
      />

      <FormControl
        className={styles.form_uf}
        sx={{ marginTop: 1, minWidth: 120 }}
      >
        <InputLabel shrink={true} id="estado">
          Estado
        </InputLabel>
        <Select
          sx={{
            width: '325px',
            '& legend': { minWidth: '45px' },
          }}
          value={uf}
          label="Estado"
          onChange={handleChange}
          displayEmpty
          defaultValue=""
        >
          <MenuItem value="">
            <em>Estado que você está</em>
          </MenuItem>
          {estadosBR.map(({ estado, identificador }, index) => (
            <MenuItem key={index} value={identificador}>
              {estado}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={styles.form_cidade} sx={{ minWidth: 120 }}>
        <Autocomplete
          sx={{ width: '325px', marginTop: '0.5rem', borderRadius: '1rem' }}
          id="municipio"
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          noOptionsText="Selecione o Estado primeiro."
          isOptionEqualToValue={(option, value) => option.nome === value.nome}
          getOptionLabel={(option) => option.nome}
          options={municipios}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={cidadeRef}
              label="Cidade"
              InputLabelProps={{ shrink: true }}
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
      </FormControl>

      <TextField
        sx={{ width: '325px' }}
        className={styles.form_porfolio}
        label="Portfólio"
        InputLabelProps={{ shrink: true }}
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