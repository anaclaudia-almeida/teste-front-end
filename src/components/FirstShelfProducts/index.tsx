import React, { useEffect, useState } from "react";
import "../FirstShelfProducts/styles.scss";
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import ArrowRigth from '../../assets/svg/arrow-right.svg';
import { getProducts, ProductResponse } from '../../services/api';
import Modal from '../Modal';

const ShelfProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null); // Estado do modal

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

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4); 
    }
  };

  const openModal = (product: ProductResponse) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shelf-products">
      <h2 className="shelf-title">Produtos relacionados</h2>
      <div className="shelf-navigation">
        <ul className="navigation-category">
          <li className="navigation-category-item">celular</li>
          <li className="navigation-category-item">acessórios</li>
          <li className="navigation-category-item">tablets</li>
          <li className="navigation-category-item">notebooks</li>
          <li className="navigation-category-item">TVs</li>
          <li className="navigation-category-item">Ver todos</li>
        </ul>
      </div>
      <div className="product-container">
        {products.length > 0 ? (
          products.slice(currentIndex, currentIndex + 4).map((product) => (
            <div key={product.productName} className="product-card" onClick={() => openModal(product)}>
              <img className="product-image" src={product.photo} alt={product.productName} />
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </p>
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

      {/* Exibe o modal apenas se um produto estiver selecionado */}
      {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ShelfProducts;
