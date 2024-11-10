import { shopList } from "./shopList";

function Buttons({ filteredFlowers, setFlowers }) {
  
  return (
    <div className="cont">
      <button className="change" onClick={() => setFlowers(shopList)}>All</button>
      <button className="change" onClick={() => filteredFlowers("blumenstrauß")}>Blumensträuße</button>
      <button className="change" onClick={() => filteredFlowers("vase")}>Vasen</button>
      <button className="change" onClick={() => filteredFlowers("kerze")}>Kerzen</button>
      <button className="change" onClick={() => filteredFlowers("zimmerPflanze")}>Zimmerpflanzen</button>
      <button className="change" onClick={() => filteredFlowers("geschenk")}>Geschenke</button>
    </div>
  )
}

export default Buttons;