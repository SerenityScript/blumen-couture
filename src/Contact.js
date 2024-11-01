import React from 'react';
import Intro from "./Intro";
import Slides from "./Slides";
import ContactForm from './ContactForm';


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
      <div className='HeadingCont'>
        <ContactForm />
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
    </div>
  )
}

export default Contact;