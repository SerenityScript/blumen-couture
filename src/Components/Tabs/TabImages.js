const TabImages = ({ images }) => {
  return (
    <div className="TabsCont">
      {images.map((image, index) => (
        <div className="TabImgCont" key={index}>
          <img className="TabImg" src={image.src} alt={image.alt || "Tab Image"} />
        </div>
      ))}
    </div>
  );
};

export default TabImages;