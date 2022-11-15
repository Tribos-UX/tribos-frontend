// Nextjs tools
import Image from "next//image";

//Images
import about from "../public/about.svg";
import frameAbout from "../public/frame-about.svg";
import teamAna from "../public/team-ana.svg";
import teamJonathan from "../public/team-jonathan.svg";
import teamLeticia from "../public/team-leticia.svg";
import teamLia from "../public/team-lia.svg";
import teamLuisa from "../public/team-luisa.svg";
import teamMichael from "../public/team-michael.svg";
import teamRebeca from "../public/team-rebeca.svg";
import teamVinicius from "../public/team-vinicius.svg";
import teamVitor from "../public/team-vitor.svg";

// Components
import Layout from "../components/Layout/Home/Layout";
import UxTribosTitle2 from "../components/UxTitle2/UxTribosTitle2"

// Styles
import styles from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about_us}>
        <div className={styles.about_description}>
          <h1>Sobre o
            <UxTribosTitle2 title={'UX Tribos'} />
          </h1>
          <p>
            Nós acreditamos que a troca de experiência é a melhor maneira de
            aprender! Por isso, desenvolvemos o UX Tribos, uma plataforma
            virtual criada por nós, um grupo de voluntários estudantes de UX
            dedicado a auxiliar profissionais e estudantes brasileiros da área
            de experiência do usuário em seus estudos e carreiras através da
            facilitação de grupos de estudo e mentorias gratuitas com
            profissionais do mercado.
          </p>
          <Image
            className={styles.frameabout_img}
            src={frameAbout}
            alt="Tribos UX Frame Image"
            width={204}
            height={53.68}
          />
        </div>
        <Image
          className={styles.aboutus_img}
          src={about}
          alt="About us Image"
          width={731}
          height={513}
        />
      </div>

      <div className={styles.team}>
        <h1>Conheça nossa Tribo</h1>

        <div className={styles.container_teams}>
          <div className={styles.container_team1}>
            <Image
              src={teamLuisa}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamLeticia}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamJonathan}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
          </div>
          <div className={styles.container_team2}>
            <Image
              src={teamVinicius}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamAna}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamRebeca}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
          </div>
          <div className={styles.container_team3}>
            <Image
              src={teamVitor}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamLia}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
            <Image
              src={teamMichael}
              alt="Tribos UX Team Image"
              width={283}
              height={267}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
