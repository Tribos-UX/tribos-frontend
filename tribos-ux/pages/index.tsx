// React
import React from "react";

// Nextjs tools
import Head from "next/head";
import Image from "next/image";

// Components
import CardsDepoimentos from "../components/Cards/DepoimentosCards/CardsDepoimentos";
import CarouselWithDots from "../components/Carousel/CarouselWithDots";
import Layout from "../components/Layout/Home/Layout";

//Images
import printScreen from "../public/balazs-ketyi-9VzoRKfBsMM-unsplash 1.png";
import figmaDynamicColor from "../public/figma-dynamic-color.png";
import FigmaImage from "../public/figma-image.png";
import FotoPessoasJuntas from "../public/fotodaspessoasjuntas.png";
import FotoPessoa from "../public/fotoPessoaHome.png";
import GoogleImage from "../public/google-image.png";
import loginImg from "../public/login.jpg";
import LogoDesconhecido from "../public/logo-desconhecido.png";
import CasesPortfolio from "../public/Man_standing_near_the_board.png";
import Megaphone from "../public/megaphone-dynamic-color.png";
import sublinhadoDuplo from "../public/sublinhado duplo.png";
import zoomImage from "../public/visuals-Y4qzW3AsvqI-unsplash 1.png";
import FaçaNetworking from "../public/woman_recruiter_leaning .png";
import TrabalharEmEquipe from "../public/young_women_standing.png";

// Styles
import UxTribosTitle from "../components/UxTribosTitle";
import styles from "../styles/Home.module.scss";

// Icons
import GroupCards from "../components/Cards/GroupCards/GroupCards";
import {
  adereço,
  AgendaIcon,
  PersonIcon,
  PlusIcon,
  SublinhadoMenor,
  sublinhadoUsuarios,
} from "../components/common/Icons";

export default function Home() {
  const slides = [<GroupCards />, <GroupCards />, <GroupCards />];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className={`${styles.container} ${styles.principal}`}>
          <article className={styles.descricao}>
            <h1>
              O
              <UxTribosTitle title={"UX Tribos"} />
              te ajuda a encontrar o grupo de estudos ideal
            </h1>
            <p>
              Somos uma comunidade de pessoas com um propósito em comum — a
              troca de experiência. Aqui você encontra grupos de acordo com sua
              localidade, interesses e objetivos em comum. Vamos lá?
            </p>
            <div className={styles.button_index}>
              <button className={styles.button}>Quero conhecer</button>
              <Image
                src={FotoPessoasJuntas}
                alt="Foto juntas"
                width={204}
                height={54}
              />
            </div>
          </article>
          <article className={styles.imagem_principal}>
            <Image
              src={figmaDynamicColor}
              alt="Figma Dynamic Color"
              width={180}
              height={180}
            />
            <Image
              src={FotoPessoa}
              alt="Foto de uma pessoa"
              width={459}
              height={724}
            />
          </article>
        </div>
      </section>
      <section>
        <div className={styles.plataformas}>
          <p>
            Utilize as mesmas plataformas que os melhores profissionais do
            mercado.
          </p>
          <div className={styles.plataformas_logos}>
            <Image
              className={styles.plataformas_logo_figma}
              src={FigmaImage}
              alt="Figma Image"
              width={90}
              height={82}
            />
            <Image
              className={styles.plataformas_logo_figma}
              src={LogoDesconhecido}
              alt="Logo desconhecido"
              width={82}
              height={82}
            />
            <Image
              className={styles.plataformas_logo_figma}
              src={GoogleImage}
              alt="Google Image"
              width={219}
              height={82}
            />
          </div>
        </div>
      </section>
      <section className={styles.plataforma_tools}>
        <Image src={loginImg} alt="Image Login" width={668} height={449} />

        <article className={styles.plataforma_tools_chamada}>
          <h2>
            Participe ou crie seu próprio <strong>grupo de estudos!</strong>
          </h2>

          <article className={styles.plataforma_tools_todas}>
            <div className={styles.plataforma_tools_membro}>
              <PersonIcon />
              <p>
                Atue como membro de um grupo ou crie seu próprio grupo de
                estudos
              </p>
            </div>
            <div className={styles.plataforma_tools_tarefa}>
              <PlusIcon />
              <p>Planeje tarefas</p>
            </div>
            <div className={styles.plataforma_tools_cronograma}>
              <AgendaIcon />
              <p>Crie um cronograma de encontros.</p>
            </div>
          </article>
        </article>
      </section>
      <section className={styles.funcionalidades}>
        <div className={styles.funcionalidades_card}>
          <Image
            src={TrabalharEmEquipe}
            alt="Imagem de 3 pessoas juntas abraçadas"
            width={305}
            height={221}
          />
          <p className={styles.funcionalidades_chamadas}>
            Aprenda a trabalhar em equipe
          </p>
          <p className={styles.funcionalidades_descricao}>
            Organize seu grupo de estudos com outras pessoas e descubra o poder
            do trabalho em equipe e da colaboração no aprendizado.
          </p>
        </div>
        <div className={styles.funcionalidades_card}>
          <Image
            src={CasesPortfolio}
            width={305}
            height={221}
            alt="Cases Portfolio"
          />
          <p className={styles.funcionalidades_chamadas}>
            Crie cases para seu portfolio
          </p>
          <p className={styles.funcionalidades_descricao}>
            Nos grupos de estudos focados na criação de cases, você e até 8
            pessoas vão trabalhar em um projeto para que possam demonstrar todas
            as suas habilidades.
          </p>
        </div>
        <div className={styles.funcionalidades_card}>
          <Image
            src={FaçaNetworking}
            width={305}
            height={221}
            alt="Faça Networking"
          />
          <p className={styles.funcionalidades_chamadas}>Faça networking</p>
          <p className={styles.funcionalidades_descricao}>
            Conheça pessoas de diferentes regiões do país, troque e compartilhe
            conhecimentos e experiências, melhorando assim, suas chances no
            mercado de trabalho.
          </p>
        </div>
      </section>
      <section className={styles.grupos}>
        <h2 className={styles.grupos_titulo}>
          <strong className={styles.grupos_palavra}>
            Grupos
            <span>
              <SublinhadoMenor />
            </span>
          </strong>
          criados recentemente
          <span>{adereço}</span>
        </h2>
        <CarouselWithDots slides={slides} />{" "}
      </section>

      <section className={styles.expectativas}>
        <article className={styles.expectativas_imagens_principal}>
          <div className={styles.expectativas_chamada_imagem}>
            <Image
              src={sublinhadoDuplo}
              alt={"sublinhado duplo"}
              className={styles.expectativas_imagem_sublinhado1}
            />{" "}
            <Image
              src={sublinhadoDuplo}
              alt={"sublinhado duplo"}
              className={styles.expectativas_imagem_sublinhado2}
            />
            <div className={styles.expectativas_chamada}>
              Seus interesses e objetivos de estudo serão correspondidos.
            </div>
          </div>

          <div className={styles.expectativas_imagens}>
            <Image
              src={printScreen}
              alt={"print screen image"}
              className={styles.expectativas_imagem_printscreen}
            />
            <Image
              src={zoomImage}
              alt={"zoom Image"}
              className={styles.expectativas_imagem_zoom}
            />
            <Image
              src={sublinhadoDuplo}
              alt={"sublinhado duplo"}
              className={styles.expectativas_imagem_sublinhado1}
            />{" "}
            <Image
              src={sublinhadoDuplo}
              alt={"sublinhado duplo"}
              className={styles.expectativas_imagem_sublinhado2}
            />
          </div>
        </article>
        <article className={styles.expectativas_queroconhecer}>
          <p>
            Quer criar um case para portfólio, ou apenas conversar sobre um
            tema? Aqui você nos diz quais são seus objetivos e conhecimentos
            dentro de UX e nós te ajudamos a encontrar o grupo ideal.
          </p>
          <button className={styles.button_conhecer}>Quero conhecer</button>
        </article>
      </section>

      <section className={styles.depoimentos}>
        <h3 className={styles.grupos_titulo}>
          O que nossos
          <strong className={styles.depoimentos_palavra_sublinhada}>
            usuários
            <span>{sublinhadoUsuarios}</span>
          </strong>
          acham da plataforma
          <span>{adereço}</span>
        </h3>
        <article>
          <CardsDepoimentos />
          <CardsDepoimentos />
          <CardsDepoimentos />
        </article>
      </section>
      <section className={styles.discord}>
        <picture>
          <Image src={Megaphone} alt={"imagem de um megaphone"} />
        </picture>
        <h4>Diga Olá para a comunidade</h4>
        <p>
          No Discord do UX Tribos você encontra salas especiais de acordo com
          seus interesses, dicas e conteúdos. <br></br> Vem pra Tribo!
        </p>
        <button>Acessar canal do discord</button>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
