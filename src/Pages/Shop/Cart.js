import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {

  const removeItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
  
  return (
    <div>
      <hr className="hrLine"/>
      <div>
        <h2 className="CartHeading">Cart: {cart.length} Artikel</h2>
      </div>
      
      <div>
      {cart.map((item => {
        const { id, name, price, image } = item;
        return (
          <div className="CartItem" key={id}>
            <Link to={`/about/${item.title}`}>
              <img src={image} className="ProductImg" alt="Flowers" />
            </Link>
            <div className="CartItem-info">
              <h3>{name}</h3>
              <h4>$ {price}</h4>
              <button on onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        )
      }))}
      </div>

    </div>
  )
}

export default Cart;