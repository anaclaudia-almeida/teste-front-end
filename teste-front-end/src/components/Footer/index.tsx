import React from "react";
import "../Footer/styles.scss";
import LogoEconverse from "../../assets/png/logotipo-econverse.png";
import IconeInstagram from "../../assets/svg/icon-instagram.svg";
import IconeFacebook from "../../assets/svg/icon-facebook.svg";
import IconeLinkedin from "../../assets/svg/icon-linkedin.svg";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container-footer">
      <div className="aside-footer">
        <img
          className="logotipo-econverse-footer"
          src={LogoEconverse}
          alt="Logotipo Econverse"
        />
        <span className="text-aside-footer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <div className="icons-footer">
          <img className="icon-social-footer" src={IconeInstagram} alt="Ícone Instagram" />
          <img className="icon-social-footer" src={IconeFacebook} alt="Ícone Facebook" />
          <img className="icon-social-footer" src={IconeLinkedin} alt="Ícone Linkedin" />
        </div>
      </div>

      <div className="divider-footer"></div>

      <div className="menu-nav-footer">
        <div className="institutional-footer">
        <ul className="institutional-list-footer">
          <li className="institutional-list-item"><span>Institucional</span></li>
          <li className="institutional-list-item">Sobre Nós</li>
          <li className="institutional-list-item">Movimento</li>
          <li className="institutional-list-item">Trabalhe conosco</li>
        </ul>
        </div>
        <div className="help-footer">
        <ul className="help-list-footer">
          <li className="help-list-item"><span>Ajuda</span></li>
          <li className="help-list-item">Suporte</li>
          <li className="help-list-item">Fale Conosco</li>
          <li className="help-list-item">Perguntas Frequentes</li>
        </ul>
        </div>
        <div className="terms-footer">
        <ul className="terms-list-footer">
          <li className="terms-list-item"><span>Termos</span></li>
          <li className="terms-list-item">Termos e Condições</li>
          <li className="terms-list-item">Política de Privacidade</li>
          <li className="terms-list-item">Troca e Devolução</li>
        </ul>
        </div>
      </div>
    </div>
      <div className="text-footer">
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
    </div>
  );
};

export default Footer;
