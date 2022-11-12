import Button from '@mui/material/Button'
import React, { useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'

// Styles
import styles from './styles/CadastroForm1.module.scss'

export default function CadastroForm1({ nextForm }): JSX.Element {
  const [name, setName] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [description, setDescription] = useState('')
  const [behance, setBehance] = useState('')
  const [uf, setUf] = useState<any>(0)

  const style = {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
    marginTop: '0',

    '&:hover': {
      color: '#fbfbfc',
      backgroundColor: '#d87036',
    },
  }

  return (
    <>
      <form className={styles.dashboard_form}>
        <div className={styles.dashboard_form_container}>
          <fieldset className={styles.dashboard_form_nome_input}>
            <legend>Nome</legend>
            <input
              placeholder="Como você gostaria de ser chamado(a)?"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className={styles.dashboard_form_cidade_input}>
            <legend>Cidades</legend>
            <input type="text" name="city" />
          </fieldset>
          <fieldset className={styles.dashboard_form_estado_input}>
            <legend>Estado</legend>
            <select id="state" onChange={(e) => setUf(e.target.value)}>
              <option value="" disabled>
                UF
              </option>
              <option value="12">Acre</option>
              <option value="27">Alagoas</option>
              <option value="16">Amapá</option>
              <option value="13">Amazonas</option>
              <option value="29">Bahia</option>
              <option value="23">Ceará</option>
              <option value="53">Distrito Federal</option>
              <option value="24">Rio Grande do Norte</option>
              <option value="43">Rio Grande do Sul</option>
              <option value="33">Rio de Janeiro</option>
              <option value="35">São Paulo</option>
            </select>
          </fieldset>

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
        </div>

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
