import React, { useState } from 'react';
import {
  BenefitCategories,
  BenefitCategoriesItem,
  BenefitClockBox,
  BenefitPrice,
  BenefitSection,
  BenefitSubTitle,
  BenefitSvgBox,
  BenefitTextBox,
  BenefitTitle,
} from './Benefits.styles';
import { ClockSvg, LaptopSvg } from '../SVG';

const Benefits: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState(0);

  const categoriesArr = [
    'Платные пакеты',
    'Пакет «Турбо»',
    'Премиум',
    'Поднятие',
    'Выделение',
    'Срочно',
    'Топ',
  ];

  return (
    <BenefitSection>
      <BenefitClockBox>{ClockSvg}</BenefitClockBox>
      <BenefitTextBox>
        <BenefitTitle>Пакеты объявлений</BenefitTitle>
        <BenefitSubTitle>
          В зависимости от того, сколько вы готовы размещать вакансий имеется
          есть широкий набор пакетов размещений объявлений: от 300 тенге за 1
          объявление, до 10 000 тенге за 50!
        </BenefitSubTitle>
        <BenefitPrice>от 300 до 10 000 тенге</BenefitPrice>
      </BenefitTextBox>
      <BenefitSvgBox>{LaptopSvg}</BenefitSvgBox>

      <BenefitCategories>
        {categoriesArr.map((it, idx) => {
          return (
            <BenefitCategoriesItem
              onClick={() => setSelectedCategories(idx)}
              key={idx}
            >
              {selectedCategories === idx ? <b>{it}</b> : it}
            </BenefitCategoriesItem>
          );
        })}
      </BenefitCategories>
    </BenefitSection>
  );
};

export default Benefits;
