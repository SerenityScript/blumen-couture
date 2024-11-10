import Intro from "../../Components/Intro/Intro";
import Slides from "../../Components/Slides";
import { useState } from 'react';
import { shopList } from './shopList';
import Flowers from './Flowers';
import Buttons from './Buttons';
import './styleShop.css';
import leaf from "./AssetsShop/leaf.png";
import gift from "./AssetsShop/gift.png";
import shuttle from "./AssetsShop/shuttle.png";
import certificate from "./AssetsShop/certificate.png";


const Shop = () => {
  const images = [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZsb3dlcnMlMjBzaG9wfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530062063719-e2d6fe70d7b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515181635393-2b788c0435c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyN3x8fGVufDB8fHx8fA%3D%3D"
  ]

  const [flowers, setFlowers] = useState(shopList);

  const chosenFlowers = (searchTerm) => {
    const newFlowers = shopList.filter(element => element.searchTerm === searchTerm);
    setFlowers(newFlowers);
  }

  

  return (
    <div className="ShopMainContainer">
      <Slides images={images}/>
      <Intro
        heading="Blumen Couture"
        mainHeading="Finden Sie den perfekten Blumenstrauß"
        par="Wo Blumen zu Kunstwerken werden."
      />

      <div>
        <div className='cont'>
          <div className="IconsMainCont">
            <div className="IconCont">
              <img src={leaf} className="IconShop" alt="Leaf" />
              <p>Umweltfreundlich</p>
            </div>
            <div className="IconCont">
              <img src={gift} className="IconShop" alt="Gift" />
              <p>Eco Verpackung</p>
            </div>
            <div className="IconCont">
              <img src={shuttle} className="IconShop" alt="Rocket" />
              <p>Schnelle Lieferung</p>
            </div>
            <div className="IconCont">
              <img src={certificate} className="IconShop" alt="Certificate" />
              <p>Zertifizierte Produkte</p>
            </div>
          </div>
        </div>
        <Buttons filteredFlowers={chosenFlowers} setFlowers={setFlowers}  />
        <Flowers flowers={flowers} />
      </div>
    </div>
  )
}

export default Shop;
