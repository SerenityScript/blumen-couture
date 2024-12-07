import TabImages from "./TabImages";

const BohoTab = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww",
      alt: "Flowers 1",
    },
    {
      src: "https://images.unsplash.com/photo-1670529774860-c3d337f5904e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      alt: "Flowers 2",
    },
    {
      src: "https://images.unsplash.com/photo-1617709862149-296a352a24ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsb3dlcnMlMjBib3VxdWV0fGVufDB8fDB8fHww",
      alt: "Flowers 3",
    },
    {
      src: "https://images.unsplash.com/photo-1682303347191-6eba663b060c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZsb3dlcnMlMjBib3VxdWV0fGVufDB8fDB8fHww",
      alt: "Flowers 4",
    },
  ];

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default BohoTab;