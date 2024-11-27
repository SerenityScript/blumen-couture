import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../Components/Intro/Intro";
import Slides from "../Components/Slides/Slides";
import { listEvents } from "./listEvents";
import Tabs from "../Components/Tabs/Tabs";
import TabInfoOne from "../Components/Tabs/TabInfoOne";
import TabInfoTwo from "../Components/Tabs/TabInfoTwo";
import TabInfoThree from "../Components/Tabs/TabInfoThree";
import { useNavigate } from "react-router-dom";
import BtnUp from "../Components/BtnUp/BtnUp";

gsap.registerPlugin(ScrollTrigger);

const EventDecoration = () => {
  const images = [
    "https://images.unsplash.com/photo-1589243853654-393fcf7c870b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500310135558-c4c498fdc927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524777313293-86d2ab467344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdXF1ZXQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const events = listEvents;

  const [showText, setShowText] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();
  const sectionsRef = useRef([]); // Referenzen für Sections

  const showTextClick = (event) => {
    event.showMore = !event.showMore;
    setShowText(!showText);
  };

  useEffect(() => {
    // GSAP-Animation für jede Section
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      <header>
        <Slides images={images} />
        <Intro
          heading="Blumen Couture"
          mainHeading="Spezielle Location oder zu Hause"
          par="Exklusive Designs für unvergessliche Anlässe."
        />
      </header>
      <main className="HomeMainCont">

        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[0] = el)} // Section 1 Referenz
        >
          <h3 className="HeadingGold">Event Dekoration</h3>
          <p className="ParStandart ParLong">
            Ob durch beeindruckende Dekorationen, außergewöhnliche
            Blumenarrangements von Blumen Couture, gutes Essen oder besondere
            Unterhaltung – das Ziel ist, eine Atmosphäre zu schaffen, die alle
            Sinne anspricht und jeden Gast in den Moment eintauchen lässt.
          </p>
          <p className="ParStandart ParLong">
            Von der Begrüßung bis zum Abschied entsteht ein Zusammenspiel aus
            eleganten Blumenarrangements, fein abgestimmter Musik und köstlichem
            Essen, das die Sinne anspricht und jedem Gast das Gefühl gibt,
            willkommen zu sein.
          </p>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[1] = el)} // Section 2 Referenz
        >
          {events.map((event) => {
            const { image, title, description, id, showMore } = event;
            return (
              <div className="HeadingCont" key={id}>
                <h3 className="ParGold">{title}</h3>
                <img src={image} className="EventImg" alt="Event" />
                <p className="ParEvent">
                  {showMore
                    ? description
                    : description.substring(0, 120) + "..."}
                  <button
                    className="ParGold"
                    onClick={() => showTextClick(event)}
                  >
                    {showMore ? "Weniger anzeigen" : "Mehr anzeigen"}
                  </button>
                </p>
              </div>
            );
          })}
        </section>

        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[2] = el)} // Section 3 Referenz
        >
          <h3 className="HeadingGold Margin">Beispiele für Dekorationsstile</h3>
          <Tabs setActiveTab={setActiveTab} />
          {activeTab === 0 && <TabInfoOne />}
          {activeTab === 1 && <TabInfoTwo />}
          {activeTab === 2 && <TabInfoThree />}
        </section>

        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[3] = el)} // Section 4 Referenz
        >
          <div className="KontactUsContainer">
            <h2 className="MainHeading">Möchten Sie Ihren Traum wahr werden lassen?</h2>
            <p className="Par">Kontaktieren Sie uns und wir erfüllen es</p>
            <button
              className="KontaktUsBtn"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
              aria-label="Learn more about how to contact us"
            >
              KONTAKT
            </button>
          </div>
        </section>

        <BtnUp />
      </main>
    </div>
  );
};

export default EventDecoration;
