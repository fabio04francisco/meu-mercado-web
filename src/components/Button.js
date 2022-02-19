import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  color: #FFFFFF;
  border-radius: 7px;
  background-color: #64BA01;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: background 0.2s ease-in;

  &:hover {
    background: #7ce408;
  }

  &:active {
    background: #437f00;
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }
`;
