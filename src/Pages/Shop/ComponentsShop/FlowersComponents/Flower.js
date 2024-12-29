import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../../../redux/cartSlice";
import { useState } from "react";

const Flower = ({ flower }) => {
  const dispatch = useDispatch();
  
  // Lokale State-Variable für die Menge
  const [quantity, setQuantity] = useState(1);
  const [clickedItems, setClickedItems] = useState([]);

  const handleAddToCart = () => {
    // Artikel zum Warenkorb hinzufügen
    dispatch(addItemToCart({ flower, quantity }));

    // clickedItems aktualisieren, um den hinzugefügten Artikel zu markieren
    setClickedItems((prevItems) => [...prevItems, flower.id]);
  };

  return (
    <div className="product-card">
      <Link
        to={`/about/${flower.title}`}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img src={flower.img} className="ProductImg" alt={flower.name} />
      </Link>

      <div className="product-info">
        <p className="ProductName">{flower.name}</p>
        <p className="ProductPrice">€ {flower.price.toFixed(2)}</p>

        {/* ChangeQuantity mit setQuantity */}
        <ChangeQuantity
          cartItemId={flower.id}  // Annahme: flower.id wird als cartItemId verwendet
          quantity={quantity}
          setQuantity={setQuantity}  // Lokale Funktion zur Änderung der Menge
        />
        
        {/* Hinzufügen-Button */}
        <button
          onClick={handleAddToCart}
          className="btnHinzufügen"
        >
          {clickedItems.includes(flower.id) ? 'Hinzugefügt' : 'In den Warenkorb'}
        </button>

      </div>
    </div>
  );
};

export default Flower;
