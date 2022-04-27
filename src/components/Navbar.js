import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 23px;


  .actionLeft {
    width: 40px;
    height: 40px;
  }

  .title {
    height: 100%;
    width: 100%auto;
  }

  .actionRight {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
