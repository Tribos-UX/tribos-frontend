// NextImage
import Image from "next/future/image";

// Teste image
import ImageCard from "./../public/ImagemDoCard.png";

// Components
import { Button } from "./Button";
import {
  BookmarkIcon,
  ClockIcon,
  FlechaIcon,
  GroupIcon,
  HeartIcon,
  StarIcon,
} from "./Icons";

// Styles
import styles from "../components/GroupCard.module.scss";

export default function GroupCards() {
  return (
    <div className={styles.card}>
      <figure>
        <button className={styles.card_heart_button}>
          <span className={styles.card_heart_icon}>{HeartIcon}</span>{" "}
        </button>
        <Image
          src={ImageCard}
          alt="Imagem do card"
          className={styles.card_image}
        />
        <button className={styles.card_arrow_button}>
          <span className={styles.card_arrow_icon}>
            <FlechaIcon />{" "}
          </span>
        </button>
      </figure>

      <div className={styles.card_content}>
        <div className={styles.card_bookmark_button}>
          <button>
            <BookmarkIcon />
          </button>
          Grupo sobre Estudo de Caso
        </div>
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
