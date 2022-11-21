import styled from 'styled-components';
import {
  deviceMobileFirst as device,
  device as DesktopFirst,
} from '../Theme/Theme';

export const TopHeader = styled.div`
  background-color: ${(props) => `${props.theme.colors.purple}`};
  color: white;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  color: ${(props) => `${props.theme.colors.cyan}`};
  cursor: pointer;
`;

export const Name = styled.span<{ desktop?: boolean }>`
  max-width: ${(props) => (props.desktop ? '150px' : '300px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;

  @media ${device.laptop} {
    max-width: ${(props) => props.desktop && '220px'};
  }
  @media ${device.laptopL} {
    max-width: ${(props) => props.desktop && '300px'};
  }
`;

export const Location = styled(Profile)<{ desktop?: boolean }>`
  display: ${(props) => (props.desktop ? 'none' : 'flex')};
  @media ${device.laptop} {
    display: flex;
  }
`;

export const BottonHeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const Favorites = styled(Profile)``;

export const Messages = styled(Profile)``;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const MobileNavbar = styled.div<{ isNavbar?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.powderWhite};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: ${(props) => (props.isNavbar ? '100%' : ' 0')};
  opacity: ${(props) => (props.isNavbar ? '0' : ' 1')};
  z-index: 10000;
  transition: all 0.3s;

  @media ${device.tablet} {
    display: none;
  }
`;

export const DesktopNavbar = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    color: white;
    width: 100%;
  }
`;

export const DesktopNavigation = styled.nav`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    color: white;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;

      margin: 0;
      padding: 0;
    }
  }
`;

export const DesktopLink = styled.li<{ desktop?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  height: 48px;
  padding: 10px 20px;
  position: relative;
  white-space: nowrap; 

  background-color: ${(props) => (props.desktop ? 'white' : 'transparent')};
  color: ${(props) => (props.desktop ? props.theme.colors.purple : 'white')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    width: 100%;
    transition: background-color 0.3s;
    background-color: ${(props) =>
      props.desktop ? props.theme.colors.cyan : 'transparent'};
  }

  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.purple};
  }
`;

export const ProfileLink = styled(DesktopLink)`
  color: ${(props) => (props.desktop ? props.theme.colors.purple : '#706D7A')};
`;

export const MobileNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    margin: 0;
    padding: 0;
  }

  li {
    flex-grow: 1;
    cursor: pointer;
    width: 100%;
    text-align: center;
    padding: 10px 20px;
    border: 1px solid white;
  }
`;

export const TopHeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const BottomHedaer = styled.div`
  background-color: white;
`;

export const BurgerClose = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 2px;
  z-index: 11;
  cursor: pointer;

  span:nth-child(1)::before {
    content: '';
    position: absolute;
    width: 25px;
    border-radius: 5px;
    height: 3px;
    background-color: white;
    top: calc(50% - 8px);
    left: 50%;
    transform: translate(-50%) rotate(45deg);
  }

  span:nth-child(2)::before {
    content: '';
    position: absolute;
    border-radius: 5px;
    width: 25px;
    height: 3px;
    background-color: white;
    top: calc(50% - 8px);
    left: 50%;
    transform: translate(-50%) rotate(-45deg);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Burger = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 2px;
  cursor: pointer;

  span:nth-child(1)::before {
    content: '';
    position: absolute;
    width: 25px;
    border-radius: 5px;
    height: 3px;
    background-color: white;
    top: calc(50% - 8px);
    left: 50%;
    transform: translate(-50%);
  }

  span:nth-child(2)::before {
    content: '';
    position: absolute;
    border-radius: 5px;
    width: 25px;
    height: 3px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }

  span:nth-child(3)::before {
    content: '';
    position: absolute;
    border-radius: 5px;
    width: 25px;
    height: 3px;
    background-color: white;
    top: calc(50% + 8px);
    left: 50%;
    transform: translate(-50%);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Logo = styled.div<{ mobile?: boolean }>`
  display: ${(props) => (props.mobile ? 'flex' : 'none')};
  justify-items: center;
  align-items: center;
  gap: 10px;
  width: 125px;
  height: 50px;
  left: 48px;
  top: 23px;
  font-weight: ${(props) => `${props.theme.fontWeights.bolder}`};
  color: ${(props) =>
    props.mobile ? 'white' : `${props.theme.colors.purple}`};
  font-size: ${(props) => (props.mobile ? '20px' : '50px')};
  line-height: 100%;

  @media ${device.tablet} {
    display: ${(props) => (props.mobile ? 'none' : 'block')};
  }
`;
