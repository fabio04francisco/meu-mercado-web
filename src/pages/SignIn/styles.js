import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  width: 100%;
  height: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 254px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer{
    display: flex;
    align-items: center;
    margin-top: 35px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 18px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  span {
    margin: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]}
  }
`;
