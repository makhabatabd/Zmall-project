import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../Theme/Theme';

export const Container = styled.div`
  max-width: 1064px;
`;

export const ListTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    display: flex;
    align-items: flex-end;
    color: #706d7a;
  }

  @media ${device.mobileM} {
    font-size: 20px;
  }
`;

export const ListSort = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 29px 0 0;
`;

export const StyledItem = styled.div`
  display: flex;
  gap: 52px;
  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #828282;
  }

  @media ${device.mobileL} {
    margin: 0 auto;
  }
`;

export const SortBy = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
`;

export const StyledLine = styled.p`
  max-width: 1064px;
  height: 0px;
  border-bottom: 1px solid #e0e0e0;
`;

export const ActiveTab = styled.p`
  max-width: 78px;
  height: 4px;
  background: #00ccdb;
  margin-top: 23px;
`;

export const StyledImage = styled(Image)`
  margin: 0 5px;
`;

export const StyledDate = styled.div`
  display: flex;
  gap: 52px;

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #828282;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
