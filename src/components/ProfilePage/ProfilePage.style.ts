import Image from 'next/image';
import styled from 'styled-components';
// import {
//   deviceMobileFirst as device,
//   device as DesktopFirst,
// } from '../Theme/Theme';

import TransactionsSkeleton from './TransactionsSkeleton';

export const Wrapper = styled.div<{
  white?: boolean;
  bottom?: boolean;
  top?: boolean;
}>`
  background-color: ${(props) => (props.white ? 'white' : '#f2f2f2')};
  padding-bottom: ${(props) => (props.bottom ? '50px' : '0')};
  padding-top: ${(props) => (props.top ? '50px' : '0')};
`;

export const Nav = styled.nav`
  padding: 1em 0;
`;

export const Title = styled.h2`
  color: #444444;
`;

export const EmptyImage = styled(Image)`
  display: block;
  margin: 0 auto;
  max-width: -webkit-fill-available;
`;

export const SearchInput = styled.input`
  color: #706d7a;

  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  height: 48px;
  padding: 0 2.5em 0 1em;
  width: 384px;

  font-size: 16px;
  line-height: 110%;

  display: flex;
  align-items: center;

  &::placeholder {
    color: #706d7a;
  }
`;

export const Body = styled.div``;

export const ProfileBody = styled(Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-right: 1em;

  span {
    color: #444444;
  }

  div {
    color: #706d7a;
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-y: auto;
  gap: 1em;
  color: white;

  li + div {
    margin-left: 4em;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b3b3b3;
    border-radius: 100px;
  }
`;
export const DesktopLink = styled.li<{
  desktop?: boolean;
  isInverted?: boolean;
}>`
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

export const Link = styled(DesktopLink)`
  color: ${(props) => (props.desktop ? props.theme.colors.purple : '#706D7A')};

  &::before {
    bottom: ${(props) => (props.isInverted ? '0' : 'unset')};
    top: ${(props) => (props.isInverted ? 'unset' : '0')};
  }
`;

export const AdvertsStatusLink = styled(DesktopLink)``;

export const SearchIcon = styled(Image)`
  position: absolute;
  right: 10px;
  transform: translateY(-50%);
  top: 50%;
`;

export const Search = styled.div`
  position: relative;
`;

export const TableWrapper = styled.div<{ onlyBottom?: boolean }>`
  margin: ${(props) => (props.onlyBottom ? '0 0 41px 0' : '41px 0')};
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 8px;
  border-spacing: 0;
`;

export const Heading = styled.tr<{ black?: boolean }>`
  background-color: ${(props) => (props.black ? '#E0E0E0' : 'white')};
`;

export const Cell = styled.td`
  padding: 24px 26px;
`;

export const SkeletonTable = styled(TransactionsSkeleton)`
  display: block;
  margin: 0 auto;
`;

// export const Link = styled.li`

// `;
// export const  = styled.`

// `;
// export const  = styled.`

// `;
// export const  = styled.`
// `;
