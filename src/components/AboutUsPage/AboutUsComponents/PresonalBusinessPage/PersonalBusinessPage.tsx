import React from 'react';
import {
  BusinessImgBox,
  BusinessSection,
  BusinessSubTitle,
  BusinessSubTitleDetail,
  BusinessTextBox,
  BusinessTitle,
} from './PersonalBusiness.style';
import { BusinessSvg } from '../SVG';

const PersonalBusinessPage = () => {
  return (
    <BusinessSection>
      <BusinessImgBox>{BusinessSvg}</BusinessImgBox>
      <BusinessTextBox>
        <BusinessTitle>Персональная бизнес-страница</BusinessTitle>
        <BusinessSubTitle>
          Благодаря разделу «Магазины» вы можете создать собственную страницу на
          Bazar.kz и размещать там все свои вакансии. Для этого вам необходимо{' '}
          <span>выбрать один из абонементов*</span> и вы получите страницу с
          названием, логотипом, описанием компании, списком ваших вакансий,
          контактной информацией, а так же всеми другими услугами доступными в
          этом абонементе.
        </BusinessSubTitle>
        <BusinessSubTitleDetail>
          <span>*</span> Более подробно ознакомиться со всеми возможностями
          «Магазинов» можно на отдельной промо-странице.
        </BusinessSubTitleDetail>
      </BusinessTextBox>
    </BusinessSection>
  );
};

export default PersonalBusinessPage;
