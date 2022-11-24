import React, { useState } from 'react';
import { ListCard } from '@/ui/listCard/ListCard';
import {
  ActiveTab,
  ListSort,
  ListTitle,
  StyledDate,
  StyledImage,
  StyledItem,
  StyledLine,
} from './ListItem.style';
import { Container } from '@/components/Styles/sharedstyles';

const data = [
  {
    id: 1,
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg?impolicy=resize&imwidth=480',
    price: '23 000 890',
    title: 'Продаётся новая Toyota RAV4 2018 г.в.',
    description:
      'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
    date: 'сегодня, 12: 56,',
    category: 'cars',
    location: 'Bishkek',
  },
  {
    id: 2,
    image:
      'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

    price: '23 000 890',
    title: 'Продаётся новая Toyota RAV4 2018 г.в.',
    description:
      'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
    date: 'сегодня, 12: 56,',
    category: 'cars',
    location: 'Bishkek',
  },
  {
    id: 3,
    image:
      'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

    price: '23 000 890',
    title: 'Продаётся новая Toyota RAV4 2018 г.в.',
    description:
      'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
    date: 'сегодня, 12: 56,',
    category: 'cars',
    location: 'Bishkek',
  },
  {
    id: 4,
    image:
      'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

    price: '23 000 890',
    title: 'Продаётся новая Toyota RAV4 2018 г.в.',
    description:
      'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
    date: 'сегодня, 12: 56,',
    category: 'cars',
    location: 'Bishkek',
  },
];

export const ListItem = () => {
  const [isActive, setIsActive] = useState(true);
  const [isList, setIsList] = useState(true);

  const onChange = () => {
    setIsActive(!isActive);
  };

  const onChangeListItem = () => {
    setIsList(!isList);
  };

  return (
    <Container>
      <ListTitle>
        Электроника в Казахстане <span>40 991 объявление</span>
      </ListTitle>
      <ListSort>
        <StyledItem>
          <p onClick={onChangeListItem}>
            Галереей
            <StyledImage
              src="/icons/card/gallery.svg"
              alt="gallery"
              width={16}
              height={16}
            />
            {isList ? <ActiveTab /> : null}
          </p>

          <p onClick={onChangeListItem}>
            Списком
            <StyledImage
              src="/icons/card/listicon.svg"
              alt="list"
              width={16}
              height={16}
            />
            {!isList ? <ActiveTab /> : null}
          </p>
        </StyledItem>
        <StyledDate>
          <p onClick={onChange}>
            По дате
            <StyledImage
              src="/icons/card/dateIcon.svg"
              alt="date"
              width={16}
              height={16}
            />
            {isActive ? <ActiveTab /> : null}
          </p>
          <p onClick={onChange}>
            По цене
            <StyledImage
              src="/icons/card/price.svg"
              alt="price"
              width={16}
              height={16}
            />
            {!isActive ? <ActiveTab /> : null}
          </p>
        </StyledDate>
      </ListSort>
      <StyledLine />
      {data?.map((item) => (
        <ListCard
          key={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          description={item.description}
          date={item.date}
          category={item.category}
          location={item.location}
          id={0}
          is_favorite={false}
        />
      ))}
    </Container>
  );
};
