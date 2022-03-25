/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';

import { Container, Form, ButtonContainer } from './styles';

import logo from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

import GroupForm from '../../components/GroupForm';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (password && errors.length === 0);

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatório.' });
    } else {
      removeError('password');
    }
  }

  function handlerSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <header>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <Form onSubmit={handlerSubmit}>
        <h3>Acesse sua conta</h3>

        <GroupForm error={getErrorMessageByFieldName('email')}>
          <Input
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            error={getErrorMessageByFieldName('email')}
          />
        </GroupForm>

        <GroupForm error={getErrorMessageByFieldName('password')}>
          <Input
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            error={getErrorMessageByFieldName('password')}
          />
        </GroupForm>

        <ButtonContainer>
          <Button disabled={!isFormValid}>Acessar</Button>
        </ButtonContainer>
      </Form>

      <footer>
        <a href="#teste">Ainda não tem uma conta? Crie agora.</a>
      </footer>

    </Container>
  );
}
