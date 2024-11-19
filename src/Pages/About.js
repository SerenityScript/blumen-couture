import { useEffect, useState } from 'react';
import Awards from "../Components/Awards/Awards";
import Intro from "../Components/Intro/Intro";
import { Reviews } from "../Components/Reviews/Reviews";
import Slides from "../Components/Slides/Slides";
import video from "./flowers.mp4";
import random from "./dice.png";
import { Accordion } from '../Components/Accordion/Accordion';
import Instagram from '../Components/Instagram/Instagram';
import BtnUp from '../Components/BtnUp/BtnUp';

const About = () => {

  const images = [
    "https://images.unsplash.com/photo-1561334251-b306baba437a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1631174956992-2801f6f8f4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461005490174-1d69ffda0669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D"
  ]

  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    fetchQuotes();
  }, [])

  const fetchQuotes = async () => {
    const response = await fetch(`https://quotes-api-self.vercel.app/quote`);
    const data = await response.json();
    setQuotes(data)
  }

  return (
    <div>
      <Slides images={images} />
      
      <Intro
        heading="Blumen Couture"
        mainHeading="Eleganz in jeder Blüte"
        par="Wo Floristik auf Couture trifft."
      />

      <div className="HomeMainCont">

        <div className="HeadingCont">
          <h3 className='HeadingGold'>Über uns</h3>
          <p className='ParCursive'>"{quotes.quote}"</p>
          <p className='ParStandart'> {quotes.author} </p>
          <button className='btnQuotes' onClick={fetchQuotes}>
            <img src={random} className='random' alt='Random Quote' />
          </button>
        </div>

        <div className="HeadingCont">
          <img src="https://images.unsplash.com/photo-1687831958087-30a2130c968f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcwfHx8ZW58MHx8fHx8" className="EventImg" alt="Event" />
          <p className='ParStandart ParLong'>Blumen Couture befindet sich im Herzen Hamburgs und ist mehr als nur ein Blumengeschäft – es ist ein Atelier für exklusive Eventdekoration und florales Design. Die Mission von Blumen Couture ist es, jedem Event eine unverwechselbare Eleganz und eine luxuriöse Atmosphäre zu verleihen, die noch lange im Gedächtnis bleibt. Durch eine perfekte Symbiose aus Kreativität und Handwerkskunst entstehen außergewöhnliche Arrangements, die Geschichten erzählen und Emotionen wecken.</p>
          <p className='ParStandart ParLong'>In der Arbeitsweise steht die enge Zusammenarbeit mit Kunden im Vordergrund. Vom ersten Beratungsgespräch bis zur Umsetzung wird jeder Schritt mit Liebe zum Detail geplant, um die individuellen Vorstellungen in ein einzigartiges Konzept zu übersetzen. Jedes Arrangement und jede Dekoration sind dabei maßgeschneidert und sorgfältig auf das Ambiente und Thema des Events abgestimmt. Nachhaltigkeit und hochwertige Materialien sind ebenso Teil der Philosophie von Blumen Couture, wodurch jeder Auftrag zu einem harmonischen Gesamterlebnis wird.</p>
        </div>

        <div className="HeadingCont">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="HeadingCont">
          <p className='ParStandart ParLong'>Blumen Couture bietet eine schnelle und zuverlässige Lieferung von Blumensträußen an, damit jeder Moment perfekt untermalt werden kann. Ob für spontane Überraschungen, last-minute Geschenke oder kurzfristige Events – mit unserem Express-Service sorgen wir dafür, dass jede Bestellung frisch und pünktlich ankommt. Jedes Arrangement wird unmittelbar vor der Auslieferung handgefertigt und sicher verpackt, um höchste Frische und Qualität zu garantieren. So können Sie sich darauf verlassen, dass jeder Strauß genau im richtigen Moment seine Wirkung entfaltet und Ihre Botschaft stilvoll übermittelt.</p>
        </div>

        <div className="HeadingCont">
          <h3 className="HeadingGold">Wir bieten eine exklusive Auswahl an luxuriösen Blumendiensten:</h3>
          <div className="AccordionContainer">
            <Accordion />
          </div>
        </div>

        <Instagram />

        <div className="HeadingCont">
          <Reviews />
        </div>
      
        <div className="HeadingCont">
          <Awards />
        </div>

        <BtnUp />
        
      </div>
    </div>
  )
}

export default About;