/* eslint-disable react/prop-types */
import { Container, ButtonContainer } from './styles';

import GroupForm from '../../../components/GroupForm';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';

import { STATES } from '../../../constants';

export default function StepAdress({
  fields, handleFieldChange, handleClickStep,
}) {
  const {
    adress, district, city, state, cep,
  } = fields;

  return (
    <Container>
      <GroupForm>
        <Input
          name="adress"
          value={adress}
          placeholder="Endereço"
          onChange={handleFieldChange}
        />
      </GroupForm>
      <GroupForm>
        <Input
          name="district"
          value={district}
          placeholder="Bairro"
          onChange={handleFieldChange}
        />

      </GroupForm>
      <GroupForm>
        <Input
          name="city"
          value={city}
          placeholder="Cidade"
          onChange={handleFieldChange}
        />
      </GroupForm>

      <GroupForm>
        <Select
          name="state"
          value={state}
          onChange={handleFieldChange}
        >
          <option value="">Selecione um estado</option>
          {STATES.map((itemState) => (
            <option
              key={itemState.abbreviation}
              value={itemState.abbreviation}
            >
              {itemState.state}
            </option>
          ))}

        </Select>
      </GroupForm>

      <GroupForm>
        <Input
          name="cep"
          value={cep}
          placeholder="CEP"
          onChange={handleFieldChange}
        />
      </GroupForm>

      <ButtonContainer>

        <Button onClick={() => handleClickStep(0)}>
          Voltar
        </Button>

        <Button
          type="submit"
        >
          Criar minha conta
        </Button>
      </ButtonContainer>
    </Container>
  );
}
