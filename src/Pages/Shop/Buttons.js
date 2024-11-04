import { shopList } from "./shopList";

function Buttons({ filteredFlowers, setFlowers }) {
  
  return (
    <div className="cont">
      <button className="change" onClick={() => setFlowers(shopList)}>All</button>
      <button className="change" onClick={() => filteredFlowers("dress")}>Blumensträuße</button>
      <button className="change" onClick={() => filteredFlowers("skirt")}>Vasen</button>
      <button className="change" onClick={() => filteredFlowers("pants")}>Kerzen</button>
      <button className="change" onClick={() => filteredFlowers("shoes")}>Zimmer Pflanzen</button>
      <button className="change" onClick={() => filteredFlowers("shirt")}>Geschenke</button>
    </div>
  )
}

export default Buttons;