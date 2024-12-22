import { useEffect, useState } from "react";
import shoppingCart from "../../AssetsShop/shoppingCart.png";
import { useSelector } from "react-redux";
import { getTotalAmount } from "../../redux/cartSlice";


const CartButton = ({setIsCartOpen}) => {
  const [isVisible, setIsVisible] = useState(false);
  const totalAmount = useSelector(getTotalAmount);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  const openCart = () => {
    setIsCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      {isVisible && ( <div className={`ShoppingCartCont ${isVisible ? "visible" : ""}`}>
        <button onClick={openCart} className="ShoppingCartBtn">
          <img src={shoppingCart} className="ShoppingCartImg"  alt="Shopping Cart" />
          <p className="ShoppingCartNumber">{totalAmount}</p>
        </button>
      </div>)}
    </div>
  )
}

export default CartButton;