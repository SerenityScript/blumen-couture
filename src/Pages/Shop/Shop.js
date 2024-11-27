import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "../../Components/Intro/Intro";
import Slides from "../../Components/Slides/Slides";
import Countdown from "../../Components/Countdown/Countdown";
import BtnUp from "../../Components/BtnUp/BtnUp";
import { shopList } from "./shopList";
import Flowers from "./Flowers";
import Buttons from "./Buttons";
import "./styleShop.css";
import leaf from "./AssetsShop/leaf.png";
import gift from "./AssetsShop/gift.png";
import shuttle from "./AssetsShop/shuttle.png";
import certificate from "./AssetsShop/certificate.png";

gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const images = [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZsb3dlcnMlMjBzaG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530062063719-e2d6fe70d7b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515181635393-2b788c0435c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyN3x8fGVufDB8fHx8fA%3D%3D",
  ];

  const [flowers, setFlowers] = useState(shopList);
  const sectionsRef = useRef([]); // Referenzen für alle sections
  const blackFridayDate = "2025-02-14T00:00:00";

  const chosenFlowers = (searchTerm) => {
    const newFlowers = shopList.filter(
      (element) => element.searchTerm === searchTerm
    );
    setFlowers(newFlowers);
  };

  useEffect(() => {
    // Animationslogik mit GSAP
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
              start: "top 80%", // Startpunkt der Animation
              end: "top 20%", // Endpunkt der Animation
              scrub: true, // Flüssiges Vor- und Rückscrollen
              toggleActions: "play reverse play reverse", // Animation vor- und rückwärts
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="ShopMainContainer">
      <header>
        <Slides images={images} />

        <Intro
          heading="Blumen Couture"
          mainHeading="Finden Sie den perfekten Blumenstrauß"
          par="Wo Blumen zu Kunstwerken werden."
        />
      </header>

      <main>
        {/* Section 1 */}
        <section
          className="cont"
          ref={(el) => (sectionsRef.current[0] = el)} // Referenz hinzufügen
        >
          <div className="IconsMainCont">
            <div className="IconCont">
              <img src={leaf} className="IconShop" alt="Leaf" />
              <p className="ParStandart PhoneSize">Umwelt freundlich</p>
            </div>
            <div className="IconCont">
              <img src={gift} className="IconShop" alt="Gift" />
              <p className="ParStandart PhoneSize">Eco Verpackung</p>
            </div>
            <div className="IconCont">
              <img src={shuttle} className="IconShop" alt="Rocket" />
              <p className="ParStandart PhoneSize">Schnelle Lieferung</p>
            </div>
            <div className="IconCont">
              <img src={certificate} className="IconShop" alt="Certificate" />
              <p className="ParStandart PhoneSize">Zertifizierte Produkte</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section ref={(el) => (sectionsRef.current[1] = el)}>
          <Countdown targetDate={blackFridayDate} />
        </section>

        <section >
          <Buttons filteredFlowers={chosenFlowers} setFlowers={setFlowers} />
        </section>

        <section>
          <Flowers flowers={flowers} />
        </section>
        
          <BtnUp />
      </main>
    </div>
  );
};

export default Shop;
