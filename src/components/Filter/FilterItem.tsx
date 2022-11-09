import React from 'react';
import { Container } from './FilterItem.style';

export const FilterItem = () => {
  return (
    <Container>
      <div>
        <div>
          <p>цена</p>
          <input />
          -
          <input />
        </div>
        <div>
          <ul>
            <li>Актау</li>
            <li>Актобе </li>
            <li>Алматы</li>
            <li>Атырау</li>
            <li>Балхаш</li>
          </ul>
          <p>Только с фото</p>
        </div>
        <button>применить</button>
        <p>Сбросить фильтры</p>
      </div>
    </Container>
  );
};
