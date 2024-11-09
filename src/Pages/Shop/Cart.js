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
            <img src={image} className="ProductImg" alt="Flowers" />
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