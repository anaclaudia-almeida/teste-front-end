
import React from "react";
import "../BannerHome/styles.scss";
import BannerHomeBF from "../../assets/png/banner-principal-home.png";

const BannerHome: React.FC = () => {
  return (
    <div className="banner-home">
      <img src={BannerHomeBF} alt="Banner Principal Black Friday" />
      <div className="text-banner">
        <h1 className="title-banner">Venha conhecer nossas promoções</h1>
        <h2 className="second-title-banner"><span>50% Off</span> nos produtos </h2>
        <button className="banner-button">Ver Produto</button>
      </div>
    </div>
  );
};

export default BannerHome;
