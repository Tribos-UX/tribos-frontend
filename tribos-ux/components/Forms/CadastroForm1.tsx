import React, { useState } from "react";

// Icon
import { LinkedinIcon, SublinhadoMenor } from "../Icons";

export default function CadastroForm1({page, setPage}) {
    const [name, setName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [description, setDescription] = useState("");
    const [behance, setBehance] = useState("");
    const [state, setState] = useState([]);
    return (
      <>
        <div >
          <fieldset>
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
            <fieldset>
              <legend>Cidades</legend>
              <input type="text" name="city" placeholder="Cidade que você está" />
            </fieldset>
            <fieldset>
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
          </div>
  
          <fieldset>
            <legend>Sua descrição</legend>
            <textarea
              placeholder="Adicione uma breve descricao sobre voce."
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>
  
          <div>
            <fieldset>
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
            <fieldset >
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
  
        <div>
          <span>Insira uma foto de perfil</span>
          <label htmlFor="image_uploads">Inserir</label>
          <input name="image_uploads" type="file" accept="image/*" />
        </div>
        <button onClick={() => {setPage(page +1 )} }>
            Avançar
        </button>
      </>
    );
  }
  