// React Hooks
import { useEffect, useState, useContext } from "react";

// Dashboard Layout
import DashboardLayout from "../../components/Layout/DashboardLayout/DashboardLayout";

// Nextjs Tools
import Image from "next/image";

// Components
import CadastroForm1 from "../../components/Forms/CadastroForm1";
import CadastroForm2 from "../../components/Forms/CadastroForm2";
import CarouselWithArrows from "../../components/Carousel/CarouselWithArrows";
import DaysOfweek from "../../components/Agenda/Days/DaysOfweek.tsx";

// Styles
import styles from "/styles/Dashboard.module.scss";

// Images
import figmaLogo from "../../public/figma-dynamic-color.png";
import garotaSentada from "../../public/girl_stretcheswithalaptoponherfeet.png";
import rollBrunch from "../../public/roll-brush-dynamic-color.png";
import dashboardImage from "../../public/backgroundImageDashboard.png";

// Icons
import {
  stepIndicatorNumber1,
  stepIndicatorNumber2,
  stepIndicatorNumber3,
  SublinhadoMenor,
} from "../../components/common/Icons";

export default function FirstAcess() {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [description, setDescription] = useState("");
  const [behance, setBehance] = useState("");
  const [page, setPage] = useState(0);

  const componentList = [
    <CadastroForm1 page={page} setPage={setPage} />,
    <CadastroForm2 page={page} setPage={setPage} />,
  ];

  const slides = [
    <DaysOfweek day={"seg"} number={12} />,
    <DaysOfweek day={"ter"} number={1} />,
    <DaysOfweek day={"qua"} number={2} />,
    <DaysOfweek day={"qui"} number={2} />,
    <DaysOfweek day={"sex"} number={2} />,
    <DaysOfweek day={"sab"} number={2} />,
  ];

  return (
    <section>
      <Image
        className={styles.backgroundImage}
        src={dashboardImage}
        alt={"imagem de background cor roxa"}
      />
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
        <CarouselWithArrows slides={slides} />

        <div className={styles.dashboard_all_numbers}>
          <div className={styles.dashboard_number}>{stepIndicatorNumber1}</div>
          <div className={styles.dashboard_number}>{stepIndicatorNumber2}</div>
          <div className={styles.dashboard_number}>{stepIndicatorNumber3}</div>
        </div>

        <div className={styles.dashboard_subtitulo}>
          <p> Gostariamos de saber um pouco mais sobre você</p>
        </div>

        <div>{componentList[page]}</div>
      </div>
      <div className={styles.dashboard_images}>
        <Image src={figmaLogo} />
        <Image src={rollBrunch} alt={"Um rolo de pintar paredes"} />
        <Image
          src={garotaSentada}
          alt={"Uma menina sentada mexendo no laptop"}
        />
      </div>
    </section>
  );
}

FirstAcess.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
