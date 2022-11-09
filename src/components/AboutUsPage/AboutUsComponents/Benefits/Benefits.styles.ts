import styled from 'styled-components';

export const BenefitSection = styled.section`
  position: relative;
  display: flex;
  background: white;
  padding: 98px 0;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 170px 10px 90px;
    gap: 30px;
  }
`;

export const BenefitTextBox = styled.div`
  width: 35%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const BenefitTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1.9vw);
  line-height: 125%;
  color: #2a2349;
  padding-top: 6%;
  padding-bottom: 30px;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const BenefitSubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(0.7rem + 0.5vw);
  line-height: 170%;
  color: #454545;
  padding-bottom: 30px;
`;

export const BenefitPrice = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1vw);
  //font-size: 24px;
  line-height: 100%;
  color: #00ccdb;
  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const BenefitClockBox = styled.div`
  position: absolute;
  top: 8%;
  @media (max-width: 768px) {
    top: 50px;
  }
`;
export const BenefitSvgBox = styled.div`
  width: 40%;
  padding-left: 30px;
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

export const BenefitCategories = styled.div`
  max-width: 1290px;
  width: 100%;
  border-top: 1px solid #cccccc;
  display: flex;
  gap: 50px;
  overflow: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const BenefitCategoriesItem = styled.span`
  font-family: 'Inter', sans-serif;
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: calc(0.7rem + 0.5vw);
  line-height: 170%;
  padding-top: 22px;
  color: #cccccc;
  cursor: pointer;
  b {
    padding-top: 22px;
    font-weight: 700;
    border-top: 5px solid #2a2349;
    color: #2a2349;
  }
`;
