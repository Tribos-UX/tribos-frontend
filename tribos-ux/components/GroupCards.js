// NextImage
import Image from "next//image";

// Teste image
import ImageCard from "./../public/ImagemDoCard.png";
import FlechaCard from "./../public/item_mensagem.png";

// Components
import Button from "./Button";
import {
  BookmarkIcon,
  ClockIcon,
  GroupIcon,
  HeartIcon,
  StarIcon,
} from "./Icons";

// Styles
import styles from "../components/GroupCard.module.scss";

export default function GroupCards({ sidecard }) {
  return (
    <div className={sidecard ? styles.sidecard : styles.card}>
      <figure>
        <button className={styles.card_heart_button}>
          <span className={styles.card_heart_icon}>{HeartIcon}</span>{" "}
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
          <strong>Grupo UX on Focus</strong>{" "}
        </p>
        <div className={styles.card_buttons}>
          <Button text={"Case"} />
          <Button text={"Design"} />
          <Button text={"Pesquisa"} />
        </div>
        <div className={styles.card_features}>
          <p>
            {" "}
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
  );
}
