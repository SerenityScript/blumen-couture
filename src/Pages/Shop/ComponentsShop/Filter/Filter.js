import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/flowersSlice";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div>
      <button
        onClick={() => { dispatch(filterCategory(category)) }}
        className={selectedCategory === category ? "categoryButtonSelected categoryButton" : "categoryButton"}
      >{category} </button>
    </div>
  )
}

export default Filter;