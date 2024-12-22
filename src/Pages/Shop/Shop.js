import Intro from "../../Components/Intro/Intro";
import Slides from "../../Components/Slides/Slides";
import Countdown from "../../Components/Countdown/Countdown";
import BtnUp from "../../Components/BtnUp/BtnUp";
import Flowers from "./ComponentsShop/FlowersComponents/Flowers";
import AllCategories from "./ComponentsShop/Filter/AllCategories";
import GoToCart from "./ComponentsShop/Cart/GoToCart";
import Advantages from "./ComponentsShop/Filter/Advantages";
import "./styleShop.css";
import useGsapScrollTrigger from "../../Components/useGsapScrollTrigger";

const NewShop = () => {
  const { setRef } = useGsapScrollTrigger();

  const images = [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZsb3dlcnMlMjBzaG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530062063719-e2d6fe70d7b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515181635393-2b788c0435c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyN3x8fGVufDB8fHx8fA%3D%3D",
  ];

  const blackFridayDate = "2025-02-14T00:00:00";

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
        <section ref={(el) => setRef(el, 0)}>
          <Advantages />
        </section>

        <section ref={(el) => setRef(el, 1)}>
          <Countdown targetDate={blackFridayDate} />
        </section>

        <section>
          <AllCategories />
        </section>

        <section >
          <GoToCart />
        </section>

        <section>
          <Flowers />
        </section>
      
        <BtnUp />
      </main>
    </div>
  );
};

export default NewShop;
