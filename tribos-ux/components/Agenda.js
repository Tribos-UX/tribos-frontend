// Icons
import { agendaIcon, flecha, pinIcon, plusIconBorder, setaIcon } from "./Icons";

// Better Carousel
import Carousel from "better-react-carousel";

// Styles
import styles from "./Agenda.module.scss";
import DaysOfweek from "./DaysOfweek";

export default function Agenda({ dayOfweek }) {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <span className={styles.agenda_icon}>{agendaIcon}</span>
        Sua agenda
        <span className={styles.plus_icon}>{plusIconBorder}</span>
      </div>
      <div>
        <Carousel
          rows={1}
          cols={6}
          containerStyle={{
            background: "#FBFBFC",
            "box-shadow": "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
            "border-radius": "16px",
          }}>
          <Carousel.Item>
            <DaysOfweek day={"seg"} number={"01"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"seg"} number={"01"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"ter"} number={"02"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"qua"} number={"03"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"qui"} number={"04"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"sex"} number={"05"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"sab"} number={"06"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"sab"} number={"06"} />
          </Carousel.Item>
          <Carousel.Item>
            <DaysOfweek day={"sab"} number={"06"} />
          </Carousel.Item>
        </Carousel>
      </div>
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
    </div>
  );
}
