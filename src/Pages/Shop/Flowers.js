import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";


function Flowers({ flowers }) {
  const [cart, setCart] = useState(
    localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (id) => {
    // Find the selected flower by ID
    const cartAdded = flowers.find((flower) => flower.id === id);
    
    // Check if the item is already in the cart
    if (!cart.some((item) => item.id === id)) {
      // Use the spread operator to add the new item to the cart
      setCart([...cart, cartAdded]);
      setClickedItems((prevClicked) => [...prevClicked, id]);
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
              <p className="ProductName">{name}</p>
              <p className="ProductPrice">$ {price}</p>
              <button className="btnHinzufügen" onClick={() => addToCart(id)}>
                {clickedItems.includes(id) ? 'Hinzugefügt' : 'In den Warenkorb'}
              </button>
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