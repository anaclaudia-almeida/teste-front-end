import "../NavBar/styles.scss";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul className="menu-desktop">
        <li className="list-menu">Todas Categorias</li>
        <li className="list-menu">Supermercado</li>
        <li className="list-menu">Livros</li>
        <li className="list-menu">Moda</li>
        <li className="list-menu">Lançamentos</li>
        <li className="list-menu"><strong>Ofertas do dia</strong></li>
        <li className="list-menu">Assinatura</li>
      </ul>
    </div>
  );
};

export default NavBar;
