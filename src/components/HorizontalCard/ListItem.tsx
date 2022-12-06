import React, { useState } from 'react';
import { ListCard } from '@/ui/listCard/ListCard';
import {
  ActiveTab,
  EmptyProducts,
  FilterBy,
  FilterPanel,
  FilterWrapper,
  InputWrapper,
  Label,
  ListSort,
  ListTitle,
  StyledDate,
  StyledImage,
  StyledItem,
  StyledLine,
  WrapperCity,
} from './ListItem.style';
import { Container } from '@/components/Styles/sharedstyles';
import { useAppSelector } from '@/hooks';
import { selectMainState } from '@/store/mainSlice';
import CategoryGood from '@/components/CategoryGood/CategoryGood';
import Pagination from '@/components/Pagination/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface IProps {
  sub: string;
}

export const ListItem = ({ sub, id }: IProps) => {
  const data = useAppSelector(selectMainState);
  const [isActive, setIsActive] = useState(true);
  const [isList, setIsList] = useState(true);
  const [pageCount, setPageCount] = useState<number>(16);
  const [openPrice, setOpenPrice] = useState<boolean>(false);
  const [openCity, setOpenCity] = useState<boolean>(false);

  const onChange = () => {
    setIsActive(!isActive);
  };

  const onChangeListItem = () => {
    setIsList(!isList);
    setPageCount(isList ? 10 : 16);
  };
  const router = useRouter();
  const [filter, setFilter] = useState({
    price: 0,
    max_price: 0,
    cities: [],
    has_image: false,
  });

  const filterData = () => {
    // console.log('FILTERDATA');
    router.push({
      pathname: `${router.pathname}`,
      query: {
        id: id,
        // limit: 10,
        // offset: 0,
        price: filter.price,
        max_price: filter.max_price,
        cities: filter.cities.map((item) => item).join(','),
        has_image: filter.has_image,
      },
    });
    // console.log(filter);
  };

  const setPrice = (e) => {
    // console.log(e.target.value);
    setFilter((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  const setMaxPrice = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      max_price: e.target.value,
    }));
  };

  const setCity = (e) => {
    let updatedList = [...filter.cities];
    if (e.target.checked) {
      updatedList = [...filter.cities, e.target.value];
    } else {
      updatedList.splice(filter.cities.indexOf(e.target.value), 1);
    }
    setFilter((prevState) => ({
      ...prevState,
      cities: updatedList,
    }));
  };

  const setPhoto = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      has_image: !!e.target.checked,
    }));
  };

  const resetFilter = () => {
    // console.log('RESET');
  };

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <div>
          <ListTitle>
            {/*{sub*/}
            {/*  ? data?.results?.results[0]?.category*/}
            {/*  : data?.results?.results[0]?.child_category}*/}
            <span>{data?.results?.count} объявление</span>
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
          <div>
            {!data?.results?.count && (
              <EmptyProducts>Нет товаров</EmptyProducts>
            )}
            {isList ? (
              data?.results?.results?.map((item) => (
                <ListCard
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  category={item.category}
                  location={item.location}
                />
              ))
            ) : (
              <CategoryGood data={data} />
            )}
            <Pagination data={data} pageCount={pageCount} />
          </div>
        </div>
        <FilterWrapper>
          <h3>Фильтры</h3>
          <FilterPanel>
            <FilterBy>
              <div onClick={() => setOpenPrice(!openPrice)}>
                <Image
                  src="/main/open-arrow.svg"
                  width={9}
                  height={6}
                  alt="openArrow"
                />
                <span>Цена</span>
              </div>
              {openPrice && (
                <InputWrapper>
                  <input
                    type="number"
                    placeholder="от"
                    value={filter.price}
                    onChange={(e) => setPrice(e)}
                  />
                  -
                  <input
                    onChange={(e) => setMaxPrice(e)}
                    type="number"
                    placeholder="до"
                    value={filter.max_price}
                  />
                </InputWrapper>
              )}
            </FilterBy>
            <FilterBy>
              <div onClick={() => setOpenCity(!openCity)}>
                <Image
                  src="/main/open-arrow.svg"
                  width={9}
                  height={6}
                  alt="openArrow"
                />
                <span>По городу</span>
              </div>
              {openCity && (
                <WrapperCity>
                  <Label>
                    Алматы
                    <input onChange={setCity} value="1" type="checkbox" />
                    <span></span>
                  </Label>
                  <Label>
                    Атырау
                    <input onChange={setCity} value="2" type="checkbox" />
                    <span></span>
                  </Label>
                  <Label>
                    Астана
                    <input onChange={setCity} value="3" type="checkbox" />
                    <span></span>
                  </Label>
                </WrapperCity>
              )}
            </FilterBy>
            <Label>
              Только с фото
              <input onChange={setPhoto} type="checkbox" />
              <span></span>
            </Label>
            <button onClick={() => filterData()}>Применить</button>
            <p onClick={resetFilter}>Сбросить фильтры</p>
          </FilterPanel>
        </FilterWrapper>
      </div>
    </Container>
  );
};
