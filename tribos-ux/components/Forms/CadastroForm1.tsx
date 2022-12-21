import Button from '@mui/material/Button'
import React, { useRef, useState } from 'react'
import { supabase } from 'pages/api/supabase'

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
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm }): JSX.Element {
  const nameRef = useRef()
  const linkedinRef = useRef()
  const cidadeRef = useRef()
  const descriptionRef = useRef()
  const portfolioRef = useRef()
  const [uf, setUf] = useState<any>(0)

  const handleSubmit = async (event) => {

    event.preventDefault();

    const { data, error } = await supabase.auth.updateUser({
      data: { username: nameRef.current.value, cidade: cidadeRef.current.value, description: descriptionRef.current.value }
    })
    console.log(data)
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
    <form  onSubmit={handleSubmit}>
      <Grid container spacing={2} columns={8}>
        <Grid xs={4}>
          <Box sx={{ width: '375px' }}>
            <CssTextField
              label="Nome"
              focused
              id="nome"
              placeholder={'Como você gostaria de ser chamado(a)?'}
              ref={nameRef}
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField label="Cidade" focused id="cidade"
            ref={cidadeRef}
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField
              label="Descricao"
              focused
              id="descricao"
              placeholder={'Adicione uma breve descricao sobre voce.'}
              ref={descriptionRef}
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
        type='submit'
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
