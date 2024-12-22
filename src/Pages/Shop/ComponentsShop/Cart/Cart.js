import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PaymentIcons from "./PaymentIcons";
import { getCartItems, getTotalAmount, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalAmount = useSelector(getTotalAmount);
  return (
    <div>
      
      <h2 className="CartHeading">{totalAmount} Artikel</h2>
      <p className="CartTotalPrice">Gesamtpreis: € {totalPrice.toFixed(2)} </p>
      <button className="btnAboutProducts">Zur Kasse</button>
      <PaymentIcons />
      {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
    </div>
  )
}

export default Cart;