import React from 'react';
import {
  SearchImgBox,
  SearchSection,
  SearchSubTitle,
  SearchTextBox,
  SearchTitle,
} from './Search.styles';
import { SearchPeople } from '../SVG';

const Search = () => {
  return (
    <SearchSection>
      <SearchTextBox>
        <SearchTitle>Ищите работу и публикуйте вакансии</SearchTitle>
        <SearchSubTitle>
          В отличии от конкурентов, мы позволяем разместить у себя одно{' '}
          <b>бесплатное объявление</b> в разделе «Работа» с одного аккаунта, что
          позволяет как соискателям, так и работадателям быстро и без затрат
          закрыть срочные потребности в поиске работы или вакансии.
        </SearchSubTitle>
      </SearchTextBox>
      <SearchImgBox>{SearchPeople}</SearchImgBox>
    </SearchSection>
  );
};

export default Search;
