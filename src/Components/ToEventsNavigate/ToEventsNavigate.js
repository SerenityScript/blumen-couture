import { useNavigate } from "react-router-dom";
import './styleToEvents.css';

const ToEventsNavigate = () => {
  const navigate = useNavigate();
  
  return (
    <div className="HeadingCont Background">
      <h3 className="HeadingGold">Event Dekoration</h3>

      <div className="ToEventsNavigateCont">
        
        <div className="ToEventsNavigateContItem">
          <p className="ParCursive">1. Planung</p>
          <p className="ParStandart">
            In der Planungsphase legen wir das Konzept und Thema der Event-Dekoration fest, passend zum Anlass und den Kundenwünschen.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ParCursive">2. Vorbereitungen</p>
          <p className="ParStandart">
            Wir bereiten die Blumendekorationen in unserem Shop vor, indem wir Sträuße, Gestecke oder Blumenwände arrangieren.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ParCursive">3. Umsetzung vor Ort</p>
          <p className="ParStandart">
            Alle Blumenarrangements werden an ihrem vorgesehenen Platz positioniert, von der Tischdekoration bis hin zum Eingangsbereich.
          </p>
        </div>
        
        <div className="ToEventsNavigateContItem">
          <p className="ParCursive">4. Abbau</p>
          <p className="ParStandart">
            Nach dem Event entfernen wir die Blumen und Dekorationselemente sorgfältig, um die Location in ihren ursprünglichen Zustand zu versetzen.
          </p>
        </div>
        
      </div>
      <h3 className="ParGold Cursor Margin CTA" onClick={() => { navigate("/eventDecoration"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Mehr über Event Dekoration erfahren...</h3>

      </div>
  )
}

export default ToEventsNavigate;