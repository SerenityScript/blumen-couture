import { useState } from "react";
import Intro from "../Components/Intro/Intro";
import Slides from "../Components/Slides";
import { listEvents } from "./listEvents";
import Tabs from "../Components/Tabs/Tabs";
import TabInfoOne from "../Components/Tabs/TabInfoOne";
import TabInfoTwo from "../Components/Tabs/TabInfoTwo";
import TabInfoThree from "../Components/Tabs/TabInfoThree";
import { Link } from 'react-router-dom';

const EventDecoration = () => {
  const images = [
    "https://images.unsplash.com/photo-1589243853654-393fcf7c870b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500310135558-c4c498fdc927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524777313293-86d2ab467344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdXF1ZXQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
  ]

  const events = listEvents;
  const [showText, setShowText] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const showTextClick = (event) => {
    event.showMore = !event.showMore
    setShowText(!showText)
  }

  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Spezielle Location oder zu Hause"
        par="Exklusive Designs für unvergessliche Anlässe."
      />
      <div className="HeadingCont">
      <p className="ParCursive">Event Dekoration</p>
        <h3 className="HeadingGold">Eine perfekte Party schafft besondere Erinnerungen</h3>
        <p className="ParStandart">Ob durch beeindruckende Dekorationen, außergewöhnliche Blumenarrangements von Blumen Couture, gutes Essen oder besondere Unterhaltung – das Ziel ist, eine Atmosphäre zu schaffen, die alle Sinne anspricht und jeden Gast in den Moment eintauchen lässt.</p>
        <p className="ParStandart">Von der Begrüßung bis zum Abschied entsteht ein Zusammenspiel aus eleganten Blumenarrangements, fein abgestimmter Musik und köstlichem Essen, das die Sinne anspricht und jedem Gast das Gefühl gibt, willkommen zu sein.</p>
        <p className="ParStandart">Solche Erlebnisse zeichnen eine Veranstaltung aus und machen sie wirklich unvergesslich.</p>
      </div>
      <div>
        {events.map((event => {
          const { image, title, description, id, showMore } = event;
          return (
            <div className="HeadingCont" key={id}>
              <h3 className="HeadingGold">{title}</h3>
              <img src={image} className="EventImg" alt="Event" />
              <p className="ParEvent">{showMore ? description : description.substring(0, 120) + "..."}
              <button className="ParGold" onClick={() => showTextClick(event)}>{showMore ? "Weniger anzeigen" : "Mehr anzeigen"}</button></p>
            </div>
          )
        }))}
      </div>
      <div className="HeadingCont">
        <h3 className="HeadingGold">Beispiele für Dekorationsstile</h3>
        <Tabs setActiveTab={setActiveTab} />
        {activeTab === 0 && <TabInfoOne />}
        {activeTab === 1 && <TabInfoTwo />}
        {activeTab === 2 && <TabInfoThree />}
      </div>
      <div className="HeadingCont KontactUsContainer">
        <h2 className="MainHeading">Möchten Sie Ihren Traum wahr werden lassen? </h2>
        <p className="Par">Kontaktieren Sie uns und wir erfüllen es</p>
        <button className="KontaktUsBtn">
          <Link className="ParGold KontaktUsBtnText" to="/contact">KONTAKT</Link>
        </button>
      </div>
    </div>
  )
}

export default EventDecoration;