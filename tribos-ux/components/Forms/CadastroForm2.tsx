// React hooks
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

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

// Styles
import styles from './styles/CadastroForm2.module.scss'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function CadastroForm2({ nextForm }) {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [funcao, setFuncao] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [areasux, setAreasUx] = useState('')

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
        setFuncao(data.username)
      }
    } catch (error) {
      console.log(error)
    }
    console.log(session, user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const updates = {
      id: user.id,
      funcao: funcao,
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      setError(error.message)
      return setLoading(false)
    }
    nextForm()
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <Box sx={{ width: '375px' }}>
        <CssTextField
          label="Funcao"
          focused
          placeholder={'Qual sua função atual ou a que almeja?'}
          id="funcao"
          type="text"
          value={funcao || ''}
          onChange={(e) => setFuncao(e.target.value)}
        />
      </Box>
      <label>Habilidades/Ferramentas</label>
      <input
        placeholder="Selecione as habilidades"
        type="text"
        name="habilidades"
        value={habilidades || ''}
        onChange={(e) => setHabilidades(e.target.value)}
      />
      <p>Gostariamos de saber um pouco mais sobre os seus estudos</p>
      <label>
        Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?{' '}
      </label>
      <input
        placeholder="Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?"
        type="text"
        name="habilidades"
        value={areasux || ''}
        onChange={(e) => setAreasUx(e.target.value)}
      />
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
