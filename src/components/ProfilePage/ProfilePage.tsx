import { env } from 'process';
import React, { useState } from 'react';
import useSWR from 'swr';
import { ProfileLink, DesktopNavigation } from '../Header/Header.style';
import { Container } from '../Styles/sharedstyles';
import styles from './ProfilePage.module.scss';

const Profile = () => {
  const [activePage, setActivePage] = useState('Мои объявления');
  const { email } =
    typeof window !== 'undefined' &&
    localStorage.getItem('currentUser') &&
    JSON.parse(localStorage.getItem('currentUser') || '');

  console.log("email", email );
  console.log('env', process.env.SUPER_ADMIN);
  console.log(email === process.env.SUPER_ADMIN);
  
  //     const fetcher = (...args) => fetch(...args).then(res => res.json())

  //   const { data, error } = useSWR('/api/user/123', fetcher)

  //   if (error) return <div>ошибка загрузки</div>
  //   if (!data) return <div>загрузка...</div>

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.body}>
          <div className={styles.name}>
            <span>Имя пользователя:</span> <div>Зубенко Михаил</div>
          </div>

          <ul className={styles.list}>
            <ProfileLink
              desktop={activePage === 'Мои объявления' ? true : false}
              onClick={() => setActivePage('Мои объявления')}
            >
              Мои объявления
            </ProfileLink>
            <ProfileLink
              desktop={activePage === 'История транзакций' ? true : false}
              onClick={() => setActivePage('История транзакций')}
            >
              История транзакций
            </ProfileLink>
            <ProfileLink
              desktop={activePage === 'Избранные' ? true : false}
              onClick={() => setActivePage('Избранные')}
            >
              Избранные
            </ProfileLink>
            <ProfileLink
              desktop={activePage === 'Сообщения' ? true : false}
              onClick={() => setActivePage('Сообщения')}
            >
              Сообщения
            </ProfileLink>
            <ProfileLink
              desktop={activePage === 'Настройки' ? true : false}
              onClick={() => setActivePage('Настройки')}
            >
              Настройки
            </ProfileLink>
            {email === process.env.SUPER_ADMIN ? (
              <li
                // desktop={activePage === 'Админ панель' ? true : false}
                onClick={() => setActivePage('Админ панель')}
              >
                Админ панель
              </li>
            ) : (
              <li>
                asd
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
