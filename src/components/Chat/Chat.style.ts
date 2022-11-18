import { device } from '../Theme/Theme';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1336px;
  background: #ffffff;
  border-radius: 8px;
  margin:0 auto;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 21px 24px;
`;

export const ProductInfo = styled.div`
  margin: 112px 24px 49px;
  max-width: 1280px;
  min-height: 128px;
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;

  @media ${device.tablet} {
    margin-left: 0;
    margin-right: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 24px 25px;
    max-width: 1232px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #2a2349;
    min-height: 72px;
    background: #ffffff;
    border-radius: 8px;

    @media ${device.tablet} {
      flex-wrap: wrap;
      gap: 10px;
    }
  }
`;

export const Divider = styled.p`
  max-width: 1335.5px;
  height: 0px;
  border: 1px solid rgba(224, 224, 224, 0.8);
`;

export const MessagesInfo = styled.div`
  max-width: 1289px;
  padding: 0 24px;

  @media ${device.tablet} {
    padding: 0;
  }

  p {
    text-align: center;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #706d7a;
    padding-bottom: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    @media ${device.tablet} {
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }

    label {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 110%;
      display: flex;
      align-items: center;
      color: #706d7a;
    }
  }

  input {
    display: none;
  }
`;

export const CustomerMessage = styled.p`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 1280px;
  height: 80px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  padding: 27px 25px;
  margin-bottom: 10px;
`;

export const MyMessage = styled.p`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 1177px;
  height: 80px;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  display: flex;
  align-items: left;
  text-align: center;
  color: #000000;
  padding: 27px 25px;
  margin: 24px 0;
  margin-left: auto;
  margin-bottom: 10px;
`;

export const InputMessage = styled.textarea`
  max-width: 1288px;
  width: 100%;
  height: 160px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 17px;
  margin: 24px 0;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  display: flex;
  align-items: center;
  color: #706d7a;
`;

export const SendButton = styled.button`
  max-width: 281px;
  padding: 14px 48px;
  background: #2a2349;
  border-radius: 8px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 30px;
`;


export const MyChatsWrapper = styled.div`
max-width:1350px;
display: flex;
flex-direction:column;
gap: 24px;
`
export const MyChatInner = styled.div`
background: #FFFFFF;
border-radius: 8px;
max-height:120px
`