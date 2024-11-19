import TabItem from "./TabItem";

const Tabs = ( {setActiveTab} ) => {
  return (
    <div>
      {
        ["Klassischer Luxus", "Boho Chic", "Romantisch Verspielt"].map((tab, index) => (
          <TabItem
            key={index}
            tab={tab}
            index={index}
            setActiveTab={setActiveTab}
          />
        ))
      }
    </div>
  )
}

export default Tabs;