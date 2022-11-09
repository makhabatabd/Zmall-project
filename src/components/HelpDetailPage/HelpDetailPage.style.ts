import styled from 'styled-components';

export const HelpDetailPageSection = styled.section`
  background: #fafafa;
  padding: 28px 48px 100px;
`;

export const HelpDetailPageFlexBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;
  }
`;

export const HelpDetailPageTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #444444;
  margin-bottom: 30px;
`;

export const HelpDetailPageDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #444444;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
`;

export const HelpDetailPageAnother = styled.div`
  padding-top: 37px;
`;
