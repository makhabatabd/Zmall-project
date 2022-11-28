import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
  padding: 16px 0;
`;

export const Item = styled.div`
  max-width: 385px;
  width: 100%;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  height: 180px;
  gap: 20px;
  flex-wrap: wrap;

  justify-content: start;
  align-items: stretch;
  width: 100%;
  overflow: auto hidden;

  li {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #2a2349;
    max-width: 260px;
    width: 100%;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
  }
`;

export const Dots = styled.span`
  flex-grow: 1;
  border-bottom: 1px dashed #e0e0e0;
`;
