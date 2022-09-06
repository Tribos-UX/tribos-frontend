// Imagem
import jonathanImage from "../public/jonathanDepoimentoImagemBordas.png";

// NextImage
import Image from "next/future/image";

// CSS
import styles from "./CardsDepoimentos.module.scss";

export default function CardsDepoimentos() {
  return (
    <div className={styles.cards_depoimentos}>
      <p>
        “Percebemos que formar um grupo com número limitado de pessoas e
        encontros semanais para construir um case iria influenciar muito no
        portfólio e portanto, na empregabilidade.”
      </p>
      <figure>
        <Image
          className={styles.cards_depoimentos_avatar}
          src={jonathanImage}
          alt={"Foto do rosto de uma pessoa que está dando seu depoimento"}
          width={68}
          height={68}
        />
        <figcaption>
          <strong>Jonathan Duwe</strong>
          <p>UX Researcher | UX Designer</p>
        </figcaption>
      </figure>
    </div>
  );
}
