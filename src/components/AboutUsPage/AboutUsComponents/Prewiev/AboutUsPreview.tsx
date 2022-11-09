import React from 'react';
import {
  Preview,
  PreviewContainer,
  PreviewDescription,
  PreviewDescriptionBtn,
  PreviewDescriptionSubtitle,
  PreviewDescriptionTitle,
  PreviewImg,
  PreviewSubTitle,
  PreviewTextContent,
  PreviewTitle,
} from './AboutUsPreview.style';
import { groupOfPeople } from '../SVG';

const AboutUsPreview = () => {
  return (
    <Preview>
      <PreviewContainer>
        <PreviewTextContent>
          <PreviewTitle>
            По популярности, на Zmall, раздел «Работа» входит в
          </PreviewTitle>
          <PreviewSubTitle>ТОП-5</PreviewSubTitle>
        </PreviewTextContent>
        <PreviewImg>{groupOfPeople}</PreviewImg>
      </PreviewContainer>
      <PreviewDescription>
        <PreviewDescriptionTitle>
          В «Работе» всегда много «горящих» предложений от работадателей.
        </PreviewDescriptionTitle>
        <PreviewDescriptionSubtitle>
          Десятки новых вакансий ежедневно, сотни в месяц по различным
          направлениям от контент-менеджеров и экскаваторщиков до руководителей
          отделом и директоров.
        </PreviewDescriptionSubtitle>
        <PreviewDescriptionBtn>
          посмотреть раздел «работа»
        </PreviewDescriptionBtn>
      </PreviewDescription>
    </Preview>
  );
};

export default AboutUsPreview;
