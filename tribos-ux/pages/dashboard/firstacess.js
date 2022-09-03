// Dashboard Layout
import DashboardLayout from "../../components/DashboardLayout";

// CSS
import styles from "/styles/Login.module.scss";

// React Hooks
import { useEffect, useState, useContext } from "react";

// Cookies
import { setCookie, getCookie } from "cookies-next";

// Firebase
import firebase from "/firebase/clientApp";

// Auth Context
import { useAuth } from "../../contexts/auth";

export default function FirstAcess() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [description, setDescription] = useState("");
  const [behance, setBehance] = useState("");
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  console.log(getCookie("user"));

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
          <input type="text" name="city" />
        </fieldset>
        <fieldset className={styles.email_input}>
          <legend>Estado</legend>
          <select id="state" onChange={(e) => setState(e.target.value)}>
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
        <label>Sua descrição</label>
        <textarea
          type="text"
          placeholder="Adicione uma breve descricao sobre voce."
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <fieldset className={styles.email_input}>
          <legend>LinkedIn</legend>
          <input
            placeholder="Link do seu perfil"
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.email_input}>
          <legend>Behance</legend>
          <input
            placeholder="Link do seu perfil"
            type="text"
            name="behance"
            value={behance}
            onChange={(e) => setBehance(e.target.value)}
          />
        </fieldset>
        <span>Insira uma foto de perfil</span>
        <input type="file" accept="image/*" />
        <button type="submit">Avançar</button>
      </form>
    </main>
  );
}

FirstAcess.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
