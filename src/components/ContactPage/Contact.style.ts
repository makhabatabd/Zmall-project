import styled from 'styled-components';
import { device } from '../Theme/Theme';

export const Wrapper = styled.div`
  background-color: ${(props) => `${props.theme.colors.lightGrey}`};
`;

export const WrapperInner = styled.div`
  padding: 0 48px 150px;
  color: ${(props) => `${props.theme.colors.darkGrey}`};
  font-size: ${(props) => `${props.theme.fontSizes.small}`};

  @media ${device.tablet} {
    padding: 0 20px 150px;
  }
`;

export const Title = styled.h1`
  font-weight: ${(props) => `${props.theme.fontWeights.bolder}`};
  font-size: ${(props) => `${props.theme.fontSizes.medium}`};
  line-height: 100%;
  padding: 37px 0 24px 0;
  margin: 0;
`;

export const Text = styled.p`
  font-weight: ${(props) => `${props.theme.fontWeights.normal}`};
  line-height: 140%;
  width: 40%;
  margin: 0 0 18px 0;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const InputField = styled.input`
  border: 1px solid #e0e0e0;
  display: block;
  border-radius: 8px;
  background: ${(props) => `${props.theme.colors.white}`};
  width: 30%;
  padding-left: 17px;
  height: 48px;
  margin-bottom: 16px;
  color: #706d7a;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: #706d7a;
  }
  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const Select = styled.select`
  width: 30%;
  display: block;
  height: 48px;
  background: ${(props) => `${props.theme.colors.white}`};
  padding-left: 15px;
  border: 1px solid #e0e0e0;
  margin-bottom: 16px;
  border-radius: 8px;
  color: #706d7a;

  &:focus {
    outline: none;
  }

  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }

  option {
    color: #706d7a;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 40%;
  display: block;
  height: 160px;
  padding: 10px 0 0 17px;
  margin-bottom: 16px;
  @media ${device.laptop} {
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 281px;
  height: 45px;
  left: 48px;
  top: 817px;
  background: #2a2349;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: white;
  text-transform: uppercase;

  @media ${device.mobileL} {
    width: 238px;
  }
`;
