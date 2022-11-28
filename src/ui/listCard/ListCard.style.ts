import styled from 'styled-components';
import { device } from '../../components/Theme/Theme';

export const Container = styled.div`
  margin-top: 23px;
  max-width: 1064px;
  min-height: 184px;
  background: #ffffff;
  border-radius: 8px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.1));
`;

export const StyledImage = styled.img`
  max-width: 248px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin: auto;
  display: block;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: -webkit-fill-available;
    display: block;
    margin: 0 auto;
  }
  @media${device.tablet} {
    flex-direction: column;
  }
`;

export const ListItems = styled.div`
  width: 70%;
  position: relative;
  padding: 16px 23px 13px;
  display: flex;
  justify-content: space-between;

  @media${device.tablet} {
    width: 100%;
    justify-content: center;
    padding-top: 40px;
    gap: 10px;
  }

  @media${device.mobileL} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListItem = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    width: 100%;
  }
`;

export const ItemPrice = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  display: flex;
  align-items: flex-end;
  color: #444444;

  @media ${device.mobileL} {
    font-size: 17px;
  }

  @media ${device.mobileM} {
    font-size: 14px;
  }
`;

export const ItemTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #2a2349;
  padding: 4px 0 13px;

  @media ${device.mobileM} {
    font-size: 12px;
  }
`;

export const ItemDescription = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: #828282;
`;

export const ItemDate = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #828282;
  padding-top: 32px;
`;

export const ItemLocation = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #828282;
`;

export const ListItemRightBlock = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;

export const FavoriteBlock = styled.div`
  position: absolute;
  top: 80%;
  left: 90%;

  @media ${device.tablet} {
    top: 29px;
    left: 83%;
  }
`;

export const ActiveItemCategory = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #828282;
`;

export const ActiveItemPublication = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #828282;
`;

export const ActiveItemViews = styled.span`
  display: flex;
  gap: 10px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #828282;
`;
export const AdvertiseButton = styled.button`
  margin: 14px 0;
  max-width: 230px;
  height: 41px;
  padding: 5px 16px;
  background: #00ccdb;
  border-radius: 8px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const ActiveItemRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    display: flex;
    gap: 5px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #bdbdbd;
  }
`;

export const ActiveItemTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #2a2349;
`;
