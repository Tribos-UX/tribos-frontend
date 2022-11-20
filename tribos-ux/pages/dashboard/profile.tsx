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
    <div className={styles.container_profile}>
      <div className={styles.profile_info}>
        <div className={styles.profile_img}>
          <Image
            className={styles.profile_img_rectangle}
            src={groupsImageRectangle}
            alt="Imagem tema do usuario"
          />
          <Image
            className={styles.profile_img_perfil}
            src={imagemPerfilGroups}
            alt="Imagem de Perfil"
          />
          <div className={styles.profile_user_info}>
            <div className={styles.profile_user_description}>
              <h1>Felipe Soares</h1>
              <p>UX Designer</p>
            </div>
            <div className={styles.profile_tags_info}>
              <div className={styles.profile_tags}>
                <button> Research</button>
                <button>Wireframe</button>
                <button>Agile </button>
              </div>
              <ModalEditInfo />
            </div>
          </div>
          <div className={styles.profile_photo_info}>
            <ModalEditProfilePhoto />
          </div>
        </div>
      </div>
      <TabProfile />
    </div>
  );
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
