import React, { useState, useEffect } from 'react';
import { ProfileLink } from './ProfileLink';
import { Container } from '../Styles/sharedstyles';
import { Body, Link, List, Name, Wrapper } from './ProfilePage.style';
import ProfileCategories from './ProfileCategories';
import { ProfileOrders } from './ProfileOrders';
import { ProfilesFavorites } from './ProfilesFavorites';
import { ProfileSettings } from './ProfileSettings';
import { useGetUsersDataQuery } from '@/store/profile.api';

const Profile = () => {
  useGetUsersDataQuery();
  const [activePage, setActivePage] = useState('Мои объявления');
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const { email } =
    typeof window !== 'undefined' &&
    localStorage.getItem('currentUser') &&
    JSON.parse(localStorage.getItem('currentUser') || '');

  const links = [
    'Мои объявления',
    'История транзакций',
    'Избранные',
    'Сообщения',
    'Настройки',
  ];

  useEffect(() => {
    if (email === process.env.SUPER_ADMIN) setIsSuperAdmin(true);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Body>
            <Name>
              <span>Имя пользователя:</span> <div>Зубенко Михаил</div>
            </Name>

            <List>
              {links.map((link: string) => (
                <ProfileLink
                  key={link}
                  link={link}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              ))}
              {isSuperAdmin ? (
                <Link
                  desktop={activePage === 'Админ панель' ? true : false}
                  onClick={() => setActivePage('Админ панель')}
                >
                  Админ панель
                </Link>
              ) : null}
            </List>
          </Body>
        </Container>
      </Wrapper>

      {activePage === 'Мои объявления' && <ProfileCategories />}
      {activePage === 'История транзакций' && <ProfileOrders />}
      {activePage === 'Избранные' && <ProfilesFavorites />}
      {activePage === 'Настройки' && <ProfileSettings />}
    </>
  );
};

export default Profile;
