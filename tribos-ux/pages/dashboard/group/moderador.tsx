// Nextjs Image
import Image from "next//image";

// Components
import TabCreatedGroup from "../../../components/Tabs/Group/Created/TabCreatedGroup"

// Dashboard Layout
import Agenda from "../../../components/Agenda/Agenda";

// Images
import groupsImageRectangle from "../../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../../public/imagemPerfilGroups.png";

// Styles
import { shareIcon } from "../../../components/common/Icons";
import styles from "../../../styles/Moderador.module.scss";
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
              <div className={styles.groups_usuario_infos}>
                <div className={styles.groups_usuario_infos_descricao}>
                  <h1>Grupo UX on Focus</h1>
                  <p>Grupo sobre estudo de caso</p>
                </div>
                <div className={styles.new_group_tags_info}>
                  <div className={styles.groups_usuario_infos_buttons}>
                    <button>Case</button>
                    <button>Design</button>
                    <button>Pesquisa</button>
                  </div>
                  <span>Editar informacoes do grupo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <TabCreatedGroup />
          </div>
        </section>
      </section>
      <section>
      </section>
    </>
  );
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
