// React hooks
import React, { useRef, useState } from 'react'

// Material UI
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  styled,
  TextField,
} from '@mui/material'

// Styles
import styles from './styles/CadastroForm2.module.scss'

// Icons
import ClearIcon from '@mui/icons-material/Clear'
import EastSharpIcon from '@mui/icons-material/EastSharp'

// Supabase
import { areasUx } from '@/components/utils/areasUx'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function CadastroForm2({ nextForm, id }) {
  const supabase = useSupabaseClient()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const habilidadesRef = useRef<HTMLInputElement>()
  const funcaoRef = useRef<HTMLInputElement>()
  const areasUxRef = useRef<HTMLInputElement>()
  const [autoCompleteValue, setAutCompleteValue] = useState('')

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
    height: '3rem',
    width: '157px',
    borderRadius: '1rem',
    marginLef: 'auto',
    textTransform: 'none',
    fontSize: '1.125rem',
    fontWeight: 700,

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
      <Autocomplete
        sx={{
          width: '554px',

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
        multiple
        id="tags-outlined"
        options={areasUx}
        getOptionLabel={(option) => option}
        defaultValue={[areasUx[1]]}
        filterSelectedOptions
        ref={habilidadesRef}
        inputValue={autoCompleteValue}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              sx={{
                backgroundColor: '#D87036',
                color: '#FBFBFC',
                '& .MuiChip-deleteIcon': {
                  color: '#FBFBFC',
                },
              }}
              label={option}
              deleteIcon={<ClearIcon />}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} placeholder="Selecione as habilidades" />
        )}
      />

      <p>Gostariamos de saber um pouco mais sobre os seus estudos</p>
      <label>
        Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?{' '}
      </label>
      <Autocomplete
        sx={{
          width: '554px',

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
        multiple
        id="tags-outlined"
        options={areasUx}
        getOptionLabel={(option) => option}
        defaultValue={[areasUx[1]]}
        filterSelectedOptions
        ref={areasUxRef}
        inputValue={autoCompleteValue}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              sx={{
                backgroundColor: '#D87036',
                color: '#FBFBFC',
                '& .MuiChip-deleteIcon': {
                  color: '#FBFBFC',
                },
              }}
              label={option}
              deleteIcon={<ClearIcon />}
              {...getTagProps({ index })}
            />
          ))
        }
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
