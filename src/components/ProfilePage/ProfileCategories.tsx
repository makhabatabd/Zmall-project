import { useGetUsersAdvertsQuery } from '@/store/profile.api';
import { GoodSkeleton } from '@/ui/GoodSkeleton/GoodSkeleton';
import { ActiveListCard } from '@/ui/listCard/ActiveListCard';
import React, { useState } from 'react';
import Statistics from '../StatisticModal/Statistics';
import { Container } from '../Styles/sharedstyles';
import { ProfileAdvertsSearch } from './ProfileAdvertsSearch';
import { ProfileEmptyData } from './ProfileEmptyAdverts';
import { ProfileLink } from './ProfileLink';
import { List, Nav, Body, Wrapper } from './ProfilePage.style';

const ProfileCategories = () => {
  const [activePage, setActivePage] = useState('Все категории');
  const { data } = useGetUsersAdvertsQuery();
  const [statistics, setStatictics] = useState(false);
  const [value, setValue] = useState('');
  const links = ['Все категории', 'Активные', 'На проверке', 'Неактивные'];

  const results = {
    '19.09.2022': {
      phone_views_count: 0,
      views_count: 0,
    },
    phone_views_count: 0,
    views_count: 4,
    '26.09.2022': {
      phone_views_count: 0,
      views_count: 1,
    },
    '30.09.2022': {
      phone_views_count: 0,
      views_count: 1,
    },
    '14.11.2022': {
      phone_views_count: 0,
      views_count: 1,
    },
    '21.11.2022': {
      phone_views_count: 0,
      views_count: 1,
    },
  };

  return (
    <Wrapper white bottom>
      {statistics && (
        <Statistics
          setStatictics={setStatictics}
          statistics={statistics}
          result={results}
        />
      )}
      <Container>
        <Body>
          <Nav>
            <List>
              {links.map((link: string) => (
                <ProfileLink
                  key={link}
                  link={link}
                  activePage={activePage}
                  setActivePage={setActivePage}
                  isInverted={true}
                />
              ))}
              <ProfileAdvertsSearch setValue={setValue} value={value} />
            </List>
          </Nav>

          {data ? (
            data?.results
              .filter((item) =>
                activePage === 'Все категории'
                  ? item.name.toLowerCase().includes(value.toLowerCase())
                  : item.type.slice(0, 6) === activePage.slice(0, 6) &&
                    item.name.toLowerCase().includes(value.toLowerCase())
              )
              .slice(0, 10).length > 0 ? (
              data?.results
                .filter((item) =>
                  activePage === 'Все категории'
                    ? item.name.toLowerCase().includes(value.toLowerCase())
                    : item.type.slice(0, 6) === activePage.slice(0, 6) &&
                      item.name.toLowerCase().includes(value.toLowerCase())
                )
                .slice(0, 10)
                .map((item) => (
                  <ActiveListCard
                    key={item.id}
                    price={item.price}
                    title={item.name}
                    publication_date={item.modified_at}
                    views={item.views_count}
                    category={item.category}
                    contacts={item.phone_view_count}
                    image={item.images[0]}
                    setStatictics={setStatictics}
                    statistics={statistics}
                  />
                ))
            ) : (
              <ProfileEmptyData title={'Список объявлений пустой'} />
            )
          ) : (
            <GoodSkeleton />
          )}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default ProfileCategories;
