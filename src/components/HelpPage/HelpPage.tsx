import React from 'react';
import {
  HelpContentFlexBox,
  HelpFlexBox,
  HelpItem,
  HelpItemSubtitle,
  HelpItemTitle,
  HelpOftenQuestion,
  HelpOftenQuestionTitle,
  HelpPageSection,
  HelpTitle,
} from '@/components/HelpPage/HelpPage.style';
import { IHelpData } from '@/types';
import Link from 'next/link';
import { getHelpDetail } from '@/api';

interface IProps {
  data :IHelpData
}


const HelpPage = ({ data }:IProps) => {

  return (
    <HelpPageSection>
      <HelpTitle>Помощь по сайту</HelpTitle>
      <HelpFlexBox>
        <HelpContentFlexBox>
          {data?.results.map((it) => {
            return (
              <HelpItem key={it.id}>
                <HelpItemTitle>{it.name}</HelpItemTitle>
                {it.help.map(quest => {
                  return (
                    <HelpItemSubtitle key={quest.id} onClick={() => getHelpDetail( quest.id )}><Link href={`/help-page/${quest.id}`}>{quest.title}</Link></HelpItemSubtitle>
                  )
                })}
              </HelpItem>
            )
          })}
        </HelpContentFlexBox>
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
      </HelpFlexBox>
    </HelpPageSection>
  );
};

export default HelpPage;
