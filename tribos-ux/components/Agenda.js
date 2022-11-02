// Icons
import { agendaIcon, flecha, pinIcon, plusIconBorder, setaIcon } from "./Icons";

// Better Carousel
import Carousel from "better-react-carousel";

// Styles
import styles from "./Agenda.module.scss";
import DaysOfweek from "./DaysOfweek";
import CarouselWithDots from "./Carousel/CarouselWithArrows";

export default function Agenda({ dayOfweek }) {
  const SLIDE_COUNT = 5;
  const slides = [
    <DaysOfweek number={10} day={"seg"} />,
    <DaysOfweek number={11} day={"ter"} />,
  ];

  return (
    <article className={styles.container}>
      <div className={styles.titulo}>
        <span className={styles.agenda_icon}>{agendaIcon}</span>
        Sua agenda
        <span className={styles.plus_icon}>{plusIconBorder}</span>
      </div>
      <CarouselWithDots slides={slides} />
      <div className={styles.dayOfweek}>{dayOfweek}</div>
      <div className={styles.tarefas}>
        <p>
          <span>{pinIcon}</span>Pesquisa qualitativa
        </p>
        {setaIcon}
      </div>
      <div className={styles.tarefas}>
        {pinIcon}
        <p>Pesquisa qualitativa</p>
        {setaIcon}
      </div>
      <div className={styles.tarefas}>
        {pinIcon}
        <p>Pesquisa qualitativa</p>
        {setaIcon}
      </div>
      <div className={styles.tarefas}>
        {pinIcon}
        <p>Pesquisa qualitativa</p>
        {setaIcon}
      </div>
    </article>
  );
}
