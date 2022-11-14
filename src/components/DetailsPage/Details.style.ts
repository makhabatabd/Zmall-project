import styled from 'styled-components';
import { device } from '../Theme/Theme'; 

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
`;

export const DetailInner = styled.div`
  display: flex;
  gap: 1em;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const LeftBlock = styled.div`
  width: 80%;
  border: 1px solid #e0e0e0;
  margin-bottom: 43px;
  @media ${device.laptopL} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

export const LeftInner = styled.div`
  display: flex;
  @media ${device.laptopL} {
    flex-direction: column;
  }
`;

export const RightBlock = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-top: 24px;
  @media ${device.laptopL} {
    margin-left: 0;
  }
  @media ${device.laptop} {
    margin-bottom: 30px;
    margin-top: 0px;
  }
`;

export const BlockOne = styled.div`
  width: 65%;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: ${(props) => `${props.theme.fontSizes.medium}`};
  line-height: 100%;
  color: ${(props) => `${props.theme.colors.darkGrey}`};
  margin: 24px 0 17px 0;
  width: 70%;
  @media ${device.mobileL} {
    font-size: 20px;
    line-height: 120%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  img {
    margin-right: 10px;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    img {
      margin-bottom: 10px;
    }
  }
`;

export const BlockTwo = styled.div`
  width: 25%;
  @media ${device.laptopL} {
    width: 70%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #2a2349;
  margin: 0 0 13px 0;
`;

export const SmallBlocks = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: 0 13px;
  }
`;

export const SmallBlock = styled.div`
  line-height: 120%;
  padding: 14px 0;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const BlockTitle = styled.h5`
  font-weight: 700;
  font-size: 14px;

  span {
    color: #d62c54;
  }
`;

export const BlockText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #706d7a;
`;

export const FavWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: end;
  margin-right: 12px;
`;

export const FavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const FavText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #2a2349;
`;

export const PriceTitle = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #2a2349;
  margin-bottom: 40px;
`;

export const Client = styled.div`
  width: 257px;
`;

export const ClientTop = styled.div`
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 17px;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #2a2349;
    margin-right: 15px;
  }
`;

export const ClientName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
`;

export const ClientContacts = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  margin: 0 0 2px 0;
`;

export const ClientContactShow = styled.span`
  display: block;
  color: #00ccdb;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin: 0 0 12px 0;
`;

export const ClientContact = styled.div`
  display: flex;
`;

export const ClientPhone = styled.p`
  font-size: 14px;
  line-height: 150%;
  color: #706d7a;
  margin: 0 16px 0 0;
`;

export const ClientNumbers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientNumber = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  margin: 0 0 7px 0;
`;

export const WriteButton = styled.button`
  background: #2a2349;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 10px 0px;
  width: 247px;
  margin-bottom: 17px;

  img {
    margin-right: 10px;
  }
`;

export const TextButton = styled(WriteButton)`
  background: #69a042;
`;

export const Similiar = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  margin: 0 0 21px 0;
`;

export const SimiliarWrapper = styled.div`
  margin-bottom: 50px;
`;
