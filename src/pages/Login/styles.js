import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 25px;
  border: 1px solid #8F8F8F8F;
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

  footer a {
    text-decoration: none;
    color: #8F8F8F;
    font-size: 18px;
  }
`;

export const Form = styled.form`
  width: 100%;

  h3 {
    width: 100%;
    text-align: center;
    margin-bottom: 85px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 43px;
`;
