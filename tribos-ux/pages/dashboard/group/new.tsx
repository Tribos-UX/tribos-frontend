// Nextjs Image
import Image from "next//image";

// Components
import TabNewGroup from "../../../components/Tabs/Group/New/TabNewGroup"

// Dashboard Layout
import Agenda from "../../../components/Agenda/Agenda";
import DashboardLayout from "../../../components/Layout/DashboardLayout/DashboardLayout";

// Images
import groupsImageRectangle from "../../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../../public/imagemPerfilGroups.png";

// Styles
import { shareIcon } from "../../../components/common/Icons";
import styles from "../../../styles/Groups.module.scss";

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
                <p>Tema do grupo</p>
              </div>
              <div className={styles.groups_usuario_infos_buttons}>
                <button> Tag</button>
                <button>Tag</button>
                <button>Tag</button>
                {shareIcon}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.container}`}>
            <TabNewGroup />
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
