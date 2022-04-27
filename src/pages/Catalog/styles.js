import styled from 'styled-components';

export const Container = styled.div`

`;

export const InfoMarket = styled.div`
  width: 100%;
  padding: 0 33px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 4px
  }

  > span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .infoDelivery {
    display: flex;
    align-items: center;
    width: 100%;

    img {
      width: 37px;
      height: 37px;
      margin-left: -8px;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const SearchButtonContainer = styled.div`
  margin-top: 20px;
`;

export const ListCategories = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 23px;
  margin-top: 27px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  overflow-x: hidden;
`;
export const Category = styled.button`
  height: 44px;
  padding: 12px;
  color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 7px;
  background-color: #E2E2E2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: 0px;

  transition: all 0.2s ease-in;


  & + & {
    margin-left: 18px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.label};
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  div {
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: auto;
    }
  }

  span {
    font-size: 18px;
    line-height: 21px;
    width: 90%;
    word-wrap: break-word;
    text-align: center;
  }

  .name {
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-top: 16px;
  }

  .price {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-top: 4px;
  }

  .measure {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-top: 4px;
  }
`;
