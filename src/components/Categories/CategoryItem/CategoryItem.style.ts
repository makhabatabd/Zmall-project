import styled from 'styled-components';

export const Title = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => `${theme.colors.blue}`};
`;

export const Item = styled.div<{ active: string; currentId: number }>`
  width: 100%;
  background-color: transparent;

  a {
    border-top: 4px solid transparent;
    border-color: ${(props) =>
      `${
        Number(props.active) === props.currentId ? '#00ccdb' : 'transparent'
      }`};
    background-color: ${(props) =>
      `${Number(props.active) === props.currentId ? '#fff' : 'transparent'} `};
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
`;