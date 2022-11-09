import styled from 'styled-components';

export const PrivacySection = styled.section`
  padding: 45px 45px 60px;
  margin: 0 auto;
  background: #fafafa;
`;

export const PrivacyTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  //font-size: 24px;
  line-height: 100%;
  color: #444444;
  font-size: calc(1rem + 0.45vw);
  @media (max-width: 768px) {
    font-size: calc(1rem + 1vw);
  }
`;

export const PrivacyText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: calc(0.5rem + 0.42vw);
  //font-size: 16px;
  padding-top: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: #444444;
  @media (max-width: 768px) {
    font-size: calc(0.7rem + 0.6vw);
  }
`;
