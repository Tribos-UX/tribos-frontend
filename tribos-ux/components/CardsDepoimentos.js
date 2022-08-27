import jonathanImage from "../public/jonathanDepoimentoImagem.png";

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
          alt={"imagem do depoimento"}
          width={68}
          height={68}
        />
        <figcaption>
          Jonathan Duwe <br></br> UX Researcher | UX Designer
        </figcaption>
      </figure>
    </div>
  );
}
