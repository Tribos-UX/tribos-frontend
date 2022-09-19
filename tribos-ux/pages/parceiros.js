// Layout
import Layout from "../components/Layouts";

// Nextjs Images
import Image from "next/future/image";

// Images
import pessoasJuntas from "../public/fotodaspessoasjuntas.png";
import figmaLogo from "../public/figma-dynamic-color.png";
import FigmaBlackWhite from "../public/figma-image.png";
import logoDesconhecido from "../public/logo-desconhecido.png";
import googleLogo from "../public/google-image.png";
import garotaSentada from "../public/Girl chatting remotely with group of three people.png";

// Icons
import { SublinhadoMenor } from "../components/Icons";

// Styles
import styles from "../styles/Parceiros.module.scss";

export default function Parceiros() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <h1 className={styles.titulo}>
            Seja um
            <strong className={styles.titulo_palavra_sublinhada}>
              parceiro
              <SublinhadoMenor />
            </strong>
            UX Tribos
          </h1>
          <div className={styles.descricao}>
            <div>
              <p>
                Envie sua proposta de parceria através do nosso formulário de
                contato e faça a diferença na comunidade!
              </p>
              <button className={styles.button_contato}>
                Entre em contato
              </button>
            </div>
            <Image width={87} height={87} src={figmaLogo} alt="Logo Figma" />
          </div>

          <Image
            width={108}
            height={33.68}
            src={pessoasJuntas}
            alt="Fotos juntas"
            className={styles.fotosjuntas}
          />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <h2 className={styles.parceiros_titulo}>Nossos Parceiros</h2>
          <div className={styles.todos_logos}>
            <Image
              width={36}
              height={40}
              className={styles.figma_logo}
              src={FigmaBlackWhite}
              alt="Logo Figma"
            />
            <Image
              width={36}
              height={36}
              className={styles.logo_desconhecido}
              src={logoDesconhecido}
              alt="Logo desconhecido"
            />
            <Image
              width={96}
              height={36}
              className={styles.google_logo}
              src={googleLogo}
              alt="Google logo"
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <h3 className={styles.titulo_beneficios}>
            Benefícios de ser um
            <strong className={styles.titulo_palavra_sublinhada}>
              parceiro
              <SublinhadoMenor />
            </strong>
            UX Tribos
          </h3>
          <article className={styles.beneficios_container}>
            <Image
              src={garotaSentada}
              alt="Pessoa sentada mexendo no celular"
              width={320}
              height={320}
            />
            <h1 className={styles.subtitulo}>Visibilidade</h1>
            <p>
              Sua empresa vai figurar nas nossas redes sociais e na Home do
              nosso site.
            </p>
          </article>
          <article className={styles.beneficios_container}>
            <Image
              src={garotaSentada}
              alt="Pessoa sentada mexendo no celular"
              width={320}
              height={320}
            />
            <h1 className={styles.subtitulo}>Diálogo com usuários</h1>
            <p>
              Fique próximo dos estudantes e aprenda a falar a mesma língua,
              entendendo quais as necessidades vigentes no mercado.
            </p>
          </article>
          <article className={styles.beneficios_container}>
            <Image
              src={garotaSentada}
              alt="Pessoa sentada mexendo no celular"
              width={320}
              height={320}
            />
            <h1 className={styles.subtitulo}>Faça networking</h1>
            <p>
              Através da plataforma, você poderá conversar com outros
              stakeholders, sejam eles outras marcas ou mesmo possíveis
              parcerias B2B.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

Parceiros.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
