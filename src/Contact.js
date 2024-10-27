import Intro from "./Intro";
import Slides from "./Slides";

const Contact = () => {
  const images = [
    "https://images.unsplash.com/photo-1530061897099-7c82bf45f404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1648628333563-28b9e7c7c890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1496290650525-29188efb34e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8"
  ]

  return (
    <div>
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Blumen Shop & Event Dekoration"
        par="Die Kunst der floralen Eleganz."
      />
      <div>
        Formspree
      </div>
    </div>
  )
}

export default Contact;