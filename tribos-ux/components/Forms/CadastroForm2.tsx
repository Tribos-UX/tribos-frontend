// React hooks
import { Button } from '@mui/material'
import React, { useState } from 'react'

// Icons
import EastSharpIcon from '@mui/icons-material/EastSharp'

export default function CadastroForm2({ nextForm }) {
  const [funcao, setFuncao] = useState('')

  const style = {
    color: '#d87036',
    backgroundColor: '#fbfbfc',

    '&:hover': {
      color: '#fbfbfc',
      backgroundColor: '#d87036',
    },
  }

  return (
    <>
      <fieldset>
        <legend>Função</legend>
        <input
          placeholder="Qual sua função atual ou a que almeja?"
          type="text"
          name="funcao"
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
        />
      </fieldset>
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
    </>
  )
}
