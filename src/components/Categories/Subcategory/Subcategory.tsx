import React from 'react';
import { Container } from '../../Styles/sharedstyles';
import { Wrapper, Content, Dots } from './Subcategory.style';
import { IResponseCategory } from '../../../../pages/categories/[id]';
import { useRouter } from 'next/router';

interface IProps {
  item: IResponseCategory | undefined;
}

const Subcategory = ({ item }: IProps) => {
  const router = useRouter();
  const getSubcategories = (sub = 1) => {
    const { id } = router.query;
    router.push({
      pathname: `${router.pathname}`,
      query: { sub: sub, id: id },
    });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            {item?.child_category.map((c) => (
              <span key={c.id} onClick={() => getSubcategories(c.id)}>
                <li>
                  <span>{c.name}</span> <Dots /> <span>{c.ads_count}</span>
                </li>
              </span>
            ))}
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Subcategory;
