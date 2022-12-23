// React hooks
import { Button, Radio, RadioGroup, Stack } from '@mui/material'
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
  const [value, setValue] = useState('')

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
   
     <RadioGroup onChange={(e) => setValue(e.target.value)} value={value}>
      <Stack direction='column'>
        <span>Privado</span>
        <Radio name='Privado' value='sim'></Radio>
        <span>Publico</span>
        <Radio name="Público" value='nao'></Radio>
      </Stack>
    </RadioGroup>

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
