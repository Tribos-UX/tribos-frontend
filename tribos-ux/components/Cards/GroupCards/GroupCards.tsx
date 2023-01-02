// NextImage
import Image, { StaticImageData } from 'next/image'

// Image
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

type GroupCardProps = {
  imageSrc: string | StaticImageData
  description: string
  groupName: string
  buttons: string[]
  daysWeek: string
  moderated: boolean
  activemembers: number
  allmembers: number
}

export default function GroupCards({
  imageSrc,
  description,
  groupName,
  buttons,
  daysWeek,
  moderated,
  activemembers,
  allmembers,
}: GroupCardProps) {
  return (
    <div className={styles.card}>
      <figure>
        <button className={styles.card_heart_button}>
          <span className={styles.card_heart_icon}>{HeartIcon}</span>{' '}
        </button>
        <Image
          src={imageSrc}
          alt="Imagem do card"
          className={styles.card_image}
          width={330}
          height={340}
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
          {description}
        </button>
        <p>
          <strong>{groupName}</strong>{' '}
        </p>
        <div className={styles.card_buttons}>
          {buttons.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </div>
        <div className={styles.card_features}>
          <p>
            {' '}
            <ClockIcon /> {daysWeek}
          </p>
          <p>
            <StarIcon /> {moderated}
          </p>
          <p>
            <GroupIcon /> {`${activemembers} / ${allmembers}`}
          </p>
        </div>
      </div>
    </div>
  )
}
