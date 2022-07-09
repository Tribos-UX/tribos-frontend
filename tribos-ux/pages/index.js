// Nextjs tools
import Head from "next/head";
import Image from "next/image";

// Components
import Layout from "../components/Layouts";
import { Button } from "../components/Button";

//Images
import loginImg from "../public/login.jpg";
import FotoPessoa from "../public/fotoPessoaHome.png";

//Icons
import { Sublinhado } from "../components/Icons";

// Styles
import styles from "../styles/Home.module.scss";
import UxTribosTitle from "../components/UxTribosTitle";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.principal}>
        <article className={styles.descricao}>
          <h1>
            O
            <UxTribosTitle />
            te ajuda a encontrar o grupo de estudos ideal
          </h1>
          <p>
            Somos uma comunidade de pessoas com um propósito em comum — a troca
            de experiência. Aqui você encontra grupos de acordo com sua
            localidade, interesses e objetivos em comum. Vamos lá?
          </p>
          <Button text={`Quero conhecer`} />
        </article>
        <Image
          src={FotoPessoa}
          alt="Foto de uma pessoa"
          width={459}
          height={724}
        />
      </section>
      <section>
        <article>
          <p>
            Utilize as mesmas plataformas que os melhores profissionais do
            mercado.
          </p>
        </article>
        <article>
          <Image src={loginImg} alt="Image Login" />
        </article>
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
