import paypal from "../../AssetsShop/paypal.png";
import visa from "../../AssetsShop/visa.png";
import googlepay from "../../AssetsShop/google-pay.png";
import applepay from "../../AssetsShop/apple-pay.png";
import master from "../../AssetsShop/mastercard.png";

const PaymentIcons = () => {
  return (
    <div>
      <div className="PayIconsCont">
          <img className="PayIcon" src={paypal} alt="Paypal" />
          <img className="PayIcon" src={visa} alt="Visa" />
          <img className="PayIcon" src={googlepay} alt="Google Pay" />
          <img className="PayIcon" src={applepay} alt="Apple Pay" />
          <img className="PayIcon" src={master} alt="Mastercard" />
      </div>
      
      <hr className="hrLine" />
    </div>
  )
}

export default PaymentIcons;