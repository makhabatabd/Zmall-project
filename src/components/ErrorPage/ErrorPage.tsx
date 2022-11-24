import React from 'react';
import { ImageWrapper, SubTitle, Text, Title, Wrapper } from './Error.style';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <Wrapper>
      <Title>zmall</Title>
      <SubTitle>Страница не найдена</SubTitle>
      <Text>
        Страницы, на которую вы попытались попасть не существует. Попробуйте её
        найти вернувшись на <Link href={'/'}>главную страницу.</Link> Если вы
        уверены в том, что эта страница здесь должна быть, то{' '}
        <Link href={'#'}>напишите нам</Link>, пожалуйста.
      </Text>
      <ImageWrapper>
        <Image src="/error/errorImage.png" alt="the error-image" fill />
      </ImageWrapper>
    </Wrapper>
  );
};

export default ErrorPage;
