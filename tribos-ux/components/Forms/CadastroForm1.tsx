import Button from '@mui/material/Button'
import React, { useState } from 'react'

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
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [behance, setBehance] = useState('')
  const [uf, setUf] = useState<any>(0)

  const handleChange = (event: SelectChangeEvent) => {
    setUf(event.target.value)
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
<<<<<<< Updated upstream
    <form>
      <Grid container spacing={2} columns={8}>
        <Grid xs={4}>
          <Box sx={{ width: '375px' }}>
            <CssTextField
              label="Nome"
              focused
              id="nome"
              placeholder={'Como você gostaria de ser chamado(a)?'}
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField label="Cidade" focused id="cidade" />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ minWidth: '375px' }}>
            <CssTextField
              label="Descricao"
              focused
              id="descricao"
              placeholder={'Adicione uma breve descricao sobre voce.'}
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
            id="descricao"
            placeholder={'Link do seu perfil'}
          />
        </Grid>
      </Grid>
=======
      <form className={styles.dashboard_form}>
        <CssTextField label="Nome" focused id="nome" placeholder={"Como você gostaria de ser chamado(a)?"} />
          <CssTextField label="Cidade" focused id="cidade" />
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={uf}
          onChange={handleChange}
          autoWidth
          label="UF"
        >
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
>>>>>>> Stashed changes

      <Select
        displayEmpty
        input={<OutlinedInput />}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Placeholder</em>
        </MenuItem>

<<<<<<< Updated upstream
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
        id="descricao"
        placeholder={'Link do seu portfólio.'}
      />

      <div className={styles.dashboard_form_upload_input}>
        <span>Insira uma foto de perfil</span>
        <label htmlFor="image_uploads">Inserir</label>
        <input name="image_uploads" type="file" accept="image/*" />
      </div>
      <Button
        variant="contained"
        sx={style}
        endIcon={<EastSharpIcon />}
        onClick={nextForm}
      >
        Avançar
      </Button>
    </form>
=======
        <div className={styles.dashboard_form_upload_input}>
          <span>Insira uma foto de perfil</span>
          <label htmlFor="image_uploads">Inserir</label>
          <input name="image_uploads" type="file" accept="image/*" />
        </div>
        <Button
          variant="contained"
          sx={style}
          endIcon={<EastSharpIcon />}
          onClick={nextForm}
        >
          Avançar
        </Button>
      </form>
    
>>>>>>> Stashed changes
  )
}
