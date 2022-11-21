import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../Theme/Theme';

export const ListTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #444444;

  span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #706d7a;
  }

  @media ${device.mobileM} {
    font-size: 20px;
  }
`;

export const EmptyProducts = styled.div`
  padding: 20px 0;
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
    cursor: pointer;
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
    cursor: pointer;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const FilterWrapper = styled.div`
  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #444444;
    margin-bottom: 24px;
    padding-left: 24px;
  }
`;

export const FilterPanel = styled.div`
  background: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  margin-left: 24px;
  width: 248px;
  padding: 26px 16px 24px 16px;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #444444;
  }

  button {
    //width: 100%;
    width: 216px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a2349;
    border-radius: 4px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 32px;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #706d7a;
    text-align: center;
    margin-top: 24px;
    cursor: pointer;
  }
`;

export const FilterBy = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    margin-bottom: 12px;
  }
`;

export const InputWrapper = styled.div`
  padding-left: 22px;

  input {
    width: 64px;
    height: 32px;
    background: #fff;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    padding-left: 8px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  //margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  color: #444444;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;

    background: #ffffff;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
  }

  &:hover input ~ span {
    //background-color: #ccc;
  }

  input:checked ~ span {
    //background-color: #2196f3;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked + span:after {
    display: block;
  }

  span:after {
    left: 3px;
    top: 3px;
    width: 8px;
    height: 8px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(90deg);

    background: #00ccdb;
    border-radius: 2px;
  }
`;

export const WrapperCity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start !important;
`;
