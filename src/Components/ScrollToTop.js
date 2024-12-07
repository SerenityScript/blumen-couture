import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Überwacht den aktuellen Pfad

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll nach oben bei jedem Pfadwechsel
  }, [pathname]); // Triggert, wenn sich der Pfad ändert

  return null; // Gibt nichts aus, da es nur eine logische Funktion ist
};

export default ScrollToTop;