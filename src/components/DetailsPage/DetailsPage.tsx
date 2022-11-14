import { DetailsPageProps } from '@/../pages/detail/[id]';
// import { ListCard } from '@/ui/listCard/ListCard';
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

const DetailsPage = ({ data }: DetailsPageProps) => {
  return (
    <>
      <Wrapper>
        <Container style={{ width: '100%', padding: '15px' }}>
          <DetailInner>
            <DetailDescription data={data} />
            <DetailContact data={data} />
          </DetailInner>
          <SimiliarWrapper>
            <Similiar>Похожие объявления</Similiar>
            {/* {data?.map((item) => (
              <ListCard
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                description={item.description}
                date={item.date}
                category={item.category}
                location={item.location}
              />
            ))} */}
          </SimiliarWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default DetailsPage;
