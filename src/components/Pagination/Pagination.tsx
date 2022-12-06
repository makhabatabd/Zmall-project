import React, { useState } from 'react';
import LeftArrow from './../../../public/main/left-arrow.svg';
import RightArrow from './../../../public/main/right-arrow.svg';
import { Item, Paginate } from './Pagination.style';
import { Container } from '../Styles/sharedstyles';
import { useRouter } from 'next/router';
import { IServerResponse } from '@/types';

interface IProps {
  data: IServerResponse;
  pageCount: number;
}

function Pagination({ data, pageCount }: IProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageHandler = (page: number, limit: number, current: number) => {
    const { id } = router.query;
    setCurrentPage(current);
    router.push({
      pathname: router.pathname,
      query: {
        id: id,
        limit: limit,
        offset: page,
      },
    });
    // window.scroll(0, 0);
  };

  const pages = [];
  const totalCount = data?.results?.count;
  const page = Math.ceil(totalCount / pageCount);
  for (let i = 0; i < page; i++) {
    pages.push(i + 1);
  }
  return (
    <Container>
      <Paginate>
        <LeftArrow onClick={() => console.log('left')} />
        {pages?.map((item) => (
          <Item
            key={item}
            current={currentPage}
            onClick={() => pageHandler(item * 10 - 10, 10, item)}
          >
            {item}
          </Item>
        ))}
        <RightArrow onClick={() => console.log('right')} />
      </Paginate>
    </Container>
  );
}

export default Pagination;
