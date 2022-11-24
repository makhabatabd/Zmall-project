import React, { useState, useEffect, useRef } from 'react';
import { useClickOutside } from '@/hooks';

import { SelectCategory } from './Categories/SelectCategory';

import css from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

export const SearchBlock = () => {
  const [isActiveCategories, setIsActiveCategories] = useState(false);
  const [category, setCategory] = useState<{ name: string }>();
  const [value, setValue] = useState('');
  const [isShowSearchResult, setIsShowSearchResult] = useState(false);
  const categories: number[] = [];
  const [searchedGoods, setSearchedGoods] = useState([]);
  console.log(searchedGoods, 'searched goods');

  const getGoodsBySearch = async (value: string) => {
    console.log(value, 'value');
    try {
      const response = await axios(
        'http://188.225.83.42:8001/api/v1/advertisement/list/'
      );
      setSearchedGoods(response.data.results);
    } catch (e) {
      console.log(e, 'error');
    }
  };

  useEffect(() => {
    getGoodsBySearch(value);
    value && setIsShowSearchResult(true);
  }, [value]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setIsActiveCategories(false);
  });

  return (
    <div className={css.searchBlock}>
      <div className={css.container}>
        <div className={css.block}>
          <form onSubmit={handlerSubmit} className={css.search}>
            <div
              className={css.dropDown}
              onClick={() => setIsActiveCategories(true)}
              ref={ref}
            >
              {category?.name || ' Во всех категориях'}
              <Image
                src="/header/arrow-down.svg"
                alt="arrow"
                width={40}
                height={40}
                className={css.dropdownIcon}
                style={{
                  transform: isActiveCategories
                    ? 'rotate(0deg)'
                    : 'rotate(180deg)',
                  transition: '0.4s',
                }}
              />
            </div>
            {isActiveCategories && (
              <SelectCategory
                categories={categories || []}
                selectedCategory={category}
                onSelectCategory={setCategory}
                onClose={() => setIsActiveCategories(false)}
              />
            )}
            <div className={css.line}></div>
            <input
              type="text"
              placeholder="Поиск по объявлениям"
              className={css.seacrhInput}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onClick={() => setIsShowSearchResult(true)}
            />
            <div className={css.searchAdvert}>
              {isShowSearchResult && value
                ? searchedGoods.map(
                    (
                      item: { id: number; name: string; start_price: number },
                      i
                    ) => (
                      <Link
                        href={`/detail/${item.id}`}
                        className={css.item}
                        key={i}
                        onClick={() => setValue('')}
                      >
                        <Image
                          src="/main/good.png"
                          width={40}
                          height={40}
                          alt="good"
                        />
                        <div className={css.text}>
                          <p className={css.title}>{item.name}</p>
                          <p className={css.number}>{item.start_price} ₸</p>
                        </div>
                      </Link>
                    )
                  )
                : //  (
                  //   <Link
                  //     href={`/detail/${72}`}
                  //     className={css.item}
                  //     onClick={() => setValue('')}
                  //   >
                  //     <div className={css.text}>
                  //       <p className={css.title}>{'Aidar'}</p>
                  //       <p className={css.number}>{500000} ₸</p>
                  //     </div>
                  //   </Link>
                  // )
                  // advertsData?.results.map((item, i) => (
                  //     <Link
                  //       href={`/detail/${item.id}`}
                  //       className={css.item}
                  //       key={i}
                  //       onClick={() => setValue('')}
                  //     >
                  //       <div className={css.text}>
                  //         <p className={css.title}>{item.name}</p>
                  //         <p className={css.number}>{item.start_price} ₸</p>
                  //       </div>
                  //     </Link>
                  //   ))
                  null}
            </div>
            <button type="submit" className={css.seacrhBtn}>
              <span>найти</span>
              <Image
                src="/header/search.svg"
                alt="searchIcon"
                className={css.seacrhIcon}
                width={40}
                height={40}
              />
            </button>
          </form>
          <Link className={css.btn} href="/">
            <Image
              src="/header/plus-circle.svg"
              alt="searchIcon"
              width={30}
              height={30}
              className={css.plus}
            />
            <span>добавить объявление</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
