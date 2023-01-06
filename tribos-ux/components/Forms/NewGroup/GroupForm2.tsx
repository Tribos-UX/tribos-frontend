// React hooks
import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
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
import { areasUx } from '@/components/utils/areasUx'
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

export default function GroupForm2({ nextForm, id }) {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const areasUxRef = useRef<HTMLInputElement>()
  const publicoRef = useRef<HTMLInputElement>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [privacidade, setPrivacidade] = React.useState('privado')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacidade((event.target as HTMLInputElement).value)
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',

    '&:hover': {
      color: '#d87036',
      backgroundColor: '#fbfbfc',
    },
  }

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

    const objetivos = areasUxRef.current?.innerText.split(/\r?\n/)
    objetivos.pop()

    let { error } = await supabase
      .from('groups')
      .upsert({ criador: id, privacidade: privacidade, objetivos: objetivos })

    if (error) {
      console.log(error)
      setError(error.message)
      return setLoading(false)
    }
    nextForm()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Privacidade do grupo
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={privacidade}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Publico"
            control={<Radio />}
            label="Público"
          />
          <FormControlLabel
            value="Privado"
            control={<Radio />}
            label="Privado"
          />
        </RadioGroup>
      </FormControl>

      <label>Objetivo do Grupo</label>
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
            placeholder="Selecione os objetivos do seu grupo"
          />
        )}
      />

      <Button
        variant="contained"
        sx={style}
        endIcon={<EastSharpIcon />}
        onClick={nextForm}
        type="submit"
      >
        Avançar
      </Button>
    </form>
  )
}
