import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Modal from "./Modal";


function Flowers({ flowers }) {
  const [cart, setCart] = useState(
    localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [clickedItems, setClickedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (id) => {
    const cartAdded = flowers.find((flower) => flower.id === id);
    if (!cart.some((item) => item.id === id)) {
      // Use the spread operator to add the new item to the cart
      setCart([...cart, cartAdded]);
      setClickedItems((prevClicked) => [...prevClicked, id]);
    }
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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

      <button onClick={openCart}>CART {cart.length}</button>

      {/* Modal Component */}
      <Modal isOpen={isCartOpen} onClose={closeCart}>
        <Cart cart={cart} setCart={setCart} />
      </Modal>

    </div>
  )
}

export default Flowers;