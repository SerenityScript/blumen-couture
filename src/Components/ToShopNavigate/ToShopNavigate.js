import arrow from "../../Assets/arrow.png";
import { Link } from "react-router-dom";
import './styleToShop.css';

const ToShopNavigate = () => {
  return (
    <div className="ToShopNavigateMainCont">

      <div className="ToShopNavigateImgCont">
        <div>
          <img src="https://images.unsplash.com/photo-1613279060119-2053dc14f8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyNXx8fGVufDB8fHx8fA%3D%3D" alt="Blumenstrauß" className="ToShopNavigateImg" />
          <img src="https://images.unsplash.com/photo-1709099158463-cae636593236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8" alt="Blumenstrauß" className="ToShopNavigateImg" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1533793241176-a270e75ef2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxOHx8fGVufDB8fHx8fA%3D%3D" alt="Blumenstrauß" className="ToShopNavigateImg" />
          <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8" alt="Blumenstrauß" className="ToShopNavigateImg" />
        </div>
      </div>
      
      <div>
        <Link to="/shop"
          className="ToShopNavigateBtn"
          aria-label="Learn more about our Shop"
        >
          <p className="HeadingGold">Zum Shop</p>
          <img className="ToShopNavigateBtnImg" src={arrow} alt="Pfeil, der zum Shop zeigt" />
        </Link>
      </div>
    </div>
  )
}

export default ToShopNavigate;