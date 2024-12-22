import leaf from "../../AssetsShop/leaf.png";
import gift from "../../AssetsShop/gift.png";
import shuttle from "../../AssetsShop/shuttle.png";
import certificate from "../../AssetsShop/certificate.png";

const Advantages = () => {
  const advantages = [
    { src: leaf, alt: "Leaf", text: "Umwelt freundlich" },
    { src: gift, alt: "Gift", text: "Eco Verpackung" },
    { src: shuttle, alt: "Rocket", text: "Schnelle Lieferung" },
    { src: certificate, alt: "Certificate", text: "Zertifizierte Produkte" },
  ];

  return (
    <div>
      <div className="IconsMainCont">
        {advantages.map((advantage, index) => (
          <div key={index} className="IconCont">
            <img src={advantage.src} className="IconShop" alt={advantage.alt} />
            <p className="ParStandart PhoneSize">{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;