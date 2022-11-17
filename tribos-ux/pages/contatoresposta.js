// Nextjs tools
import Image from "next//image";
import Layout from "../components/Layout/Home/Layout";

//Images
import hello from "../public/hello.svg";

// Styles
import styles from "../styles/ContatoResposta.module.scss";

export default function ContatoResposta() {
    return (
        <div className={styles.container_contato}>
            <Image src={hello} alt="Contact Image" width={439} height={346} />
            <h1>Obrigada por enviar sua mensagem, responderemos em breve!</h1>
        </div>
    )
}

ContatoResposta.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
