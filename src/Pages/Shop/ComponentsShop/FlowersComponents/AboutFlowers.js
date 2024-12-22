import { useParams, useNavigate } from "react-router-dom";
import dataFlowers from "../../data/dataFlowers";
import Intro from "../../../../Components/Intro/Intro";
import Slides from "../../../../Components/Slides/Slides";


function AboutFlowers() {
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

      {dataFlowers.filter((item) => item.title === title).map((elem, index) => {
        return (
          <div className="aboutProducts" key={index}>
            <img src={elem.img} alt="product" className="AboutProductsImg" />
            <div className="aboutProductsContentCont">
              <p className="typeAboutProducts">{elem.searchTerm}</p>
              <h3 className="headingAboutProducts">{elem.name}</h3>
              <p className="parAboutProducts">{elem.title}</p>
              <p className="parAboutProducts">€ {elem.price}</p>
              <button className="btnAboutProducts" onClick={() => {navigate(-1); window.scrollTo({ top: 0})}}>
                Zurück
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AboutFlowers;