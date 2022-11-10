// Nextjs Image
import Image from "next//image";

// Dashboard Layout
import Agenda from "../../../components/Agenda/Agenda";
// Images
import groupsImageRectangle from "../../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../../public/imagemPerfilGroups.png";

// Styles
import { shareIcon } from "../../../components/common/Icons";
import styles from "../../../styles/Groups.module.scss";
import DashboardLayout from "../../../components/Layout/DashboardLayout/DashboardLayout";

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
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <h1>Nome do Grupo</h1>
                <p>Grupo sobre estudo de caso</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                <button>Case</button>
                <button>Design</button>
                <button>Pesquisa</button>
                {shareIcon}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <nav className={styles.grupos_usario}>
              <ul>
                <li>Grupo</li>
                <li>Mensagens</li>
                <li>Plano do Projeto</li>
              </ul>
            </nav>
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
