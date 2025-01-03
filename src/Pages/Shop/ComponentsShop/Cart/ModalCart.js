import React from "react";
import ReactDOM from "react-dom";
import cancel from "../../AssetsShop/cancel.png";

const ModalCart = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <img src={cancel} alt="Close" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalCart;