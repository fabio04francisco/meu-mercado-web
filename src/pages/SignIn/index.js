/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
import { useState, useCallback } from 'react';

import { Container, Form } from './styles';

import logo from '../../assets/images/logo.svg';
import StepName from './StepName';
import StepAdress from './StepAdress';

import { useFormFields } from '../../hooks/useFormFields';
// import useErrors from '../../hooks/useErrors';

const initialFormFields = {
  name: '',
  email: '',
  password: '',
  phone: '',
  adress: '',
  district: '',
  city: '',
  state: 'SC',
  cep: '',
};
export default function Login() {
  const [fields, handleFieldChange] = useFormFields(initialFormFields);
  const [step, setStep] = useState(1);

  // const {
  //   errors,
  //   setError,
  //   removeError,
  //   getErrorMessageByFieldName,
  // } = useErrors();

  const handleNextStep = useCallback(() => {
    setStep((prevState) => prevState + 1);
  }, []);

  const handleBackStep = useCallback(() => {
    setStep((prevState) => prevState - 1);
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(fields);
  }

  return (
    <Container>
      <header>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </header>

      <Form onSubmit={handleFormSubmit}>
        <header>
          <h3>Criar nova conta</h3>
          <span>
            Passo {step} de 2
          </span>
        </header>
        { step === 1
          ? (
            <StepName
              fields={fields}
              handleFieldChange={handleFieldChange}
              handleClickStep={handleNextStep}
            />
          )
          : (
            <StepAdress
              fields={fields}
              handleFieldChange={handleFieldChange}
              handleClickStep={handleBackStep}
              handleFormSubmit={handleFormSubmit}
            />
          )}
      </Form>

      <footer>
        <a href="#teste">Já tenho uma conta.</a>
      </footer>

    </Container>
  );
}
