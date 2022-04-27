import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 53px;
padding: 0 23px;
`;

export const WrapperInput = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
border-radius: 7px 0 0 7px;
border: 1px solid ${({ theme }) => theme.colors.gray[200]};
border-right: none;
padding: 0 8px;

img {
  width: 30px;
  height: 30px;
}
`;

export const Input = styled.input`
width: 100%;
margin-left: 12px;
border: none;
outline: none;
color: ${({ theme }) => theme.colors.gray[200]};
font-size: 16px;
appearance: none;

&::placeholder {
  color:${({ theme }) => theme.colors.gray[200]};
}
`;

export const Button = styled.button`
height: 100%;
min-width: 80px;
color: ${({ theme }) => theme.colors.label};
border-radius: 0 7px 7px 0;
background-color: ${({ theme }) => theme.colors.primary.main};
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
font-size: 16px;
border: none;
transition: background 0.2s ease-in;

&:hover {
  background: ${({ theme }) => theme.colors.primary.light};
}

&:active {
  background: ${({ theme }) => theme.colors.primary.dark};
}
`;
