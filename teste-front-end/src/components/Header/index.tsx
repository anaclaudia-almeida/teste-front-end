import React from "react";
import "../Header/styles.scss";
import Logo from "../../assets/png/logotipo-econverse.png";
import Lupa from "../../assets/svg/icon-lupa-busca.svg";
import Pedidos from "../../assets/svg/icon-pedidos.svg";
import Favoritos from "../../assets/svg/icon-favoritos.svg";
import MinhaConta from "../../assets/svg/icon-usuario.svg";
import Carrinho from "../../assets/svg/icon-carrinho-de-compras.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <div className="search">
        <input className="placeholder-search" type="text" placeholder="O que você está buscando?" />
        <img className="lens" src={Lupa} alt="" />
      </div>
      <div className="icons-header">
        <img src={Pedidos} alt="" />
        <img src={Favoritos} alt="" />
        <img src={MinhaConta} alt="" />
        <img src={Carrinho} alt="" />
      </div>
    </div>  
  );
};

export default Header;
