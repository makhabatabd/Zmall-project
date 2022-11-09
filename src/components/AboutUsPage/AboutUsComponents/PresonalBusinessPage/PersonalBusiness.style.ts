import styled from 'styled-components';

export const BusinessSection = styled.section`
  padding: 95px 0;
  display: flex;
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

export const BusinessImgBox = styled.div`
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

export const BusinessTextBox = styled.div`
  width: 39%;
  padding-left: 40px;
  @media (max-width: 950px) {
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    width: 70%;
    padding-left: 0;
  }
`;

export const BusinessTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1.9vw);
  line-height: 125%;
  color: #2a2349;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const BusinessSubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(0.7rem + 0.5vw);
  line-height: 170%;
  color: #454545;
  padding-top: 30px;
  span {
    color: #00ccdb;
    border-bottom: 1.5px solid #00ccdb;
    cursor: pointer;
  }
`;

export const BusinessSubTitleDetail = styled.div`
  color: #999999;
  padding-top: 30px;
  font-size: calc(0.7rem + 0.3vw);
  width: 90%;
  span {
    color: #00ccdb;
  }
`;
