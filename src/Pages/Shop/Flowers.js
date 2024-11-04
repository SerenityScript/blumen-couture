import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";


function Flowers({ flowers }) {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    // Find the selected flower by ID
    const cartAdded = flowers.find((flower) => flower.id === id);
    
    // Check if the item is already in the cart
    if (!cart.some((item) => item.id === id)) {
      // Use the spread operator to add the new item to the cart
      setCart([...cart, cartAdded]);
    }
  };


  return (
    <div>
    <div className="products">
      {flowers.map((item => {
        const { id, name, price, image } = item;
        return (
          <div className="product-card" key={id}>
            <Link to={`/about/${item.title}`}>
              <img src={image} className="ProductImg" alt="Flowers" />
            </Link>
            <div className="product-info">
              <h3>{name}</h3>
              <h4>$ {price}</h4>
              <button className="btn" onClick={() => addToCart(id)}>Add to cart</button>
            </div>
          </div>
        )
      }))}
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default Flowers;