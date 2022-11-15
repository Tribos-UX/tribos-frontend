// Nextjs Image
import Image from "next//image";

// Dashboard Layout
import DashboardLayout from "../../components/Layout/DashboardLayout/DashboardLayout";

// Components
import Agenda from "../../components/Agenda/Agenda";
import { shareIcon, sinalMais } from "../../components/common/Icons";
import TabProfile from "../../components/Tabs/Profile/TabProfile"
import ModalEditInfo from "../../components/Modals/Info/EditInfo/ModalEditInfo"
import ModalEditProfilePhoto from "../../components/Modals/Profile/ModalEditProfilePhoto"

// Images
import groupsImageRectangle from "../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../public/imagemPerfilGroups.png";

// Styles
import styles from "../../styles/Profile.module.scss";

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
            <div className={styles.profile_photo_info}>
              <ModalEditProfilePhoto />
            </div>
            <div className={styles.groups_usuario_infos}>
              <div className={styles.groups_usuario_infos_descricao}>
                <h1>Felipe Soares</h1>
                <p>UX Designer</p>
              </div>
              <div className={styles.profile_info}>
                <div className={styles.groups_usuario_infos_buttons}>
                  <button> Research</button>
                  <button>Wireframe</button>
                  <button>Agile </button>
                  {shareIcon}
                </div>
                <ModalEditInfo />
              </div>
            </div>
          </div>
        </section>
        <section>
          <article className={styles.grupos_container}>
            <TabProfile />
          </article>
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
