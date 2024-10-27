import Intro from "./Intro";
import Slides from "./Slides";


const Shop = ({ heading, mainHeading, par }) => {
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
    </div>
  )
}

export default Shop;