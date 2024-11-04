import { Accordion } from "../Components/Accordion/Accordion";
import Awards from "../Components/Awards/Awards";
import Intro from "../Components/Intro/Intro";
import { Reviews } from "../Components/Reviews/Reviews";
import Slides from "../Components/Slides";
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1474822189311-11c44f2aa6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1640060902291-570e6cdb00e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8"
  ]
  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Blumen Shop & Event Dekoration"
        par="Die Kunst der floralen Eleganz."
      />
      <div className="HeadingCont">
        <h3 className="HeadingGold">Willkommen bei Blumen Couture,</h3>
        <p className="ParCursive">Ihrem exklusiven Blumenatelier für luxuriöse Eventdekorationen und handverlesene Blumenarrangements.</p>
        <p className="ParStandart">Wir verleihen Ihrem Event eine unvergessliche Atmosphäre. Ob Hochzeiten, Galas oder private Feiern – bei uns finden Sie florale Kunstwerke, die Ihre Momente zum Strahlen bringen. In unserem Shop erwartet Sie eine Auswahl an frischen, edlen Blumen, die mit Liebe und Hingabe zusammengestellt werden. Lassen Sie sich von der Schönheit der Natur inspirieren!</p>
        <div className="ImageCont">
          <img src="https://images.unsplash.com/photo-1709240387877-30fd01230e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxmbG9yaXN0fGVufDB8fDB8fHww" alt="Flowers" />
        </div>
        <p>
          <Link className="ParGold" to="/about">Mehr über Blumen Couture erfahren...</Link>.
        </p>
      </div>
      <div className="HeadingCont">
        <h3 className="HeadingGold">Wir bieten eine exklusive Auswahl an luxuriösen Blumendiensten:</h3>
        <div className="AccordionContainer">
          <Accordion />
        </div>
      </div>
      <div className="HeadingCont KontactUsContainer">
        <h2 className="MainHeading">Möchten Sie Ihren Traum wahr werden lassen? </h2>
        <p className="Par">Kontaktieren Sie uns und wir erfüllen es</p>
        <button className="KontaktUsBtn">
        <Link className="ParGold KontaktUsBtnText" to="/contact">KONTAKT</Link>
        </button>
      </div>
      <div className="HeadingCont">
        <p className="ParStandart">Folgen Sie uns auf</p>
        <h3 className="HeadingGold">INSTAGRAM</h3>
        <div className="InstaFeed">
          <div className="InstaImgCont">
            <img src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNXx8fGVufDB8fHx8fA%3D%3D" alt="Instagram" className="InstaImg" />
          </div>
          <div className="InstaImgCont">
            <img src="https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsdW1lbnN0cmF1c3N8ZW58MHx8MHx8fDA%3D" alt="Instagram" className="InstaImg" />
          </div>
          <div className="InstaImgCont">
            <img src="https://plus.unsplash.com/premium_photo-1661775142165-0c85050144fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0NXx8fGVufDB8fHx8fA%3D%3D" alt="Instagram" className="InstaImg" />
          </div>
        </div>
        <div className="InstaFeed">
          <div className="InstaImgCont">
            <img src="https://images.unsplash.com/photo-1503652601-557d07733ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="Instagram" className="InstaImg" />
          </div>
          <div className="InstaImgCont">
            <img src="https://images.unsplash.com/photo-1525441638700-20f9d4270dc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="Instagram" className="InstaImg" />
          </div>
          <div className="InstaImgCont">
            <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="Instagram" className="InstaImg" />
          </div>
        </div>
        <p className="ParGold">@blumen_couture</p>
      </div>
      <div className="HeadingCont">
        <Reviews />
      </div>
      <div className="HeadingCont">
        <Awards />
      </div>
    
      
    </div>
  )
}

export default Home;