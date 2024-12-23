import TabImages from "./TabImages";

const RomanticTab = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1495705554858-ca4a9a34ad6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym91cXVldCUyMHdlZGRpbmclMjBibHVlfGVufDB8fDB8fHww",
      alt: "Flowers 1",
    },
    {
      src: "https://images.unsplash.com/photo-1558663876-3a629e2ff015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fHww",
      alt: "Flowers 2",
    },
    {
      src: "https://images.unsplash.com/photo-1719223852076-6981754ebf76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
      alt: "Flowers 3",
    },
    {
      src: "https://images.unsplash.com/photo-1471696035578-3d8c78d99684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9ydGVuc2llfGVufDB8fDB8fHww",
      alt: "Flowers 4",
    },
  ];

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default RomanticTab;