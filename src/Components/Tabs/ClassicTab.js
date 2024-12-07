import TabImages from "./TabImages";

const ClassicTab = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1567877849899-d5e88b882078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww",
      alt: "Flowers 1",
    },
    {
      src: "https://images.unsplash.com/photo-1707069443191-956103595620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      alt: "Flowers 2",
    },
    {
      src: "https://images.unsplash.com/photo-1625075741123-fd8705c0c0e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZsb3dlcnMlMjBib3VxdWV0fGVufDB8fDB8fHww",
      alt: "Flowers 3",
    },
    {
      src: "https://images.unsplash.com/photo-1641904999871-bf194ccb51ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZsb3dlcnMlMjBib3VxdWV0fGVufDB8fDB8fHww",
      alt: "Flowers 4",
    },
  ];

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default ClassicTab;