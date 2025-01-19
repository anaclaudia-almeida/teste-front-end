import React from "react";
import "../BrandsSlider/styles.scss";
import LogoMarca from "../../assets/png/logotipo-marca-01.png";

const BrandSlider: React.FC = () => {
  return (
    <div className="slider-brand">
      <div className="item-slider-brand">
        <div className="logo-slider">
          <img src={LogoMarca} alt="Logotipo Marca Econverse" />
        </div>
      </div>
      <div className="item-slider-brand">
        <div className="logo-slider">
          <img src={LogoMarca} alt="Logotipo Marca Econverse" />
        </div>
      </div>
      <div className="item-slider-brand">
        <div className="logo-slider">
          <img src={LogoMarca} alt="Logotipo Marca Econverse" />
        </div>
      </div>
      <div className="item-slider-brand">
        <div className="logo-slider">
          <img src={LogoMarca} alt="Logotipo Marca Econverse" />
        </div>
      </div>
      <div className="item-slider-brand">
        <div className="logo-slider">
          <img src={LogoMarca} alt="Logotipo Marca Econverse" />
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
