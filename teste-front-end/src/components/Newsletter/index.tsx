import React from "react";
import "../Newsletter/styles.scss";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <div className="container-newsletter">
        <h1 className="title-newsletter">Inscreva-se na nossa newsletter</h1>
        <h2 className="subtitle-newsletter">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </h2>
      </div>
      <div className="inputs-newsletter">
        <input
          className="input-newsletter"
          type="text"
          placeholder="Digite seu nome"
        />
        <input
          className="input-newsletter"
          type="text"
          placeholder="Digite seu e-mail"
        />
        <button className="button-newsletter">Inscrever</button>
        <div className="acept-terms-newsletter">
          <input type="checkbox" name="acept-newsletter" id="acept-terms" />
          <span className="text-terms-newsletter">
            Aceito os termos e condições
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
