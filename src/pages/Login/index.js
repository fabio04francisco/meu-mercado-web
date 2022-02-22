import { Container, Form, ButtonContainer } from './styles';

import logo from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import GroupForm from '../../components/GroupForm';

export default function Login() {
  return (
    <Container>
      <header>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <Form>
        <h3>Acesse sua conta</h3>

        <GroupForm>
          <Input placeholder="E-mail" />
        </GroupForm>

        <GroupForm>
          <Input placeholder="Senha" />
        </GroupForm>

        <ButtonContainer>
          <Button>Acessar</Button>
        </ButtonContainer>
      </Form>

      <footer>
        <a href="#teste">Ainda não tem uma conta? Crie agora.</a>
      </footer>

    </Container>
  );
}
