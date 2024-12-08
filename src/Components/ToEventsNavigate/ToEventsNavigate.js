import { Link } from "react-router-dom";
import './styleToEvents.css';

const ToEventsNavigate = () => {
  const steps = [
    {
      title: "1. Planung",
      description:
        "In der Planungsphase legen wir das Konzept und Thema der Event-Dekoration fest, passend zum Anlass und den Kundenwünschen.",
    },
    {
      title: "2. Vorbereitungen",
      description:
        "Wir bereiten die Blumendekorationen in unserem Shop vor, indem wir Sträuße, Gestecke oder Blumenwände arrangieren.",
    },
    {
      title: "3. Umsetzung vor Ort",
      description:
        "Alle Blumenarrangements werden an ihrem vorgesehenen Platz positioniert, von der Tischdekoration bis hin zum Eingangsbereich.",
    },
    {
      title: "4. Abbau",
      description:
        "Nach dem Event entfernen wir die Blumen und Dekorationselemente sorgfältig, um die Location in ihren ursprünglichen Zustand zu versetzen.",
    },
  ];

  return (
    <div className="HeadingCont Background">
      <h3 className="HeadingGold">Event Dekoration</h3>

      <div className="ToEventsNavigateCont">
        {steps.map((step, index) => (
          <div key={index} className="ToEventsNavigateContItem">
            <p className="ToEventsNavigateHeader">{step.title}</p>
            <p className="ParStandartJustify">{step.description}</p>
          </div>
        ))}
      </div>

      <Link
        to="/eventDecoration"
        className="ToPageNavigateBtn"
        aria-label="Learn more about Event Decoration"
      >
        Mehr über Event Dekoration erfahren...
      </Link>
    </div>
  );
};

export default ToEventsNavigate;