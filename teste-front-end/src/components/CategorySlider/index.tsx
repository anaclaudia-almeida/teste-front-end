import React from "react";
import "../CategorySlider/styles.scss";
import Tecnologia from "../../assets/svg/icon-tecnologia.svg";
import Supermercado from "../../assets/svg/icon-supermercados.svg";
import Bebidas from "../../assets/svg/icon-whiskey.svg";
import Ferramentas from "../../assets/svg/icon-ferramentas.svg";
import Saude from "../../assets/svg/icon-cuidados-de-saude.svg";
import EsporteFitness from "../../assets/svg/icon-corrida.svg";
import Moda from "../../assets/svg/icon-moda.svg";

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
          <img src={Ferramentas} alt="Ícone Ferramentas" />
        </div>
        Ferramentas
      </div>
      <div className="item-slider">
        <div className="icon-slider">
          <img src={Saude} alt="Ícone Saúde" />
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
