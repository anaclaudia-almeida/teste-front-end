import React from "react";
import "../BannerGrid/styles.scss";
import BannerGrid01 from "../../assets/png/banner-apoio-01.png";
import BannerGrid02 from "../../assets/png/banner-apoio-01.png";

const BannerGrid: React.FC = () => {
  return (
    <div className="banner-grid">
      <div className="img-banner-grid">
        <img src={BannerGrid01} alt="Banner Apoio Parceiro 02" />
        <div className="text-banner-grid">
          <h1 className="title-banner-grid">Parceiros</h1>
          <h2 className="second-title-banner-grid">
            Lorem, ipsum dolor sit amet consectetur
          </h2>
          <button className="banner-button-grid">Confira</button>
        </div>
      </div>
      <div className="img-banner-grid">
        <img src={BannerGrid02} alt="Banner Apoio Parceiro 02" />
        <div className="text-banner-grid">
          <h1 className="title-banner-grid">Parceiros</h1>
          <h2 className="second-title-banner-grid">
            Lorem, ipsum dolor sit amet consectetur
          </h2>
          <button className="banner-button-grid">Confira</button>
        </div>
      </div>
    </div>
  );
};

export default BannerGrid;
