import { agendaIcon, plusIconBorder } from "./Icons";

// Better Carousel
import Carousel from "better-react-carousel";

export default function Agenda() {
  return (
    <section>
      <div>
        <p>
          <span>{agendaIcon}</span>
          Sua agenda
          <span>{plusIconBorder}</span>
        </p>
      </div>
      <div>
        <Carousel rows={1} cols={6} />
      </div>
    </section>
  );
}
