/* eslint-disable react/prop-types */
import { Container, ButtonContainer } from './styles';

import GroupForm from '../../../components/GroupForm';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';

import { STATES } from '../../../constants';

export default function StepAdress({
  fields, handleFieldChange, handleClickStep, errors, getErrorMessageByFieldName,
}) {
  const {
    name, email, phone, adress, district, city, state, cep,
  } = fields;

  const isFormValid = Boolean(name && email && phone && adress
  && district && city && state && cep) && errors.length === 0;

  return (
    <Container>
      <GroupForm error={getErrorMessageByFieldName('adress')}>
        <Input
          name="adress"
          value={adress}
          placeholder="Endereço *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('adress')}
        />
      </GroupForm>
      <GroupForm error={getErrorMessageByFieldName('district')}>
        <Input
          name="district"
          value={district}
          placeholder="Bairro *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('district')}
        />

      </GroupForm>
      <GroupForm error={getErrorMessageByFieldName('city')}>
        <Input
          name="city"
          value={city}
          placeholder="Cidade *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('city')}
        />
      </GroupForm>

      <GroupForm error={getErrorMessageByFieldName('state')}>
        <Select
          name="state"
          value={state}
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('state')}
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

      <GroupForm error={getErrorMessageByFieldName('cep')}>
        <Input
          name="cep"
          value={cep}
          placeholder="CEP *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('cep')}
        />
      </GroupForm>

      <ButtonContainer>

        <Button onClick={() => handleClickStep(0)}>
          Voltar
        </Button>

        <Button
          type="submit"
          disabled={!isFormValid}
        >
          Criar minha conta
        </Button>
      </ButtonContainer>
    </Container>
  );
}
