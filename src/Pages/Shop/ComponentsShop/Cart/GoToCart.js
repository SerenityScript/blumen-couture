import { useState } from "react";
import Cart from "./Cart";
import ModalCart from "./ModalCart";
import CartButton from "./CartButton";
import { useSelector } from "react-redux";
import { getTotalAmount } from "../../../../redux/cartSlice";

const GoToCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalAmount = useSelector(getTotalAmount);

  const openCart = () => {
    setIsCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="FirstShoppingCartCont">
        <button onClick={openCart} className="FirstShoppingCartBtn">
          <p className="FirstShoppingCartPar">Warenkorb: {totalAmount} </p>
        </button>
      </div>
      
      <ModalCart isOpen={isCartOpen} onClose={closeCart}>
        <Cart />
      </ModalCart>

      <CartButton setIsCartOpen={setIsCartOpen} />
    </div>
  )
}

export default GoToCart