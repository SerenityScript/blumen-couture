import { useEffect, useState } from "react";
import Awards from "../Components/Awards/Awards";
import Intro from "../Components/Intro/Intro";
import { Reviews } from "../Components/Reviews/Reviews";
import Slides from "../Components/Slides/Slides";
import video from "../Assets/flowers.mp4";
import random from "../Assets/dice.png";
import { Accordion } from "../Components/Accordion/Accordion";
import Instagram from "../Components/Instagram/Instagram";
import BtnUp from "../Components/BtnUp/BtnUp";
import useGsapScrollTrigger from "../Components/useGsapScrollTrigger";


const About = () => {
  const { setRef } = useGsapScrollTrigger();

  const images = [
    "https://images.unsplash.com/photo-1561334251-b306baba437a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1631174956992-2801f6f8f4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461005490174-1d69ffda0669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D",
  ];

  const [quotes, setQuotes] = useState("");
  
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const response = await fetch(`https://quotes-api-self.vercel.app/quote`);
    const data = await response.json();
    setQuotes(data);
  };

  return (
    <div>
      <header>
        <Slides images={images} />

        <Intro
          heading="Blumen Couture"
          mainHeading="Eleganz in jeder Blüte"
          par="Wo Floristik auf Couture trifft."
        />
      </header>

      <main className="HomeMainCont">
        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 0)} // Section 1 Referenz
        >
          <h3 className="HeadingGold">Über uns</h3>
          <p className="ParCursive">"{quotes.quote}"</p>
          <p className="ParStandart">{quotes.author}</p>
          <button className="btnQuotes" onClick={fetchQuotes}>
            <img src={random} className="random" alt="Random Quote" />
          </button>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 1)} // Section 2 Referenz
        >
          <img
            src="https://images.unsplash.com/photo-1687831958087-30a2130c968f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8"
            className="EventImg"
            alt="Event"
          />
          <p className="ParStandart ParLong">
            Blumen Couture befindet sich im Herzen Hamburgs und ist mehr als
            nur ein Blumengeschäft – es ist ein Atelier für exklusive
            Eventdekoration und florales Design. Die Mission von Blumen Couture
            ist es, jedem Event eine unverwechselbare Eleganz und eine
            luxuriöse Atmosphäre zu verleihen, die noch lange im Gedächtnis
            bleibt.
          </p>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 2)} // Section 3 Referenz
        >
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 3)} // Section 4 Referenz
        >
          <p className="ParStandart ParLong">
            Blumen Couture bietet eine schnelle und zuverlässige Lieferung von
            Blumensträußen an, damit jeder Moment perfekt untermalt werden kann.
          </p>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 4)} // Section 5 Referenz
        >
          <h3 className="HeadingGold">
            Wir bieten eine exklusive Auswahl an luxuriösen Blumendiensten:
          </h3>
          <div className="AccordionContainer">
            <Accordion />
          </div>
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 5)} // Section 6 Referenz
        >
          <Instagram />
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 6)} // Section 7 Referenz
        >
          <Reviews />
        </section>

        <section
          className="HeadingCont"
          ref={(el) => setRef(el, 7)} // Section 8 Referenz
        >
          <Awards />
        </section>

        <BtnUp />
      </main>
    </div>
  );
};

export default About;
