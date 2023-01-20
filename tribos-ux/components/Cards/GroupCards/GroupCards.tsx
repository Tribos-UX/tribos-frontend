// NextImage
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

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
  id?: number
  imageSrc: string | StaticImageData
  description: string
  groupName: string
  buttons: string[]
  daysWeek: string
  moderated: boolean
  activemembers: number
  allmembers: number
  moderador?: any
}

export default function GroupCards({
  id,
  imageSrc,
  description,
  groupName,
  buttons,
  daysWeek,
  moderated,
  activemembers,
  allmembers,
  moderador,
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
        {moderador && (
          <Link href={`/dashboard/group/moderador?id=${id}`}>
            acessar área de moderador
          </Link>
        )}
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
