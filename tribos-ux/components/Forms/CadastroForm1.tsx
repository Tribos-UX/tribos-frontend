import Button from '@mui/material/Button'
import { supabase } from 'pages/api/supabase'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Styles
import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from '@mui/material'
import { fontSize } from '@mui/system'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm }): JSX.Element {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(user)
  const [username, setUsername] = useState(null)
  const [description, setDescription] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const linkedinRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const portfolioRef = useRef<HTMLInputElement>()
  const [uf, setUf] = useState<any>(0)

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
        setUsername(data.username)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.log(error)
    }
    console.log(session, user)
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const updates = {
      id: user.id,
      username: username,
      description: description,
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      setError(error.message)
      return setLoading(false)
    }
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',

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
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} columns={8}>
        <Grid xs={4}>
          <Box sx={{ width: '375px' }}>
            <CssTextField
              label="Nome"
              focused
              placeholder={'Como você gostaria de ser chamado(a)?'}
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField label="Cidade" focused id="cidade" ref={cidadeRef} />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField
              label="Descricao"
              focused
              id="descricao"
              placeholder={'Adicione uma breve descricao sobre voce.'}
              type="text"
              value={description || ''}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <CssTextField
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
        </Grid>
      </Grid>

      <Select
        displayEmpty
        input={<OutlinedInput />}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Placeholder</em>
        </MenuItem>

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
      </Select>

      <CssTextField
        label="Portfólio"
        focused
        id="portfolio"
        placeholder={'Link do seu portfólio.'}
        ref={portfolioRef}
      />

      <div className={styles.dashboard_form_upload_input}>
        <span>Insira uma foto de perfil</span>
        <label htmlFor="image_uploads">Inserir</label>
        <input name="image_uploads" type="file" accept="image/*" />
      </div>
      <Button
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
