import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.main};


  color: ${({ theme }) => theme.colors.label};
  font-size: 22px;
`;

export const ImgConteiner = styled.div`
  width: 86px;
  height: 86px;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
