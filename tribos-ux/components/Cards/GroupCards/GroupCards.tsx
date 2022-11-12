// NextImage
import Image from 'next/image'

// Teste image
import ImageCard from '../../../public/ImagemDoCard.png'
import FlechaCard from '../../../public/item_mensagem.png'

// Icons
import {
  BookmarkIcon,
  ClockIcon,
  GroupIcon,
  HeartIcon,
  StarIcon,
} from '../../common/Icons'

// Styles
import styles from '../GroupCards/GroupCard.module.scss'

export default function GroupCards() {
  return (
    <div className={styles.card}>
      <figure>
        <button className={styles.card_heart_button}>
          <span className={styles.card_heart_icon}>{HeartIcon}</span>{' '}
        </button>
        <Image
          src={ImageCard}
          alt="Imagem do card"
          className={styles.card_image}
        />
        <Image
          src={FlechaCard}
          alt="Imagem de uma flecha"
          className={styles.card_arrow_image}
        />
      </figure>

      <div className={styles.card_content}>
        <button className={styles.card_bookmark_button}>
          <BookmarkIcon />
          Grupo sobre Estudo de Caso
        </button>
        <p>
          <strong>Grupo UX on Focus</strong>{' '}
        </p>
        <div className={styles.card_buttons}>
          <button>Case</button>
          <button>Design</button>
          <button>Pesquisa</button>
        </div>
        <div className={styles.card_features}>
          <p>
            {' '}
            <ClockIcon /> Quintas
          </p>
          <p>
            <StarIcon /> Moderado
          </p>
          <p>
            <GroupIcon /> 5/8
          </p>
        </div>
      </div>
    </div>
  )
}
