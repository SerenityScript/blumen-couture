import Intro from "./Intro";
import Slides from "./Slides";

const EventDecoration = ({ heading, mainHeading, par }) => {
  const images = [
    "https://images.unsplash.com/photo-1589243853654-393fcf7c870b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500310135558-c4c498fdc927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Nnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524777313293-86d2ab467344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdXF1ZXQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
  ]

  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Spezielle Location oder zu Hause"
        par="Exklusive Designs für unvergessliche Anlässe."
      />
    </div>
  )
}

export default EventDecoration;