import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Awards from "../Components/Awards/Awards";
import BtnUp from "../Components/BtnUp/BtnUp";
import Countdown from "../Components/Countdown/Countdown";
import Instagram from "../Components/Instagram/Instagram";
import Intro from "../Components/Intro/Intro";
import { Reviews } from "../Components/Reviews/Reviews";
import Slides from "../Components/Slides/Slides";
import ToEventsNavigate from "../Components/ToEventsNavigate/ToEventsNavigate";
import ToShopNavigate from "../Components/ToShopNavigate/ToShopNavigate";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]); // Array von Refs für alle Sektionen

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // Start der Animation (80% Sichtbarkeit)
              end: "top 20%", // Ende der Animation (20% Sichtbarkeit)
              scrub: true, // Für flüssiges Vor- und Rückwärts-Scrolling
              toggleActions: "play reverse play reverse", // Animation in beide Richtungen
            },
          }
        );
      }
    });
  }, []);

  // Funktion zur Zuordnung von Refs
  const setRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  const images = [
    "https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1474822189311-11c44f2aa6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1640060902291-570e6cdb00e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8"
  ];

  const blackFridayDate = "2025-02-14T00:00:00";

  return (
    <div>
      <header>
        <Slides images={images} />

        <Intro
          heading="Blumen Couture"
          mainHeading="Blumen Shop & Event Dekoration"
          par="Die Kunst der floralen Eleganz."
        />
      </header>

      <main className="HomeMainCont">
        {/* Jede Sektion bekommt eine Referenz */}
        <section ref={(el) => setRef(el, 0)} className="HeadingCont">
          <h3 className="HeadingGold">Willkommen bei Blumen Couture,</h3>
          <p className="ParCursive">
            Ihrem exklusiven Blumenatelier für luxuriöse Eventdekorationen und handverlesene Blumenarrangements.
          </p>
          <div className="ImageCont">
            <img
              src="https://images.unsplash.com/photo-1561334251-b306baba437a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              alt="Flowers"
            />
          </div>
          <div>
            <p className="ParStandart ParLong">
              Wir verleihen Ihrem Event eine unvergessliche Atmosphäre. Ob Hochzeiten, Galas oder private Feiern – bei uns
              finden Sie florale Kunstwerke, die Ihre Momente zum Strahlen bringen.
            </p>
          </div>
          <Link
            to="/about"
            className="ToPageNavigateBtn"
            aria-label="Learn more about Blumen Couture"
          >
            Mehr über Blumen Couture erfahren...
          </Link>
        </section>

        <section ref={(el) => setRef(el, 1)} className="HeadingCont">
          <Countdown targetDate={blackFridayDate} />
        </section>

        <section ref={(el) => setRef(el, 2)} className="HeadingCont">
          <ToShopNavigate />
        </section>

        <section ref={(el) => setRef(el, 3)} className="HeadingCont">
          <ToEventsNavigate />
        </section>

        <section ref={(el) => setRef(el, 4)} className="HeadingCont">
          <div className="KontactUsContainer">
            <h2 className="MainHeading">Möchten Sie Ihren Traum wahr werden lassen?</h2>
            <p className="Par">Kontaktieren Sie uns und wir erfüllen es</p>
            <Link
              to="/contact"
              className="KontaktUsBtn"
              aria-label="Learn more about how to contact us"
            >
              KONTAKT
            </Link>
          </div>
        </section>

        <section ref={(el) => setRef(el, 5)} className="HeadingCont">
          <Instagram />
        </section>

        <section ref={(el) => setRef(el, 6)} className="HeadingCont">
          <Reviews />
        </section>

        <section ref={(el) => setRef(el, 7)} className="HeadingCont">
          <Awards />
        </section>

        <BtnUp />
      </main>
    </div>
  );
};

export default Home;