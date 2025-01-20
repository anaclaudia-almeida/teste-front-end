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
      <img className="logo" src={Logo} alt="Logotipo Econverse" />
      <div className="search">
        <input className="placeholder-search" type="text" placeholder="O que você está buscando?" />
        <img className="lens" src={Lupa} alt="Ícone Lupa" />
      </div>
      <div className="icons-header">
        <img src={Pedidos} alt="Ícone Pedidos" />
        <img src={Favoritos} alt="Ícone Favoritos" />
        <img src={MinhaConta} alt="Ícone Minha Conta" />
        <img src={Carrinho} alt="Ícone Carrinho" />
      </div>
    </div>  
  );
};

export default Header;
