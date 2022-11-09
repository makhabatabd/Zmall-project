import styled from 'styled-components';

export const PackageSection = styled.section`
  padding: 95px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 98px 10px;
    gap: 30px;
  }
`;

export const PackageImgBox = styled.div`
  width: 40%;
  height: calc(2rem + 30vw);
  @media (max-width: 950px) {
    height: calc(3rem + 40vw);
    width: 55%;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    height: calc(2rem + 45vw);
  }
`;

export const PackageTextBox = styled.div`
  width: 35%;
  padding-left: 143px;
  @media (max-width: 950px) {
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    width: 70%;
    padding-left: 0;
  }
`;

export const PackageTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1.9vw);
  line-height: 125%;
  color: #2a2349;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const PackageSubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(0.7rem + 0.5vw);
  line-height: 170%;
  color: #454545;
`;
