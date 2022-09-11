// React hooks
import { useState } from "react";

// Styles
import styles from "./CadastroForm1.module.scss";

export default function CadastroForm2() {
  const [funcao, setFuncao] = useState("");

  return (
    <>
      <fieldset className={styles.dashboard_form_nome_input}>
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
    </>
  );
}
