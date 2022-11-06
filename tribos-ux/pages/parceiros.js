// Nextjs tools
import Image from "next//image";

//Images
import womanDistance from "../public/businesswomandistance.svg";
import frameAbout from "../public/frame-about.svg";
import frameDialog from "../public/framedialog.svg";
import frameNetworking from "../public/framenetworking.svg";
import framePartners from "../public/frameourpartners.svg";
import frameVisibility from "../public/framevisibility.svg";

// Components
import Layout from "../components/Layouts";

// Styles
import styles from "../styles/Partners.module.scss";

export default function Partners() {
  return (
    <div>
      <div className={styles.container_partners}>
        <div className={styles.partners}>
          <div className={styles.partners_description}>
            <h1>Seja um parceiro UX Tribos</h1>
            <p>
              Envie sua proposta de parceria através do nosso formulário de
              contato e faça a diferença na comunidade!
            </p>
            <div className={styles.partners_section}>
              <button>Entrar em contato</button>
              <Image
                className={styles.frameabout_img}
                src={frameAbout}
                alt="Tribos UX Frame Image"
                width={204}
                height={53.68}
              />
            </div>
          </div>
          <Image
            className={styles.womanpartners_img}
            src={womanDistance}
            alt="Businesswoman looking into distance image"
            width={731}
            height={513}
          />
        </div>
      </div>
      <div className={styles.our_partners}>
        <Image
          className={styles.framepartners}
          src={framePartners}
          alt="UX Tribos Partners"
          width={1150}
          height={152}
        />
      </div>
      <div className={styles.partners_benefits}>
        <h1>Benefícios de ser um parceiro UX Tribos</h1>
        <div className={styles.framebenefits}>
          <Image
            src={frameVisibility}
            alt="UX Partners Frame Visibility"
            width={321}
            height={420}
          />
          <Image
            src={frameDialog}
            alt="UX Partners Frame Dialog"
            width={320}
            height={462}
          />
          <Image
            src={frameNetworking}
            alt="UX Partners Frame Networking"
            width={320}
            height={460}
          />
        </div>
      </div>
    </div>
  );
}

Partners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
