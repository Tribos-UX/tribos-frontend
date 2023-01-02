// Nextjs tools
import Image from 'next//image'
import Link from 'next/link'

//Images
import error from '../public/error.svg'

// Styles
import styles from '../styles/Error.module.scss'

export default function Error() {
  return (
    <div className={styles.container_error}>
      <Image
        className={styles.error_img}
        src={error}
        alt="Page Not Found"
        width={388}
        height={458}
      />
      <div className={styles.error_mobile}>
        <Image
          src={
            'https://res.cloudinary.com/deaejawfj/image/upload/q_auto:eco/v1672691625/close_up_of_black_astonished_businesswoman_in_brown_suit_hs6tgc.webp'
          }
          alt="Page Not Found"
          width={263}
          height={387}
          className={styles.error_img_mobile}
        />
        <p className={styles.error_msg}>Erro 404</p>
      </div>

      <h1>Página não encontrada</h1>
      <Link href="/" className={styles.error_return}>
        Retornar á página principal
      </Link>
    </div>
  )
}
