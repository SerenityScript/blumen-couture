import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className="cont">
      {['Blumensträuße', 'Vasen', 'Kerzen', 'Geschenke', 'Zimmerpflanzen', 'Alles']
        .map((category, index) => <Filter category={category} key={index} />
      )}
    </div>
  )
}

export default AllCategories;