// React hooks
import { Button } from '@mui/material'
import React, { useState } from 'react'

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

export default function GroupForm2({ nextForm }) {
  const [funcao, setFuncao] = useState('')

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
    <form className={styles.form}>
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
        placeholder="Como você gostaria de ser chamado(a)?"
        type="text"
        name="funcao"
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)}
      />
      <p>Gostariamos de saber um pouco mais sobre os seus estudos</p>
      <label>
        Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?{' '}
      </label>
      <input
        placeholder="Como você gostaria de ser chamado(a)?"
        type="text"
        name="funcao"
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)}
      />
      <Button
        variant="contained"
        sx={style}
        endIcon={<EastSharpIcon />}
        onClick={nextForm}
      >
        Avançar
      </Button>
    </form>
  )
}
