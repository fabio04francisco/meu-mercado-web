/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
import { useState, useCallback } from 'react';

import { Container, Form } from './styles';

import logo from '../../assets/images/logo.svg';
import StepName from './StepName';
import StepAdress from './StepAdress';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import formatCEP from '../../utils/formatCEP';

import { useFormFields } from '../../hooks/useFormFields';
import useErrors from '../../hooks/useErrors';
import isCEPValid from '../../utils/isCEPValid';

const initialFormFields = {
  name: '',
  email: '',
  password: '',
  phone: '',
  adress: '',
  district: '',
  city: '',
  state: '',
  cep: '',
};
export default function Login() {
  const [fields, setFields] = useFormFields(initialFormFields);
  const [step, setStep] = useState(1);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const handleNextStep = useCallback(() => {
    setStep((prevState) => prevState + 1);
  }, []);

  const handleBackStep = useCallback(() => {
    setStep((prevState) => prevState - 1);
  }, []);

  function handleFieldChange(event) {
    const inputName = event.target.name;
    let inputValue = event.target.value;

    const inputNameDescription = {
      name: 'Nome',
      adress: 'Endereço',
      district: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
    };

    switch (inputName) {
      case 'name':
      case 'adress':
      case 'district':
      case 'city':
      case 'state':
        if (!inputValue) {
          setError({ field: inputName, message: `${inputNameDescription[inputName]} é obrigatório.` });
        } else {
          removeError(inputName);
        }
        break;

      case 'email':
        if (inputValue && !isEmailValid(inputValue)) {
          setError({ field: 'email', message: 'Email inválido.' });
        } else {
          removeError('email');
        }
        break;

      case 'phone':
        inputValue = formatPhone(inputValue);
        break;

      case 'password':
        if (inputValue.length < 6) {
          setError({ field: 'password', message: 'Senha minimo 6 caracteres' });
        } else {
          removeError('password');
        }
        break;

      case 'cep':
        inputValue = formatCEP(inputValue);

        if (inputValue && !isCEPValid(inputValue)) {
          setError({ field: 'cep', message: 'CEP inválido.' });
        } else {
          removeError('cep');
        }
        break;
      default: return;
    }

    setFields({ name: inputName, value: inputValue });
  }

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
              errors={errors}
              getErrorMessageByFieldName={getErrorMessageByFieldName}
              handleFieldChange={handleFieldChange}
              handleClickStep={handleNextStep}
            />
          )
          : (
            <StepAdress
              fields={fields}
              errors={errors}
              getErrorMessageByFieldName={getErrorMessageByFieldName}
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
