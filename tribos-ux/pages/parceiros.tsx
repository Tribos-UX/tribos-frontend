// Nextjs tools
import Image from 'next//image'
import Link from 'next/link'
import Layout from '../components/Layout/HomeLayout/Layout'

//Images

import womanDistance from '../public/businesswomandistance.png'
import frameAbout from '../public/frame-about.svg'
import framePartners from '../public/frameourpartners.svg'
import frameDialog from '../public/Girl_chatting_remotely_with_group_of_three_people.png'
import frameNetworking from '../public/Recruiter_woman_having_online_interview.png'
import frameVisibility from '../public/young_woman_holding_blank_speech_bubble.png'

// Styles
import {
  SublinhadoMenor,
  underlineBenefitsPartnersPage,
  underlinePartnersPage,
} from '@/components/common/Icons'
import Button from '@mui/material/Button'
import styles from '../styles/Partners.module.scss'

export default function Partners() {
  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',
    padding: '1rem 2rem',
    height: '54px',
    textTransform: 'none',
    width: '236px',
    borderRadius: '1rem',
    color: '#FFFFFF',
    fontSize: '1.125rem',
    fontWeight: '700',
    border: '1px solid #d87036',

    '&:hover': {
      color: '#d87036',
      backgroundColor: '#fbfbfc',
    },
  }
  return (
    <>
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

            <p className={styles.p}>
              Envie sua proposta de parceria através do nosso formulário de
              contato e faça a diferença na comunidade!
            </p>

            <div className={styles.mobile_only}>
              <p>
                Envie sua proposta de parceria através do nosso formulário de
                contato e faça a diferença na comunidade!
              </p>
              <Image
                className={styles.figma_image}
                src={
                  'https://res.cloudinary.com/deaejawfj/image/upload/v1672162214/figma-dynamic-color_o4ccal.png'
                }
                width={87}
                height={87}
                alt="Imagem do figma"
              />
            </div>

            <div className={styles.partners_section}>
              <Link href="/contato">
                <Button sx={style}>Entrar em contato</Button>
              </Link>
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
            width={363}
            height={653}
          />
        </div>
      </div>

      <Image
        className={styles.framepartners}
        src={framePartners}
        alt="UX Tribos Partners"
        width={1150}
        height={152}
      />

      <div className={styles.partners_benefits}>
        <h2>
          <strong className={styles.grupos_palavra}>
            Beneficios
            <span>{underlineBenefitsPartnersPage}</span>
          </strong>
          de ser um parceiro UX Tribos
        </h2>

        <div className={styles.framebenefits}>
          <article>
            <Image
              className={styles.framebenefits_img}
              src={frameVisibility}
              alt="UX Partners Frame Visibility"
              width={320}
              height={306}
            />
            <strong>Visibilidade</strong>
            <p>
              Sua empresa vai figurar nas nossas redes sociais e na Home do
              nosso site.
            </p>
          </article>

          <article>
            <Image
              className={styles.framebenefits_img}
              src={frameDialog}
              alt="UX Partners Frame Dialog"
              width={320}
              height={320}
            />
            <strong>Diálogo com usuários</strong>
            <p>
              Fique próximo dos estudantes e aprenda a falar a mesma língua,
              entendendo quais as necessidades vigentes no mercado.
            </p>
          </article>
          <article>
            <Image
              className={styles.framebenefits_img}
              src={frameNetworking}
              alt="UX Partners Frame Networking"
              width={320}
              height={320}
            />
            <strong>Networking</strong>
            <p>
              Através da plataforma, você poderá conversar com outros
              stakeholders, sejam eles outras marcas ou mesmo possíveis
              parcerias B2B.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

Partners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
