import React, { useEffect } from 'react';
import { Container } from '../Styles/sharedstyles';
import { IResult } from '@/types';
import Good from '../Good/Good';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToStore, selectMainState } from '@/store/mainSlice';
import { IProps } from '../../../pages';
import LeftArrow from './../../../public/main/left-arrow.svg';
import RightArrow from './../../../public/main/right-arrow.svg';
import { useRouter } from 'next/router';
import { Mainpage, Subtitle, WrapperArrow } from './MainPage.style';

export const MainPage: React.FC<IProps> = ({ result, page, limit }) => {
  const router = useRouter();
  const data = useAppSelector(selectMainState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addToStore(result?.results));
  }, [page]);

  const pageHandler = (page: number, limit: number) => {
    router.push({
      pathname: router.pathname,
      query: { limit: limit, offset: page },
    });
  };
  return (
    <div>
      <Container>
        <>
          <WrapperArrow>
            <Subtitle>Премиум объявления в Казахстане</Subtitle>
            <div>
              <LeftArrow
                onClick={
                  page == 0
                    ? () => {
                        console.log('DISABLE');
                      }
                    : () => pageHandler(Number(page) - 10, limit ?? 10)
                }
              />
              <RightArrow
                onClick={() => pageHandler(Number(page) + 10, limit ?? 10)}
              />
            </div>
          </WrapperArrow>
          <Mainpage>
            {data?.goods?.map((item: IResult) => (
              <Good key={item.id} item={item} />
            ))}
          </Mainpage>
        </>
        <div style={{ marginBottom: 38 }}>
          <Subtitle style={{ marginTop: 43 }}>
            Новые объявления в Казахстане
          </Subtitle>
          <Mainpage>
            {data?.goods?.map((item: IResult) => (
              <Good key={item.id} item={item} />
            ))}
          </Mainpage>
        </div>
      </Container>
    </div>
  );
};
