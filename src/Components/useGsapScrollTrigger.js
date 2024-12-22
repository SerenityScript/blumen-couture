import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollTrigger = () => {
  const sectionsRef = useRef([]);

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

  // Funktion zur Zuordnung von Refs
  const setRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return { setRef };
};

export default useGsapScrollTrigger;