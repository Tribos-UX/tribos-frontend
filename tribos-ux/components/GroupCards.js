// NextImage
import Image from "next/image";

// Teste image
import ImageCard from "./../public/ImagemDoCard.png";

// Components
import { Button } from "./Button";
import {
  BookmarkIcon,
  ClockIcon,
  GroupIcon,
  HeartIcon,
  StarIcon,
} from "./Icons";

// Styles
import styles from "../components/GroupCard.module.scss";

export default function GroupCards() {
  return (
    <div>
      <figure className={styles.imagem}>
        <button className={styles.heart_button}>
          <HeartIcon />
        </button>
        <Image src={ImageCard} alt="Imagem do card" width={350} height={200} />
        <figcaption>
          <BookmarkIcon /> Grupo sobre Estudo de Caso
        </figcaption>
      </figure>

      <p>
        {" "}
        <strong>Grupo UX on Focus</strong>{" "}
      </p>
      <div>
        <Button text={"Case"} />
        <Button text={"Design"} />
        <Button text={"Pesquisa"} />
      </div>
      <div>
        <p>
          {" "}
          <ClockIcon /> Quintas
        </p>
        <p>
          <StarIcon /> Moderado
        </p>
        <p>
          {" "}
          <GroupIcon /> 5/8
        </p>
      </div>
    </div>
  );
}
