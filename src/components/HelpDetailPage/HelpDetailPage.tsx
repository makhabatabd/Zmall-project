import React, { useEffect, useState } from 'react';
import {
  HelpDetailPageAnother,
  HelpDetailPageDescription,
  HelpDetailPageFlexBox,
  HelpDetailPageSection,
  HelpDetailPageTitle,
} from '@/components/HelpDetailPage/HelpDetailPage.style';
import {
  HelpItem,
  HelpItemSubtitle,
  HelpItemTitle,
  HelpOftenQuestion,
  HelpOftenQuestionTitle,
} from '@/components/HelpPage/HelpPage.style';
import { IHelpData, IHelpDetail, IHelpItem } from '@/types';

interface IProps {
  detailData:IHelpDetail
  category: IHelpData
}

const HelpDetailPage = ({detailData, category} : IProps) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <HelpDetailPageSection>
      <HelpDetailPageTitle>{detailData.title}</HelpDetailPageTitle>
      <HelpDetailPageFlexBox>
        <div>
          <HelpDetailPageDescription dangerouslySetInnerHTML={{__html: render ? detailData?.text : ""}}/>
          <HelpDetailPageAnother>
            <HelpItem>
              <HelpItemTitle>Другие вопросы из этого раздела</HelpItemTitle>
              {category?.results[0]?.help?.map((it: IHelpItem) => {
                return(
                  <HelpItemSubtitle key={it?.id}>{it?.title}</HelpItemSubtitle>
                )
              })}
            </HelpItem>
          </HelpDetailPageAnother>
        </div>
        <HelpOftenQuestion>
          <HelpOftenQuestionTitle>Частые вопросы</HelpOftenQuestionTitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
          <HelpItemSubtitle>Как продать объявление?</HelpItemSubtitle>
        </HelpOftenQuestion>
      </HelpDetailPageFlexBox>
    </HelpDetailPageSection>
  );
};

export default HelpDetailPage;
