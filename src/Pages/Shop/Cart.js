import Amount from "./Amount";
import garbage from "./garbage.png";

const Cart = ({ cart, setCart }) => {

  const removeItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const updateAmount = (id, newAmount) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, amount: newAmount } : item
    );
    setCart(updatedCart);
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.amount || 1), 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.amount || 1)), 0);

  return (
    <div>
      <div>
        <h2 className="CartHeading">{totalItems} Artikel</h2>
        <p className="CartTotalPrice">Gesamtpreis: $ {totalPrice.toFixed(2)}</p>
      </div>
      <hr className="hrLine" />
      <div>
        {cart.map(item => {
          const { id, name, price, image, amount = 1 } = item; // Default amount set here
          return (
            <div className="CartItem" key={id}>
              <img src={image} className="CartProductImg" alt="Flowers" />
              <div className="CartItem-info">
                <p className="ProductName">{name}</p>
                <p className="ProductPrice">$ {price}</p>
                <Amount 
                  amount={amount} 
                  setAmount={(newAmount) => updateAmount(id, newAmount)} 
                />
                <button onClick={() => removeItem(id)}>
                  <img className="TraschIcon" src={garbage} alt="Trash" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;