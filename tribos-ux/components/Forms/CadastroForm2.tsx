// React hooks
import { Autocomplete, Button } from '@mui/material'
import React, { useState, useRef } from 'react'

// Styles
import { Box, styled, TextField } from '@mui/material'

// Styles
import styles from './styles/CadastroForm2.module.scss'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'

// Supabase
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function CadastroForm2({ nextForm, id }) {
  const supabase = useSupabaseClient()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const habilidadesRef = useRef<HTMLInputElement>()
  const funcaoRef = useRef<HTMLInputElement>()
  const areasUxRef = useRef<HTMLInputElement>()
  const [autoCompleteValue, setAutCompleteValue] = useState('')

  const areasUx = [
    'UX Research',
    'UX Design',
    'UX Content',
    'UX Writing',
    'UI Design',
    'Visual Design',
    'Construção de Case',
    'Grupo de Estudos',
    'Portifólio',
    'Metodologias de Pesquisa',
    'Wireframes',
    'Mockups',
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const funcao = funcaoRef.current?.value
    const areas = areasUxRef.current?.innerText.split(/\r?\n/)
    areas.pop()

    const updates = {
      id: id,
      funcao: funcao,
      areasux: areas,
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
          inputRef={funcaoRef}
        />
      </Box>
      <label>Habilidades/Ferramentas</label>
      <input
        placeholder="Selecione as habilidades"
        type="text"
        name="habilidades"
        ref={habilidadesRef}
      />
      <p>Gostariamos de saber um pouco mais sobre os seus estudos</p>
      <label>
        Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?{' '}
      </label>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={areasUx}
        getOptionLabel={(option) => option}
        defaultValue={[areasUx[1]]}
        filterSelectedOptions
        ref={areasUxRef}
        inputValue={autoCompleteValue}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Selecione as áreas de seu interesse"
          />
        )}
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
