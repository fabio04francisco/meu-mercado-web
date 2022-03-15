/* eslint-disable react/prop-types */
import GroupForm from '../../../components/GroupForm';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container } from './styles';

export default function StepName({ fields, handleFieldChange, handleClickStep }) {
  const {
    name, email, phone, password,
  } = fields;
  return (
    <Container className="step">
      <GroupForm>
        <Input
          name="name"
          value={name}
          placeholder="Nome"
          onChange={handleFieldChange}
        />
      </GroupForm>
      <GroupForm>
        <Input
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={handleFieldChange}
        />
      </GroupForm>

      <GroupForm>
        <Input
          name="phone"
          value={phone}
          placeholder="Telefone"
          onChange={handleFieldChange}
        />
      </GroupForm>

      <GroupForm>
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Senha"
          onChange={handleFieldChange}
        />
      </GroupForm>

      <Button
        onClick={() => handleClickStep(1)}
      >
        Próximo
      </Button>
    </Container>
  );
}
