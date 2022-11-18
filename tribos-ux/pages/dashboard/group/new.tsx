// Nextjs Image
import Image from "next//image";

// Components
import TabNewGroup from "../../../components/Tabs/Group/New/TabNewGroup"
import ModalEditGroupInfo from "@/components/Modals/Group/ModalEditGroupInfo";

// Dashboard Layout
import Agenda from "../../../components/Agenda/Agenda";
import DashboardLayout from "../../../components/Layout/DashboardLayout/DashboardLayout";

// Images
import groupsImageRectangle from "../../../public/groupsImageRectangle.png";

// Styles
import styles from "../../../styles/NewGroup.module.scss";

export default function Groups() {
  return (
    <>
      <section>
        <section className={styles.groups_usuario}>
          <div className={styles.container_new_group}>
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
                <p>Tema do grupo</p>
              </div>
              <div className={styles.new_group_tags_info}>
                <div className={styles.groups_usuario_infos_buttons}>
                  <button> Tag</button>
                  <button>Tag</button>
                  <button>Tag</button>
                </div>
                <span>Editar informacoes do grupo</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.tab_new_group}>
            <TabNewGroup />
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
