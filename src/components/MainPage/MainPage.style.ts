import styled from 'styled-components';

export const Mainpage = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 0 0 0;
`;

export const Subtitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #444444;
`

export const WrapperArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }


  img {
    width: 24px;
    height: 24px;
  }

  svg:hover {
    cursor: pointer;

    path {
      cursor: pointer;
      fill: #00ccdb;
    }
  }
`;
