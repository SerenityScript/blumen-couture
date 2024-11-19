import Awards from "../Components/Awards/Awards";
import BtnUp from "../Components/BtnUp/BtnUp";
import Countdown from "../Components/Countdown/Countdown";
import Instagram from "../Components/Instagram/Instagram";
import Intro from "../Components/Intro/Intro";
import { Reviews } from "../Components/Reviews/Reviews";
import Slides from "../Components/Slides/Slides";
import ToEventsNavigate from "../Components/ToEventsNavigate/ToEventsNavigate";
import ToShopNavigate from "../Components/ToShopNavigate/ToShopNavigate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1625076019815-b1a5f7e5ef1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1474822189311-11c44f2aa6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1640060902291-570e6cdb00e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8"
  ]

  const navigate = useNavigate();

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

        <section className="HeadingCont">
          <h3 className="HeadingGold">Willkommen bei Blumen Couture,</h3>
          <p className="ParCursive">Ihrem exklusiven Blumenatelier für luxuriöse Eventdekorationen und handverlesene Blumenarrangements.</p>

          <div className="ImageCont">
            <img src="https://images.unsplash.com/photo-1561334251-b306baba437a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="Flowers" />
          </div>
          <div >
            <p className="ParStandart ParLong">Wir verleihen Ihrem Event eine unvergessliche Atmosphäre. Ob Hochzeiten, Galas oder private Feiern – bei uns finden Sie florale Kunstwerke, die Ihre Momente zum Strahlen bringen. In unserem Shop erwartet Sie eine Auswahl an frischen, edlen Blumen, die mit Liebe und Hingabe zusammengestellt werden. Lassen Sie sich von der Schönheit der Natur inspirieren!</p>
          </div>
          <button
            className="ToPageNavigateBtn"
            onClick={() => {
              navigate("/about");
              window.scrollTo({ top: 0});
            }}
            aria-label="Learn more about Blumen Couture"
          >
            Mehr über Blumen Couture erfahren...
          </button>
        </section>

        <section className="HeadingCont">
          <Countdown targetDate={blackFridayDate} />
        </section>

        <section className="HeadingCont">
          <ToShopNavigate/>
        </section>

        <section className="HeadingCont">
          <ToEventsNavigate />
        </section>

        <section className="HeadingCont">
          <div className="KontactUsContainer">
            <h2 className="MainHeading">Möchten Sie Ihren Traum wahr werden lassen? </h2>
            <p className="Par">Kontaktieren Sie uns und wir erfüllen es</p>
            <button
              className="KontaktUsBtn"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0});
              }}
              aria-label="Learn more about how to contact us"
            >
              KONTAKT
            </button>
          </div>
        </section>

        <Instagram />

        <section className="HeadingCont">
          <Reviews />
        </section>

        <section className="HeadingCont">
          <Awards />
        </section>

        <BtnUp />

      </main>
    </div>
  )
}

export default Home;