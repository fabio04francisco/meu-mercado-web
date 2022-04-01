import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const NavTop = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 23px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.h3`
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SearchContainer = styled.div`
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

  img {
    width: 36px;
    height: 36px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-left: 14px;
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

export const DeliveryTypeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 53px;
  margin-top: 15px;
  padding: 0 23px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    padding: 6px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(50% - 3px);
      height: 100%;
      font-size: 16px;
      border-radius: 7px;
      color: ${({ theme }) => theme.colors.gray[200]};
      background-color: ${({ theme }) => theme.colors.background};
      border: none;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${({ theme }) => theme.colors.primary.light};
        color: ${({ theme }) => theme.colors.label};
      }

      &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.label};
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const MarketList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

`;

export const Market = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};

  .info {
    display: flex;
    flex-direction: row;
    width: 100%;

    img{
      width: 65px;
      height: 65px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 12px;

      span:nth-child(1) {
        color:  ${({ theme }) => theme.colors.gray[700]};
        margin-bottom: 5px;
      }

      span:nth-child(2) {
        color:  ${({ theme }) => theme.colors.gray[200]}
      }

    }
  }

  .infoDelivery {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 14px;

    img {
      width: 37px;
      height: 37px;
    }

    span {
      margin-left: 4px;
      color:  ${({ theme }) => theme.colors.gray[200]}
    }
  }
`;
