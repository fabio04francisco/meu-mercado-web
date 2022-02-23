import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: #fff;
  border: 1px solid #8F8F8F;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 7px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border-color: #64BA01;
  }

  &::placeholder {
    color: #8F8F8F8F;
  }

  ${({ error }) => error && css`
    color: #FC5050;
    border-color: #FC5050 !important;
  `}
`;
