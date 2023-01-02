// React hooks
import {
  Autocomplete,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

// Styles
import { styled, TextField } from '@mui/material'

// Styles
import styles from './styles/CadastroForm2.module.scss'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'

// Supabase
import {
  useSupabaseClient,
  useSession,
  useUser,
} from '@supabase/auth-helpers-react'
import { areasUx } from '@/components/utils/areasUx'

export default function GroupForm2({ nextForm }) {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const areasUxRef = useRef<HTMLInputElement>()
  const publicoRef = useRef<HTMLInputElement>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  console.log(publicoRef)

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

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }
    } catch (error) {
      console.log(error)
    }
    console.log(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const publico = publicoRef.current.value

    let { error } = await supabase.from('groups').insert({ publico: publico })

    if (error) {
      console.log(error)
      setError(error.message)
      return setLoading(false)
    }
    nextForm()
  }

  return (
    <form className={styles.form}>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="false"
      >
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Público"
          labelPlacement="start"
          inputRef={publicoRef}
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="Privado"
          inputRef={publicoRef}
          labelPlacement="start"
        />
      </RadioGroup>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={areasUx}
        getOptionLabel={(option) => option}
        defaultValue={[areasUx[1]]}
        filterSelectedOptions
        ref={areasUxRef}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Selecione as áreas de seu interesse"
          />
        )}
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
