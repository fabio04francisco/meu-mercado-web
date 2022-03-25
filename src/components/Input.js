import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 7px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border-color:${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color:${({ theme }) => theme.colors.gray[200]};
  }

  ${({ error }) => error && css`
    //color: ${({ theme }) => theme.colors.danger.main};
    border-color: ${({ theme }) => theme.colors.danger.main} !important;
  `}
`;
