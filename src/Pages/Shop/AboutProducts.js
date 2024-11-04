import { useParams, useNavigate } from "react-router-dom";
import { shopList } from "./shopList";
import Intro from "../../Components/Intro/Intro";
import Slides from "../../Components/Slides";

function AboutProducts() {
  const navigate = useNavigate();
  const { title } = useParams();

  const images = [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZsb3dlcnMlMjBzaG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530062063719-e2d6fe70d7b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515181635393-2b788c0435c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyN3x8fGVufDB8fHx8fA%3D%3D"
  ]

  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Finden Sie den perfekten Blumenstrauß"
        par="Wo Blumen zu Kunstwerken werden."
      />

      {shopList.filter((item) => item.title === title).map((elem, index) => {
        return (
          <div className="aboutProducts" key={index}>
            <h3>{elem.name}</h3>
            <h3>{elem.title}</h3>
            <img src={elem.image} alt="product" className="AboutProductsImg" />
            <button className="btn" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default AboutProducts;