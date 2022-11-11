// React Hooks
import { useContext, useEffect, useState } from "react";

// Nextjs Tools
import Image from "next//image";

// Styles
import styles from "/styles/Dashboard.module.scss";

// Images
import backgroundImage from "../../public/backgroundImageDashboard.png"

// Icons
import { flecha, stepIndicatorNumber1, stepIndicatorNumber2, stepIndicatorNumber3, SublinhadoMenor } from "../../components/common/Icons";
import DashboardLayout from "@/components/Layout/DashboardLayout/DashboardLayout";


export default function FirstAcess() {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [description, setDescription] = useState("");
  const [behance, setBehance] = useState("");
  const [state, setState] = useState<any>([]);

  return (
    <section className={styles.dashboard_welcome}>
      <div className={styles.container}>
        <h1 className={styles.dashboard_titulo}>
          Olá, seja bem-vindo(a)! <br></br>
          Vamos configurar seu
          <strong className={styles.dashboard_palavra_sublinhada}>
            perfil?
            <span>
              <SublinhadoMenor />
            </span>
          </strong>
        </h1>

        <div className={styles.dashboard_steps_indicator}>
          <div>{stepIndicatorNumber1}</div>
          <div>{stepIndicatorNumber2}</div>
          <div>{stepIndicatorNumber3}</div>
        </div>

        <h2 className={styles.dashboard_subtitulo}>Gostariamos de saber um pouco mais sobre você </h2>       

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
          <div className={styles.dashboard_button_submit}>
            <button>Avançar </button>
          </div>
        </form>
      </div>
      <Image src={backgroundImage} alt="imagem de background" className={styles.background_image} />
    </section>
  );
}

FirstAcess.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};