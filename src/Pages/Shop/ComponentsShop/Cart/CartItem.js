import { useDispatch } from "react-redux";
import { dataFlowers } from "../../../../data/data";
import { removeItemFromCart } from "../../../../redux/cartSlice";
import garbage from "../../AssetsShop/garbage.png"; 
import ChangeQuantity from "./ChangeQuantity";

const CartItem = ({ cartItem }) => {
  const flowers = dataFlowers.find(item => item.id === cartItem.flowerId);
  const dispatch = useDispatch();

  return (
    <div className="CartItem">
      <img src={flowers.img} className="CartProductImg" alt={flowers.name} />
      <div className="CartItem-info">
        <p className="ProductName">{flowers.name}</p>
        <p className="ProductPrice">€ {(flowers.price * cartItem.quantity).toFixed(2)}</p>
        <ChangeQuantity cartItemId={cartItem.id} quantity={cartItem.quantity} />
        
        <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
          <img className="TraschIcon" src={garbage} alt="Trash" />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
