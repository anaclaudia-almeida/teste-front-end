import React from "react";
import "../CategorySlider/styles.scss";
import Tecnologia from "../../assets/png/icon-tecnologia.png";
import Supermercado from "../../assets/png/icon-supermercados.png";
import Bebidas from "../../assets/png/icon-whiskey.png";
import Ferramentas from "../../assets/png/icon-ferramentas.png";
import Saude from "../../assets/png/icon-cuidados-de-saude.png";
import EsporteFitness from "../../assets/png/icon-corrida.png";
import Moda from "../../assets/png/icon-moda.png";

const CategorySlider: React.FC = () => {
  return (
    <div className="category-slider">
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Tecnologia} alt="Ícone Tecnologia" />
        </div>
        Tecnologia
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Supermercado} alt="Ícone Supermercado" />
        </div>
        Supermercado
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Bebidas} alt="Ícone Bebidas" />
        </div>
        Bebidas
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Ferramentas} alt="" />
        </div>
        Ferramentas
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Saude} alt="" />
        </div>
        Saúde
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={EsporteFitness} alt="Ícone Esportes e Fitness" />
        </div>
        Esportes e Fitness
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Moda} alt="Ícone Moda" />
        </div>
        Moda
      </div>
    </div>
  );
};

export default CategorySlider;
