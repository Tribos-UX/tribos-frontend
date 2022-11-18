import Button from '@mui/material/Button'
import React, { useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'

// Styles
import styles from './styles/CadastroForm1.module.scss'
import { InputLabel, MenuItem, Select, SelectChangeEvent, styled, TextField } from '@mui/material'
import { fontSize } from '@mui/system'

export default function CadastroForm1({ nextForm }): JSX.Element {
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [behance, setBehance] = useState('')
  const [uf, setUf] = useState<any>(0)

  const handleChange = (event: SelectChangeEvent) => {
    setUf(event.target.value);
  };

  const style = {
    backgroundColor: '#fbfbfc',
    marginTop: '0',


    '&:hover': {
      color: '#fbfbfc',
      backgroundColor: '#d87036',
    },
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#000000',
      fontSize: "1rem",
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#AFB0B2',
        borderRadius: "1rem",
      },
    },
  });

  return (
    <>
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

          <CssTextField label="Cidade" focused id="cidade" />
        
          <fieldset className={styles.dashboard_form_descricao_input}>
            <legend>Sua descrição</legend>
            <textarea
              placeholder="Adicione uma breve descricao sobre voce."
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.dashboard_form_linkedin_input}>
            <legend>LinkedIn</legend>
            <input
              placeholder="Link do seu perfil"
              type="text"
              name="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.dashboard_form_portfolio_input}>
            <legend>Portfólio</legend>
            <input
              placeholder="Link do seu perfil"
              type="text"
              name="behance"
              value={behance}
              onChange={(e) => setBehance(e.target.value)}
            />
          </fieldset>
      

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
    </>
  )
}
