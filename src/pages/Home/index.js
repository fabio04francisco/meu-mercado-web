import { useState } from 'react';

import {
  Container,
  NavTop,
  WrapperMenu,
  Title,
  LinkStyled,
  SearchContainer,
  WrapperInput,
  Input,
  Button,
  DeliveryTypeContainer,
  MarketList,
  Market,
} from './styles';

import cartShoopIcon from '../../assets/images/cart_shopping.svg';
import menuIcon from '../../assets/images/menu.svg';
import iconSearch from '../../assets/images/search.svg';
import marketIcon from '../../assets/images/delivery_shop.svg';
import rateIcon from '../../assets/images/delivery_car.svg';
import minimumPurchaseIcon from '../../assets/images/money.svg';

const markets = [
  {
    name: 'Koch',
    adress: 'Av. Mata Atlantica, 521 - SC - Brasil',
    rate: '1,00',
    minimumPurchase: '100,00',
  },
  {
    name: 'Compre Facil',
    adress: 'Rua Geraldo Rebelo, 1521 - SC Brasil',
    rate: '15,00',
    minimumPurchase: '00,00',
  },
  {
    name: 'Koch',
    adress: 'Av. Interlagos, 521 - Jd Brasil',
    rate: '5,00',
    minimumPurchase: '30,00',
  },
  {
    name: 'Pão de Açucar',
    adress: 'Av. Interlagos, 521 - Jd Brasil',
    rate: '5,00',
    minimumPurchase: '30,00',
  },
  {
    name: 'Pão de Açucar',
    adress: 'Av. Interlagos, 521 - Jd Brasil',
    rate: '5,00',
    minimumPurchase: '30,00',
  },
  {
    name: 'Pão de Açucar',
    adress: 'Av. Interlagos, 521 - Jd Brasil',
    rate: '5,00',
    minimumPurchase: '30,00',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [deliveryType, setDeliveryType] = useState('home');

  function handleDeliveryTypeClick(type) {
    setDeliveryType(type);
  }
  function handleSearchClick() {

  }
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  return (
    <Container>
      <NavTop>
        <WrapperMenu>
          <img src={menuIcon} alt="Menu" />
        </WrapperMenu>

        <Title>Meu Mercado</Title>

        <LinkStyled to="/">
          <img src={cartShoopIcon} alt="Carrinho Compra" />
        </LinkStyled>
      </NavTop>

      <SearchContainer>
        <WrapperInput>
          <img src={iconSearch} alt="Pesquisar" />
          <Input
            type="text"
            placeholder="Pesquisar..."
            onChange={handleSearchChange}
            value={search}
          />
        </WrapperInput>

        <Button
          type="button"
          onClick={(event) => handleSearchClick(event)}
        >
          Buscar
        </Button>
      </SearchContainer>

      <DeliveryTypeContainer>
        <div>
          <button
            type="button"
            className={deliveryType === 'home' ? 'active' : ''}
            onClick={() => handleDeliveryTypeClick('home')}
          >
            Receber em casa
          </button>

          <button
            type="button"
            className={deliveryType === 'store' ? 'active' : ''}
            onClick={() => handleDeliveryTypeClick('store')}
          >
            Retirar na loja
          </button>
        </div>
      </DeliveryTypeContainer>

      <MarketList>
        { markets.map((market) => (
          <Market>
            <div className="info">
              <div>
                <img src={marketIcon} alt="Mercado" />
              </div>
              <div>
                <span>{market.name}</span>
                <span>{market.adress}</span>
              </div>
            </div>

            <div className="infoDelivery">
              <img src={rateIcon} alt="Taxa entrega" />
              <span>
                {`Taxa de entrega: R$ ${market.rate}`}
              </span>
            </div>

            <div className="infoDelivery">
              <img src={minimumPurchaseIcon} alt="Compra mínima" />
              <span>
                {`Compra mínima: R$ ${market.minimumPurchase}`}
              </span>
            </div>
          </Market>
        ))}

      </MarketList>

    </Container>
  );
}
