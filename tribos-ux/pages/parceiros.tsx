// Nextjs tools
import Image from 'next//image'
import Link from 'next/link'
import Layout from '../components/Layout/HomeLayout/Layout'

//Images
import bookPartners from '../public/Books.png'
import womanDistance from '../public/businesswomandistance.svg'
import frameAbout from '../public/frame-about.svg'
import frameDialog from '../public/framedialog.svg'
import frameNetworking from '../public/framenetworking.svg'
import framePartners from '../public/frameourpartners.svg'
import frameVisibility from '../public/framevisibility.svg'

// Styles
import {
  underlineBenefitsPartnersPage,
  underlinePartnersPage,
} from '@/components/common/Icons'
import styles from '../styles/Partners.module.scss'

export default function Partners() {
  return (
    <div>
      <div className={styles.container_partners}>
        <div className={styles.partners}>
          <div className={styles.partners_description}>
            <h1>
              Seja um
              <strong>
                parceiro
                <span>{underlinePartnersPage}</span>
              </strong>
              UX Tribos
            </h1>
            <p>
              Envie sua proposta de parceria através do nosso formulário de
              contato e faça a diferença na comunidade!
            </p>
            <div className={styles.partners_section}>
              <Link href="/contato">Entrar em contato</Link>
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
          <Image
            className={styles.bookpartners_img}
            src={bookPartners}
            alt="Book Partners image"
            width={176}
            height={176}
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
        <h2>
          <b>
            Benefícios
            <span>{underlineBenefitsPartnersPage}</span>
            de ser um parceiro UX Tribos
          </b>
        </h2>
        <div className={styles.framebenefits}>
          <Image
            className={styles.framebenefits_img}
            src={frameVisibility}
            alt="UX Partners Frame Visibility"
            width={321}
            height={420}
          />
          <Image
            className={styles.framebenefits_img}
            src={frameDialog}
            alt="UX Partners Frame Dialog"
            width={320}
            height={462}
          />
          <Image
            className={styles.framebenefits_img}
            src={frameNetworking}
            alt="UX Partners Frame Networking"
            width={320}
            height={460}
          />
        </div>
      </div>
    </div>
  )
}

Partners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
