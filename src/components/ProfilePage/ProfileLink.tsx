import React from 'react';
import { Link } from './ProfilePage.style';

interface IProps {
  link: string;
  activePage: string;
  setActivePage: (link: string) => void;
  count?: string;
  isInverted?: boolean;
}

export const ProfileLink = ({
  link,
  activePage,
  setActivePage,
  count,
  isInverted,
}: IProps) => {
  return (
    <Link
      isInverted={isInverted}
      desktop={activePage === link}
      onClick={() => setActivePage(link)}
    >
      {link} {count}
    </Link>
  );
};
