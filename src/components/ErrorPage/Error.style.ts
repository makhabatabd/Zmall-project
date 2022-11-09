import styled from 'styled-components';
import { device } from '../Theme/Theme';

export const Wrapper = styled.div`
  color: ${(props) => `${props.theme.colors.white}`};
  border: 48px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 98vh;

  @media ${device.mobileL} {
    border: 20px solid #e5e5e5;
  }
`;

export const Title = styled.h1`
  font-weight: ${(props) => `${props.theme}`};
  font-size: 58px;
  color: #2a2349;
  margin: 48px 0 15px 0;
  text-transform: uppercase;
`;

export const SubTitle = styled.h3`
  font-weight: ${(props) => `${props.theme.fontWeights.bolder}`};
  font-size: 24px;
  line-height: 100%;
  color: ${(props) => `${props.theme.colors.darkGrey}`};
  margin: 0 0 10px 0;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => `${props.theme.fontWeights.normal}`};
  font-size: 16px;
  line-height: 200%;
  color: ${(props) => `${props.theme.colors.darkGrey}`};
  width: 66%;
  text-align: center;

  a {
    font-weight: 400;
    font-size: 16px;
    color: #00ccdb;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 390px;
  position: relative;

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.mobileL} {
    width: 250px;
    height: 300px;
  }
`;
