import styled from 'styled-components';

export const Title = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => `${theme.colors.blue}`};
`;

export const Item = styled.div`
  width: 100%;
  border-top: 4px solid transparent;
  background-color: transparent;

  a {
    border-top: 4px solid transparent;
    background-color: ${(props) => `${props ? '#fff' : 'transparent'}`};
    //border-color: ${(props) => `${props ? '#00ccdb' : 'transparent'}`};
    // border-color: ${(props) => `${console.log(props)}`};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 7px;
    padding: 23px 0;
    cursor: pointer;
    width: 100%;
  }

  &:hover ${Title} {
    color: #00ccdb;
  }

  //&:hover {
  //  background-color: #fff;
  //  border-color: #00ccdb;
  //}
`;

export const Subcategory = styled.div`
  padding: 16px 48px;
  background-color: #fff;
`;
export const SubcategoryItem = styled.div`
  background-color: #fff;
`;
