import React from 'react';
import { ImageWrapper, SubTitle, Text, Title, Wrapper } from './Error.style';
import Image from 'next/image';

const ErrorPage = () => {
  return (
    <Wrapper>
      <Title>zmall</Title>
      <SubTitle>Страница не найдена</SubTitle>
      <Text>
        Страницы, на которую вы попытались попасть не существует. Попробуйте её
        найти вернувшись на <a>главную страницу.</a> Если вы уверены в том, что
        эта страница здесь должна быть, то <a>напишите нам</a>, пожалуйста.
      </Text>
      <ImageWrapper>
        <Image src="/error/errorImage.png" alt="the error-image" fill />
      </ImageWrapper>
    </Wrapper>
  );
};

export default ErrorPage;
