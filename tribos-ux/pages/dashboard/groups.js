// Nextjs Image
import Image from "next/future/image";
import Button from "../../components/Button";

// Dashboard Layout
import DashboardLayout from "../../components/DashboardLayout";
import GroupCards from "../../components/GroupCards";
import { shareIcon, sinalMais } from "../../components/Icons";
import Agenda from "../../components/Agenda";

// Images
import groupsImageRectangle from "../../public/groupsImageRectangle.png";
import imagemPerfilGroups from "../../public/imagemPerfilGroups.png";

// Styles
import styles from "../../styles/Groups.module.scss";

export default function Groups() {
  return (
    <section className={styles.groups_usuario}>
      <section className={styles.groups_usuario}>
        <div className={styles.container}>
          <div className={styles.groups_usuario_imagem_principal}>
            <Image src={groupsImageRectangle} alt="Imagem tema do usuario" />
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
              <Button text={"Research"} />
              <Button text={"Wireframe"} />
              <Button text={"Agile"} />
              {shareIcon}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <nav>
            <ul>
              <li>Meus grupos</li>
              <li>Grupos que administro</li>
            </ul>
          </nav>
          <article>
            <div>
              {sinalMais}
              Criar Grupo
            </div>
            <GroupCards />
          </article>
        </div>
      </section>
      <section>
        <Agenda />
      </section>
    </section>
  );
}

Groups.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
