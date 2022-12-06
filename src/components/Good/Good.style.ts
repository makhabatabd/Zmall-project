import styled from 'styled-components';

export const Card = styled.div`
  width: 248px;
  //height: 296px;
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  border: 3px solid #00ccdb;

  .image {
    width: 100%;
    height: 100%;
  }
`;

export const Iconwrap = styled.div`
  position: absolute;
  bottom: 90px;
  right: 20px;
`;

export const Description = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  color: ${(props) => `${props.theme.colors.blue}`};
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 19px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #444444;
  margin-bottom: 9px;
`;
export const Category = styled.p`
  font-family: ${({ theme }) => `${theme.fonts[0]}`};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
