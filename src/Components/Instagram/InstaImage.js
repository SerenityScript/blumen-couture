import React from "react";
import "./styleInstagram.css";

const InstaImage = ({ src, alt }) => {
  return (
    <div className="InstaImgCont">
      <img src={src} alt={alt} className="InstaImg" />
    </div>
  );
};

export default InstaImage;