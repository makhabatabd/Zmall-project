import React from 'react';
import {
  PackageImgBox,
  PackageSection,
  PackageSubTitle,
  PackageTextBox,
  PackageTitle,
} from './Packages.style';
import { PackageSvg } from '../SVG';

const Packages = () => {
  return (
    <PackageSection>
      <PackageImgBox>{PackageSvg}</PackageImgBox>
      <PackageTextBox>
        <PackageTitle>Платные пакеты и промоуслуги</PackageTitle>
        <PackageSubTitle>
          В это нелёгкое время мы решили, быть максимально дружественными к
          посетителям нашего сервиса и разработали для них антизисные платные
          пакеты для размещения вакансий!
        </PackageSubTitle>
      </PackageTextBox>
    </PackageSection>
  );
};

export default Packages;
