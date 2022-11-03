// React hooks
import React from "react";
import { useState } from "react";

export default function CadastroForm2({page, setPage}) {
  const [funcao, setFuncao] = useState("");

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
        Quais áreas de UX você quer atuar e estudar aqui no UX Tribos?{" "}
      </label>
      <input
        placeholder="Como você gostaria de ser chamado(a)?"
        type="text"
        name="funcao"
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)}
      />
       <button onClick={() => {setPage(page +1 )} }>
            Avançar
        </button>
    </>
  );
}
