import styled from 'styled-components';

export const ContactsSection = styled.section`
  display: flex;
  background: white;
  padding: 98px 0;
  align-items: center;
  justify-content: center;
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
export const ContactsTextBox = styled.div`
  width: 35%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ContactsTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: calc(1rem + 1.9vw);
  line-height: 125%;
  color: #2a2349;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactsSubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(0.7rem + 0.5vw);
  //font-size: 18px;
  line-height: 170%;
  color: #454545;
  padding-top: 20px;
  width: 85%;
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-right: 0;
    margin: 0 auto;
  }
`;
export const ContactsBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  gap: 20px;
  padding-top: 70px;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 8px;
    width: 273px;

    svg {
      margin-right: 18px;
    }
  }
`;

export const ContactsImgBox = styled.div`
  padding-left: 50px;
  width: 40%;
  height: calc(2rem + 30vw);
  @media (max-width: 950px) {
    height: calc(3rem + 40vw);
    width: 55%;
    padding-left: 50px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    height: calc(2rem + 45vw);
  }
`;
