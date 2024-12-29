import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../../redux/cartSlice";

const ChangeQuantity = ({ cartItemId, quantity, setQuantity }) => {
  const dispatch = useDispatch();

  const addQuantity = () => {
    if (setQuantity) {
      setQuantity(quantity + 1); // Lokale Verwaltung der Menge
    } else {
      dispatch(updateQuantity({ cartItemId, quantity: quantity + 1 }));
    }
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      if (setQuantity) {
        setQuantity(quantity - 1); // Lokale Verwaltung der Menge
      } else {
        dispatch(updateQuantity({ cartItemId, quantity: quantity - 1 }));
      }
    }
  };

  return (
    <div className="AmountCont">
      <button onClick={removeQuantity} className="AmountBtn">-</button>
      <p className="AmountNumber">{quantity}</p>
      <button onClick={addQuantity} className="AmountBtn">+</button>
    </div>
  );
};

export default ChangeQuantity;
