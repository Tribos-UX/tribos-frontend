// Nextjs Image
import Image from "next//image";
import Button from "../../components/Button";

// Dashboard Layout
import Agenda from "../../components/Agenda/Agenda";
import DashboardLayout from "../../components/DashboardLayout";
import GroupCards from "../../components/GroupCards";
import { shareIcon, sinalMais } from "../../components/Icons";

// Images
import groupsImageRectangle from "../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../public/imagemPerfilGroups.png";

// Styles
import styles from "../../styles/Groups.module.scss";

export default function Groups() {
  return (
    <>
      <section>
        <section className={styles.groups_usuario}>
          <div className={styles.container}>
            <div className={styles.groups_usuario_imagem_principal}>
              <Image
                className={styles.groups_usuario_imagem_rectangle}
                src={groupsImageRectangle}
                alt="Imagem tema do usuario"
              />
              <Image
                src={imagemPerfilGroups}
                alt="Imagem de Perfil"
                className={styles.groups_usuario_imagem_perfil}
              />
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <h1>Felipe Soares</h1>
                <p>UX Designer</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                <button> Research</button>
                <button>Wireframe</button>
                <button>Agile </button>
                {shareIcon}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <nav className={styles.grupos_usario}>
              <ul>
                <li>Meus grupos</li>
                <li>Grupos que administro</li>
              </ul>
            </nav>
            <article className={styles.grupos_container}>
              <button className={styles.grupos_usario_button}>
                <div className={styles.grupos_usuario_signal}>{sinalMais}</div>
                <div className={styles.grupos_usuario_text}>Criar Grupo</div>
              </button>
            </article>
          </div>
        </section>
      </section>
      <section>
        <Agenda dayOfweek={"Segunda-feira, 01 de julho de 2022"} />
      </section>
    </>
  );
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
