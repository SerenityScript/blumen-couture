import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Modal from "./Modal";
import shoppingCart from "./AssetsShop/shoppingCart.png";


function Flowers({ flowers }) {
  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [clickedItems, setClickedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (id) => {
    const cartAdded = flowers.find((flower) => flower.id === id);
    if (!cart.some((item) => item.id === id)) {
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

  const totalItems = cart.reduce((sum, item) => sum + (item.amount || 1), 0);

  return (
    <div>
      
      <div className="FirstShoppingCartCont">
        <button onClick={openCart} className="FirstShoppingCartBtn">
          <p className="FirstShoppingCartPar">Warenkorb: {totalItems}</p>
        </button>
      </div>

      <div className="products">
        {flowers.map((item => {
          const { id, name, price, image } = item;
          return (
            <div className="product-card" key={id}>
              <Link
                to={`/about/${item.title}`}
                onClick={() => window.scrollTo({top: 0})}
              >
                <img src={image} className="ProductImg" alt="Flowers" />
              </Link>
              <div className="product-info">
                <p className="ProductName">{name}</p>
                <p className="ProductPrice">€ {price}</p>
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
          <p className="ShoppingCartNumber">{totalItems}</p>
        </button>
      </div>)}

      <Modal isOpen={isCartOpen} onClose={closeCart}>
        <Cart cart={cart} setCart={setCart} />
      </Modal>

    </div>
  )
}

export default Flowers;