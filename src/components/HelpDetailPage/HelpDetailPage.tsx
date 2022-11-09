import React from 'react';
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

const HelpDetailPage = () => {
  return (
    <HelpDetailPageSection>
      <HelpDetailPageTitle>Как сделать `Турбо-продажу`?</HelpDetailPageTitle>
      <HelpDetailPageFlexBox>
        <div>
          <HelpDetailPageDescription>
            Сделать «Турбо-продажу» можно на странице объявления, нажав в правом
            блоке сайта: «Турбо-продажа на 30 дней».
            <br />
            <br />
            1. На странице объявления, нажмите «Турбо-продажа на 30 дней»;
            <br />
            2. Выберите способ оплаты;
            <br />
            3. Нажмите «Продолжить»;
            <br />
            4. Вас перенаправит на сайт Robokassa или Единный кошелек, затем
            выберите способ оплаты наиболее удобный для Вас и следуйте
            дальнейшим инструкциям.
            <br />
            <br />
            Если Вам нужна будет помощь, не стесняйтесь обратиться к нам через
            `Обратную связь`.
            <br />
            Будем рады помочь. <br />
            <br />
            <br />
            Вы можете пополнить ваш личный счет по такой же схеме.
          </HelpDetailPageDescription>
          <HelpDetailPageAnother>
            <HelpItem>
              <HelpItemTitle>Другие вопросы из этого раздела</HelpItemTitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>
                Как добавить объявление в избранное
              </HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
              <HelpItemSubtitle>Как подать обьявление?</HelpItemSubtitle>
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
