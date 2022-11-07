import React, { useState } from "react";

// Icon
import { FlechaIcon, LinkedinIcon, setaIcon, SublinhadoMenor } from "../common/Icons";

// Styles
import styles from "./styles/CadastroForm1.module.scss"

export default function CadastroForm1({ page, setPage }) {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [description, setDescription] = useState("");
  const [behance, setBehance] = useState("");
  const [uf, setUf] = useState(0);
  return (
    <>
      <div className={styles.dashboard_form_container} >
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

        <div>
          <fieldset className={styles.dashboard_form_nome_input}>
            <legend>Cidades</legend>
            <input type="text" name="city" placeholder="Cidade que você está" />
          </fieldset>
          <fieldset className={styles.dashboard_form_nome_input}>
            <legend>Estado</legend>
            <select id="state" onChange={(e) => setUf(e.target.value)}>
              <option value={0} disabled>
                UF
              </option>
              <option value={12}>Acre</option>
              <option value={27}>Alagoas</option>
              <option value={16}>Amapá</option>
              <option value={13}>Amazonas</option>
              <option value={29}>Bahia</option>
              <option value={23}>Ceará</option>
              <option value={53}>Distrito Federal</option>
              <option value={24}>Rio Grande do Norte</option>
              <option value={43}>Rio Grande do Sul</option>
              <option value={33}>Rio de Janeiro</option>
              <option value={35}>São Paulo</option>
            </select>
          </fieldset>
        </div>

        <fieldset className={styles.dashboard_form_nome_input}>
          <legend>Sua descrição</legend>
          <textarea
            placeholder="Adicione uma breve descricao sobre voce."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>

        <div>
          <fieldset className={styles.dashboard_form_nome_input}>
            <legend>LinkedIn</legend>
            <LinkedinIcon />
            <input
              placeholder="Link do seu perfil"
              type="text"
              name="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.dashboard_form_nome_input}>
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
      </div>

      <div className={styles.dashboard_form_upload_input }>
        <span>Insira uma foto de perfil</span>
        <label htmlFor="image_uploads">Inserir</label>
        <input name="image_uploads" type="file" accept="image/*" />
      </div>
      <button
      className={styles.submitt_button}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <span>Avançar</span>
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5021 10.3755C14.1573 10.8069 14.2274 11.4362 14.6587 11.7811C15.0901 12.1259 15.7194 12.0558 16.0643 11.6245L19.5625 7.24893C20.1464 6.51867 20.1464 5.48135 19.5625 4.75109L16.0643 0.375546C15.7194 -0.0558188 15.0901 -0.12593 14.6587 0.218949C14.2274 0.563829 14.1573 1.1931 14.5021 1.62447L17.2009 5.00001L0.999023 5.00001C0.446737 5.00001 -0.000976562 5.44772 -0.000976562 6.00001C-0.000976562 6.55229 0.446737 7.00001 0.999023 7.00001L17.2009 7.00001L14.5021 10.3755Z" fill="#FBFBFC"/>
            </svg>
      </button>
    </>
  );
}
