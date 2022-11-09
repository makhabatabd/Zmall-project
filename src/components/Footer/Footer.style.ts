import styled from 'styled-components';
import { deviceMobileFirst as device } from '../Theme/Theme';

export const About = styled.div``;

export const Catalog = styled.div``;

export const Cities = styled.div`
  @media ${device.laptop} {
    margin-top: 2em;
  }
`;

export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  color: white;
  padding: 1em 10px 1.5em 10px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 3em;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0;
  margin: 0;
  font-size: 14px;
  @media ${device.laptop} {
    align-items: flex-start;
    justify-content: stretch;
  }
`;

export const ListColumn = styled(List)`
  flex-direction: column;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  @media ${device.laptop} {
    max-width: 520px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 2em;
  text-align: center;

  a,
  img {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const Wrapper = styled.footer`
  background-color: ${(props) => `${props.theme.colors.purple}`};
`;

export const Title = styled.h2`
  color: ${(props) => `${props.theme.colors.cyan}`};
  margin: 1em 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
  @media ${device.laptop} {
    text-align: left;
  }
`;
