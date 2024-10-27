import Awards from "./Awards";
import Intro from "./Intro";
import { Reviews } from "./Reviews/Reviews";
import Slides from "./Slides";

const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1561334251-b306baba437a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1631174956992-2801f6f8f4d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461005490174-1d69ffda0669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D"
  ]

  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Eleganz in jeder Blüte"
        par="Wo Floristik auf Couture trifft."
      />
      <div className="HeadingCont">
        API Motivation
      </div>
      <div className="HeadingCont">
        über uns
      </div>
      <div className="HeadingCont">
        Google maps
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

export default About;