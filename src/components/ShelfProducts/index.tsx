import React, { useEffect, useState } from "react";
import "../ShelfProducts/styles.scss";
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import ArrowRigth from '../../assets/svg/arrow-right.svg';
import { getProducts, ProductResponse } from '../../services/api';

const ShelfProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const handleNext = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4); 
    }
  };

  return (
    <div className="shelf-products">
      <h2 className="shelf-title">Produtos relacionados</h2>
      <div className="product-container">
        {products.length > 0 ? (
          products.slice(currentIndex, currentIndex + 4).map((product) => (
            <div key={product.productName} className="product-card">
              <img className="product-image" src={product.photo} alt={product.productName} />
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">{formatPrice(product.price)}</p>
              <span className="free-shipping-text">Frete Grátis</span>
              <button className="button-buy">Comprar</button>
            </div>
          ))
        ) : (
          <p>Não foi possível exibir os produtos</p>
        )}
      </div>
      <div className="navigation-arrows">
        <button className="prev-arrow" onClick={handlePrev}><img src={ArrowLeft} alt="Seta Esquerda"/></button>
        <button className="next-arrow" onClick={handleNext}><img src={ArrowRigth} alt="Seta Direita" /></button>
      </div>
    </div>
  );
};

export default ShelfProducts;
