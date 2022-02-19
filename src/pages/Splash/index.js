import { Container, ImgConteiner } from './styles';

import cart from '../../assets/images/cart.svg';

function Splash() {
  return (
    <Container>
      <ImgConteiner>
        <img src={cart} alt="Logo" />
      </ImgConteiner>

      <span>Meu Mercado</span>
    </Container>
  );
}

export default Splash;
