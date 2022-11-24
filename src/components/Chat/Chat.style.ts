import { device } from '../Theme/Theme';
import styled from 'styled-components';
import Link from 'next/link';

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
  margin: 24px 0 0 0;
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
max-width: 1350px;
display: flex;
flex-direction:column;
gap: 24px;
padding: 24px;
`
export const MyChatInner = styled.div`
position: relative;
background: #FFFFFF;
border-radius: 8px;
min-height:120px;
display:flex;
gap: 24px;
padding: 24px;
`

export const ChatDetails = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap;
gap:12px;
`

export const SlyledLink = styled(Link)`
width: 100%;
`

export const SenderName = styled.p`
font-family: 'Inter';
font-weight: 400;
font-size: 14px;
line-height: 120%;
color: #00CCDB;
`

export const AdvertisementItem = styled.p`
font-family: 'Inter';
font-weight: 700;
font-size: 16px;
line-height: 120%;
color: #706D7A;
margin: 9px 0 15px;
`

export const Message = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 120%;
color: #828282;
`

export const MessageDate = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 120%;
color: #828282;
    display: flex;
    align-items: end;
`
export const UnreadMessages = styled.span`
position: absolute;
background-color: #e13d68;
width: 14px;
height: 14px;
border-radius:50%;
top:23px;
left:55px;
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 11px;
line-height: 120%;
display: flex;
align-items: center;
justify-content:center;
text-align: center;
color: #FFFFFF;
`