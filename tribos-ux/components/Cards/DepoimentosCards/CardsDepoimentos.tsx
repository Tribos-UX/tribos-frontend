// Imagem
import jonathanImage from '../../../public/jonathanDepoimentoImagemBordas.png'

// NextImage
import Image from 'next/image'

// CSS
import styles from './CardsDepoimentos.module.scss'

export default function CardsDepoimentos({
  testimonial,
  avatar,
  name,
  career,
}) {
  return (
    <div className={styles.cards_depoimentos}>
      <p>{testimonial}</p>
      <figure>
        {avatar}
        <figcaption>
          <strong>{name}</strong>
          <p>{career}</p>
        </figcaption>
      </figure>
    </div>
  )
}
