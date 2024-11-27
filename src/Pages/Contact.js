import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../Components/Intro/Intro";
import Slides from "../Components/Slides/Slides";
import ContactForm from "../Components/ContactForm/ContactForm";
import Instagram from "../Components/Instagram/Instagram";
import BtnUp from "../Components/BtnUp/BtnUp";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const images = [
    "https://images.unsplash.com/photo-1530061897099-7c82bf45f404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1648628333563-28b9e7c7c890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1496290650525-29188efb34e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  ];

  const sectionsRef = useRef([]); // Referenzen für Sections

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
          mainHeading="Blumen Shop & Event Dekoration"
          par="Die Kunst der floralen Eleganz."
        />
      </header>

      <main className="HomeMainCont">
        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[0] = el)} // Section 1 Referenz
        >
          <ContactForm />
        </section>

        <section
          className="HeadingCont"
          ref={(el) => (sectionsRef.current[1] = el)} // Section 2 Referenz
        >
          <Instagram />
        </section>

        <BtnUp />
      </main>
    </div>
  );
};

export default Contact;
