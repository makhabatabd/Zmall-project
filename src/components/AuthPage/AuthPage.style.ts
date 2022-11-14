import styled from 'styled-components';
import { device } from '../Theme/Theme';

export const Container = styled.div`
  max-width: 1336px;
  min-height: 424px;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 48px auto;
  @media ${device.tablet} {
    margin: 18px auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 870px;
  margin: 0 auto;
  position: relative;

  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 10px;
  }
`;

export const SignupForm = styled.div`
  max-width: 312px;
  width: 100%;
  button {
    margin: 0 auto;
  }
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoginForm = styled.div`
  max-width: 312px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 8px 0;
  }

  p {
    font - size: 400;
    font-family: "Inter";
    font-weight: 400;
    line-height: 110%;
    text-align: center;
    color: #444444;
  }
`;

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  text-align: center;
  font-weight: 700;
  font-size: 58px;
  line-height: 100%;
  color: #2a2349;
  padding: 0 0 40px;
`;

export const Subtitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  text-align: center;
  color: #444444;
  margin-bottom: 29px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  flex-direction: column;
`;

export const Line = styled.p`
  position: absolute;
  width: 352px;
  height: 0px;
  top: 43%;
  left: 29%;
  border: 1px solid #e5e6e6;
  transform: rotate(90deg);
  @media ${device.laptop} {
    transform: rotate(0deg);
    position: static;
    width: 300px;
  }
`;

export const Agreement = styled.div`
  max-width: 312px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: start;
  padding: 10px 0;

  p {
    font-family: "Inter";
    font-weight: 400;
    font - size: ${(props) => `${props.theme.fontSizes.small}`};
    line-height: 110%;
    color: #444444;
    padding: 0;
    margin: 0;
    a {
      color: #00ccdb;
    }
  }
`;

export const AuthLink = styled.a`
  font-family: "Inter";
  font-weight: 400;
  font - size: ${(props) => `${props.theme.fontSizes.small}`};
  line-height: 110%;
  text-align: center;
  color: #00ccdb;
  margin: 13px 0;
`;

export const Close = styled.p`
  text-align: end;
  padding: 10px;
`;

export const RecoverWrapper = styled.div`
  max-width: 648px;
  height: 153px;
  margin: 0 auto;
  min-height: 33vh;

  h4 {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    color: #444444;
    margin-bottom: 40px;
  }

  div {
    width: 100%;
    display: flex;
    gap: 8px;
    @media ${device.mobileL} {
      flex-wrap: wrap;
      margin: 0 auto;
    }
    button {
      padding: 14px 48px;
      width: 45%;
      @media ${device.mobileL} {
        width: 100% !important;
        margin: 0 auto;
      }
    }
    input {
      width: 55%;
      @media ${device.mobileL} {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export const ConfirmWrapper = styled.div`
  max-width: 648px;
  height: 153px;
  margin: 0 auto;


  h4 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    text-align: center;
    color: #444444;
    margin-bottom: 40px;
  }

  div {
    width: 70%;
    display: flex;
    gap: 8px;
    margin: 0 auto;

     @media ${device.mobileL} {
    flex-wrap:wrap;
    margin:0 auto;
  }

    button {
      padding: 14px 48px;

 @media ${device.mobileL} {
    width:100% !important;
    margin:0 auto;
    }
    input {
      width: 70%;
   @media ${device.mobileL} {
    width:100%;
    margin:0 auto;
    }
    }
  } 
`;

export const ModalOutter = styled.div`
  position: fixed;
  background-color: #00000097;
  width: 100vw;
  height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const ModalInner = styled.div`
  position: relative;
  z-index: 110;
  max-width: 400px;
  background-color: white;
  padding: 40px;
  text-align: center;
  display: block;
  margin: 0px auto;
  transition: all 0.5s ease-in-out;
  opacity: 1;
  animation: fade 2s linear;

  @keyframes fade {
    0%,
    30% {
      opacity: 0.5;
    }

    30%,
    100% {
      opacity: 1;
    }
  }
`;

export const ModalText = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  width: 90px;
  padding: 11px 0;
  color: white;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: black;
  margin-left: auto;
`;
