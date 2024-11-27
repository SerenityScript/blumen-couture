import { useNavigate } from "react-router-dom";
import './styleToEvents.css';

const ToEventsNavigate = () => {
  const navigate = useNavigate();
  
  return (
    <div className="HeadingCont Background">
      <h3 className="HeadingGold">Event Dekoration</h3>

      <div className="ToEventsNavigateCont">
        
        <div className="ToEventsNavigateContItem">
          <p className="ToEventsNavigateHeader">1. Planung</p>
          <p className="ParStandartJustify">
            In der Planungsphase legen wir das Konzept und Thema der Event-Dekoration fest, passend zum Anlass und den Kundenwünschen.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ToEventsNavigateHeader">2. Vorbereitungen</p>
          <p className="ParStandartJustify">
            Wir bereiten die Blumendekorationen in unserem Shop vor, indem wir Sträuße, Gestecke oder Blumenwände arrangieren.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ToEventsNavigateHeader">3. Umsetzung vor Ort</p>
          <p className="ParStandartJustify">
            Alle Blumenarrangements werden an ihrem vorgesehenen Platz positioniert, von der Tischdekoration bis hin zum Eingangsbereich.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ToEventsNavigateHeader">4. Abbau</p>
          <p className="ParStandartJustify">
            Nach dem Event entfernen wir die Blumen und Dekorationselemente sorgfältig, um die Location in ihren ursprünglichen Zustand zu versetzen.
          </p>
        </div>
        
      </div>
      <button
        className="ToPageNavigateBtn"
        onClick={() => {
          navigate("/eventDecoration");
          window.scrollTo({ top: 0})
        }}
        aria-label="Learn more about Event Decoration"
      >
        Mehr über Event Dekoration erfahren...
      </button>

      </div>
  )
}

export default ToEventsNavigate;