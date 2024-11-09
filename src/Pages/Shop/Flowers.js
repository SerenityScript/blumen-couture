import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Modal from "./Modal";
import shoppingCart from "./shoppingCart.png";


function Flowers({ flowers }) {
  const [cart, setCart] = useState(
    localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [clickedItems, setClickedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Zeige den Button, wenn mehr als 200px gescrollt wurde
    } else {
      setIsVisible(false); // Verstecke den Button, wenn weniger als 200px gescrollt wurde
    }
  };

  useEffect(() => {
    // Füge den Scroll-Event-Listener hinzu, wenn die Komponente gemountet wird
    window.addEventListener("scroll", handleScroll);

    // Entferne den Event-Listener, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "auto";
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

      {isVisible && ( <div className={`ShoppingCartCont ${isVisible ? "visible" : ""}`}>
        <button onClick={openCart} className="ShoppingCartBtn">
          <img src={shoppingCart} className="ShoppingCartImg"  alt="Shopping Cart" />
          <p className="ShoppingCartNumber">{cart.length}</p>
        </button>
      </div>)}

      <Modal isOpen={isCartOpen} onClose={closeCart}>
        <Cart cart={cart} setCart={setCart} />
      </Modal>

    </div>
  )
}

export default Flowers;