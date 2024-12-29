import Flower from "./Flower";
import { dataFlowers } from '../../../../data/data';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../../redux/flowersSlice";

const Flowers = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div className="products">
      {dataFlowers
        .filter(flower => {
          if (selectedCategory === 'Alles') return true;
          return selectedCategory === flower.category;
        })
        .map(flower => <Flower flower={flower} key={flower.id} />)}
    </div>
  )
}

export default Flowers;