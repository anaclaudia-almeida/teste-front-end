import React from "react";
import "../TopBar/styles.scss";
import IconCheck from '../../assets/svg/icon-check.svg'
import IconShipping from '../../assets/svg/icon-frete-gratis.svg'
import IconCreditCard from '../../assets/svg/icon-cartao-de-credito.svg'

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="benefit">
        <img src={IconCheck} alt="icone seguranca" />
        <span className="highlights">Compra 100% segura</span>
      </div>
      <div className="benefit">
      <img src={IconShipping} alt="icone entrega" />
        <span className="highlights">Frete grátis acima de R$ 200</span>
      </div>
      <div className="benefit">
      <img src={IconCreditCard} alt="icone parcelamento" />
        <span className="highlights">Parcele suas compras</span>
      </div>
    </div>
  );
};

export default TopBar;
