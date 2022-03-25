/* eslint-disable react/prop-types */
import GroupForm from '../../../components/GroupForm';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container } from './styles';

export default function StepName({
  fields, handleFieldChange, handleClickStep, errors, getErrorMessageByFieldName,
}) {
  const {
    name, email, phone, password,
  } = fields;

  const isStepNameValid = (Boolean(name && email && phone && password) && errors.length === 0);

  return (
    <Container className="step">
      <GroupForm error={getErrorMessageByFieldName('name')}>
        <Input
          name="name"
          value={name}
          placeholder="Nome *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('name')}
        />
      </GroupForm>
      <GroupForm error={getErrorMessageByFieldName('email')}>
        <Input
          name="email"
          value={email}
          placeholder="E-mail *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('email')}
        />
      </GroupForm>

      <GroupForm error={getErrorMessageByFieldName('phone')}>
        <Input
          name="phone"
          maxLength="15"
          value={phone}
          placeholder="Telefone *"
          onChange={handleFieldChange}
          error={getErrorMessageByFieldName('phone')}
        />
      </GroupForm>

      <GroupForm error={getErrorMessageByFieldName('password')}>
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Senha *"
          error={getErrorMessageByFieldName('password')}
          onChange={handleFieldChange}
        />
      </GroupForm>

      <Button
        onClick={() => handleClickStep(1)}
        disabled={!isStepNameValid}
      >
        Próximo
      </Button>
    </Container>
  );
}
