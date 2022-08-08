// Dashboard Layout
import DashboardLayout from "../../components/DashboardLayout";

// CSS
import styles from "/styles/Login.module.scss";

// React Hooks
import { useEffect, useState, useRef } from "react";

export default function FirstAcess() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [city, setCity] = useState([]);
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log(city);

  const handleSubmit = (e) => {};

  const selectState = async (e) => {
    setState(e.target.value);

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;

    const response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        setCity(data.map((city) => city.nome));
      });

    console.log(city);
  };

  const handleChange = (e) => {};

  return (
    <main>
      <h1>Olá, seja bem-vindo(a)! Vamos configurar seu perfil? </h1>

      <p>Gostariamos de saber um pouco mais sobre você</p>

      <form className={styles.login_inputs} onSubmit={handleSubmit}>
        <fieldset className={styles.email_input}>
          <legend>Nome</legend>
          <input
            placeholder="Como você gostaria de ser chamado(a)?"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.email_input}>
          <legend>Cidades</legend>
          <input type="text" name="city" value={city} onChange={handleChange} />
        </fieldset>
        <fieldset className={styles.email_input}>
          <legend>Estado</legend>
          <select
            id="state"
            onChange={(e) => setState(e.target.value)}
            onChange={selectState}>
            <option value="" disabled selected>
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
        <label>Sua descrição</label>
        <textarea
          type="text"
          placeholder="Adicione uma breve descricao sobre voce."
        />
        <fieldset className={styles.email_input}>
          <legend>LinkedIn</legend>
          <input placeholder="Link do seu perfil" type="text" />
        </fieldset>
        <fieldset className={styles.email_input}>
          <legend>Behance</legend>
          <input placeholder="Link do seu perfil" type="text" />
        </fieldset>
        <span>Insira uma foto de perfil</span>
        <button>Inserir</button>
        <button>Avançar</button>
      </form>
    </main>
  );
}

FirstAcess.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
