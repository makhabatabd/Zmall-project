import styled from 'styled-components';

export const AboutUsSection = styled.div`
  h3 {
    color: #2a2349;
  }
  p {
    color: #454545;
  }
`;
export const PreviewContainer = styled.div`
  max-width: 1384px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 10px;
  }
`;
export const Preview = styled.section`
  padding: 75px 0 90px;
  background: #e5e5e5;
  margin: 0 auto;
`;
export const PreviewTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  text-align: start;
`;
export const PreviewTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  //font-size: 2.3rem;
  font-size: calc(1rem + 1.23vw);
  line-height: 110%;
  display: flex;
  align-items: center;
  color: #2a2349;
  max-width: 556px;
  @media (max-width: 768px) {
    font-size: calc(1rem + 2.23vw);
    margin: 0 auto;
    text-align: center;
    max-width: 80%;
  }
`;

export const PreviewSubTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  //font-size: 9.3rem;
  font-size: calc(1rem + 9vw);
  line-height: 110%;
  display: flex;
  align-items: center;
  color: #00ccdb;
  @media (max-width: 768px) {
    font-size: calc(1rem + 10vw);
    margin: 0 auto;
    text-align: center;
    max-width: 80%;
  }
`;
export const PreviewImg = styled.div`
  max-width: 744px;
  height: calc(1rem + 30vw);
`;
export const PreviewDescription = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-top: 6.5%;
  //padding-top: 80px;
  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const PreviewDescriptionTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1.9vw);
  //font-size: 48px;
  line-height: 120%;
  text-align: center;
  color: #2a2349;
  max-width: 70%;
  //max-width: 946px;
  @media (max-width: 768px) {
    font-size: calc(1rem + 4vw);
    margin: 0 auto;
    text-align: center;
    max-width: 80%;
  }
`;

export const PreviewDescriptionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(1rem + 0.45vw);
  //font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #454545;
  max-width: 55%;
  //max-width: 850px;
  @media (max-width: 768px) {
    font-size: calc(1rem + 1vw);
    margin: 0 auto;
    text-align: center;
    max-width: 80%;
  }
`;
export const PreviewDescriptionBtn = styled.button`
  background: #00ccdb;
  border-radius: 8px;
  padding: 20px;
  border: none;
  text-transform: uppercase;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(0.5rem + 0.5vw);
  line-height: 17px;
  margin-top: 4%;
`;
