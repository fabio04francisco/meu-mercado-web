import {
  Container, WrapperInput, Input, Button,
} from './styles';

import searchIcon from '../../assets/images/search.svg';

export default function SearchButton({
  // eslint-disable-next-line react/prop-types
  value, onSearch, placeholder, onInputSearch,
}) {
  return (
    <Container>
      <WrapperInput>
        <img src={searchIcon} alt="Pesquisar" />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onInputSearch}
          value={value}
        />
      </WrapperInput>

      <Button
        type="button"
        onClick={(event) => onSearch(event)}
      >
        Buscar
      </Button>
    </Container>
  );
}
