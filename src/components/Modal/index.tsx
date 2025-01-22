import React, { useState } from "react";
import { ProductResponse } from "../../services/api"; 
import "../Modal/sytles.scss"; 

interface ModalProps {
  product: ProductResponse; 
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); 
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); 
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-image">
          <img
            className="modal-image"
            src={product.photo}
            alt={product.productName}
          />
        </div>
        <div className="info-products">
          <h3 className="modal-title">{product.productName}</h3>
          <p className="modal-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>
          </div>
          <div className="buttons-modal">
          <div className="quantity-selector">
            <button className="quantity-button" onClick={decrement}>
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-button" onClick={increment}>
              +
            </button>
            </div>
        <button className="modal-buy">Comprar</button>
          </div>
        </div>

      </div>
  );
};

export default Modal;