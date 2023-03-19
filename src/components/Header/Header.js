import './header.css';
import mascara from '../../images/mascara.png';
import pessoasDancando from '../../images/3393284.png'

function Header() {

  return (
    <>
      <div id="header" className="header">
        <img
          src={mascara}
          alt="Máscara amarela"
          className="header__logo" />
        <h1 className="header__title">Carnaval Pudding</h1>
        <p className="header__subtitle">
          Uma análise de dados sobre o Carnaval de Belo Horizonte
        </p>
      </div>

    </>
  );
}

export default Header;
