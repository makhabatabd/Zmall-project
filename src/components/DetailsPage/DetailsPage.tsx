import { DetailsPageProps } from '@/../pages/detail/[id]';
import { ListCard } from '@/ui/listCard/ListCard';
import React from 'react';
import { Container } from '../Styles/sharedstyles';
import { DetailContact } from './DetailContact';
import { DetailDescription } from './DetailDescription';
import {
  DetailInner,
  Similiar,
  SimiliarWrapper,
  Wrapper,
} from './Details.style';

const DetailsPage = ({ data, similar }: DetailsPageProps) => {
  return (
    <>
      <Wrapper>
        <Container style={{ width: '100%', padding: '15px' }}>
          <DetailInner>
            <DetailDescription data={data} />
            <DetailContact data={data} />
          </DetailInner>
          {similar ? (
            <SimiliarWrapper>
              <Similiar>Похожие объявления</Similiar>
              {similar?.results?.map((item) => (
                <ListCard
                  id={item.id}
                  key={item.id}
                  image="/main/good.png"
                  price={item.price}
                  description={item.description}
                  date={item.modified_at}
                  category={item.category}
                  is_favorite={item.is_favorite}
                />
              ))}
            </SimiliarWrapper>
          ) : null}
        </Container>
      </Wrapper>
    </>
  );
};

export default DetailsPage;
