import styled from 'styled-components';

export const Paginate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;

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
`;

export const Item = styled.div<{ current: number }>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  border-radius: 50%;
  width: ${(props) => `${props.children === props.current ? '40px' : ''}`};
  height: ${(props) => `${props.children === props.current ? '40px' : ''}`};
  color: ${(props) =>
    `${props.children === props.current ? '#00CCDB' : '#444444'}`};
  padding-left: ${(props) =>
    `${props.children === props.current ? '12px' : ''}`};
  padding-top: ${(props) => `${props.children === props.current ? '7px' : ''}`};
  border: ${(props) =>
    `${props.children === props.current ? '4px solid #00CCDB' : ''}`};
`;
