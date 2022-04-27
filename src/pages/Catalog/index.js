import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import SearchButton from '../../components/SearchButton';

import {
  Container, InfoMarket, SearchButtonContainer, ListCategories, Category, ProductList, Product,
} from './styles';

import arrowIcon from '../../assets/images/arrow.svg';
import cartShoopIcon from '../../assets/images/cart_shopping.svg';
import rateIcon from '../../assets/images/delivery_car.svg';
import minimumPurchaseIcon from '../../assets/images/money.svg';

import imagemTeste from '../../assets/images/image1.png';

const categories = [
  'Bebidas', 'Frios', 'Limpeza', 'Eletrônicos', 'Pet'];

export default function Catalog() {
  const [search, setSearch] = useState('');

  function handleClickSearch() {
    // console.log({ search });
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <Navbar>
        <img className="actionLeft" src={arrowIcon} alt="Voltar" />

        <h3>Pão de Açúcar</h3>

        <Link className="actionRight" to="/">
          <img src={cartShoopIcon} alt="Carrinho Compra" />
        </Link>
      </Navbar>

      <InfoMarket>
        <span>Av. Interlagos, 521 - Jd Brasil</span>
        <div>
          <div className="infoDelivery">
            <img src={rateIcon} alt="Taxa entrega" />
            <span>
              Entrega: R$ 5,00
            </span>
          </div>

          <div className="infoDelivery">
            <img src={minimumPurchaseIcon} alt="Compra mínima" />
            <span>
              Compra mín.: R$ 30,56
            </span>
          </div>
        </div>
      </InfoMarket>

      <SearchButtonContainer>
        <SearchButton
          value={search}
          onSearch={handleClickSearch}
          placeholder="Pesquisar produto..."
          onInputSearch={handleChangeSearch}
        />
      </SearchButtonContainer>

      <ListCategories>
        {categories.map((category) => (
          <Category>{category}</Category>
        ))}

      </ListCategories>

      <ProductList>
        <Product>
          <div>
            <img src={imagemTeste} alt="Nome do Produto" />
          </div>
          <span className="name">Nome do produto Nome do  completo</span>
          <span className="price">R$ 15,00</span>
          <span className="measure">50g</span>
        </Product>
        <Product>
          <div>
            <img src={imagemTeste} alt="Nome do Produto" />
          </div>
          <span className="name">Nome do produto</span>
          <span className="price">R$ 15,00</span>
          <span className="measure">50g</span>
        </Product>
        <Product>
          <div>
            <img src={imagemTeste} alt="Nome do Produto" />
          </div>
          <span className="name">Nome do produto</span>
          <span className="price">R$ 15,00</span>
          <span className="measure">50g</span>
        </Product>
        <Product>
          <div>
            <img src={imagemTeste} alt="Nome do Produto" />
          </div>
          <span className="name">Nome do produto</span>
          <span className="price">R$ 15,00</span>
          <span className="measure">50g</span>
        </Product>

        <span>Fim</span>
      </ProductList>
    </Container>
  );
}
