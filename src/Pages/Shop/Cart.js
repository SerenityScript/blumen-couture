const Cart = ({ cart, setCart }) => {

  const removeItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }
  
  return (
    <div>
      <div>
        <h2 className="CartHeading">{cart.length} Artikel</h2>
      </div>
      <hr className="hrLine"/>
      <div>
      {cart.map((item => {
        const { id, name, price, image } = item;
        return (
          <div className="CartItem" key={id}>
            <img src={image} className="CartProductImg" alt="Flowers" />
            <div className="CartItem-info">
              <p className="ProductName">{name}</p>
              <p className="ProductName">$ {price}</p>
              <button on onClick={() => removeItem(id)}>X</button>
            </div>
          </div>
        )
      }))}
      </div>

    </div>
  )
}

export default Cart;