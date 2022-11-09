import styled from 'styled-components';

export const HelpPageSection = styled.section`
  background: #fafafa;
  padding: 28px 48px 100px;
  display: flex;
  flex-wrap: wrap;
`;

export const HelpTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  margin-bottom: 34px;
  width: 100%;
`;

export const HelpContentFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  @media (max-width: 998px) {
    width: 100%;
  }
`;

export const HelpFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  @media (max-width: 998px) {
    flex-direction: column;
    display: flex;
  }
`;

export const HelpItem = styled.div`
  margin-bottom: 42px;
  width: 320px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HelpItemTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #2a2349;
  margin-bottom: 7px;
`;

export const HelpItemSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #2a2349;
  cursor: pointer;
`;

export const HelpOftenQuestion = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 58px 49px;
  width: 35%;
  @media (max-width: 998px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const HelpOftenQuestionTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  margin-bottom: 7px;
`;
