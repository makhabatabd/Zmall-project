import React, { useEffect } from 'react';
import { Container } from '@/components/Styles/sharedstyles';
import {
  AddListBtn,
  AddListBtnBox,
  AddListContainer,
  AddListItem, AddListUlInfo,
  AddListUlTittles,
} from '@/components/AdminPage/AddList/AddList.style';
import { Delete, Edit } from '@/components/AdminPage/svg';
import { IProps } from '../../../../pages';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToStore,filterStore, selectMainState } from '@/store/mainSlice';
import { IResult } from '@/types';
import axios from 'axios';


const AddListComponent: React.FC<IProps> = ({ result, page, limit }) => {
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

  const deleteAdvert = (id: number) => {
    const token = JSON.parse(localStorage?.getItem("auth") as string )
    axios.delete(`http://188.225.83.42:8001/api/v1/advertisement/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': token?.token,
        "Authorization": 'Bearer ' + token?.token,
      },
    }).then(() => {
      dispatch(filterStore(id))
      console.log(data);
     return 'success';
    });
  };
  return (
    <Container>
      <AddListContainer>
        <AddListUlTittles>
          <AddListItem className='id'>ID</AddListItem>
          <AddListItem className='name'>Название</AddListItem>
          <AddListItem className='name'>Автор</AddListItem>
          <AddListItem className='button'>Редактировать</AddListItem>
          <AddListItem className='button'>Удалить</AddListItem>
          <AddListBtnBox style={{ display: 'flex', gap: '10px' }}>
            <AddListBtn
              onClick={() => pageHandler(parseInt(String(page)) - 10, limit)}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12.0001 21C16.9706 21 21.0001 16.9706 21.0001 12C21.0001 7.02943 16.9706 2.99999 12.0001 2.99999C7.02949 2.99999 3.00006 7.02943 3.00006 12C3.00006 16.9706 7.02949 21 12.0001 21ZM13.5674 16.865L15.1846 15.3628L11.419 11.865L15.1846 8.3672L13.5674 6.86499L8.18457 11.865L13.5674 16.865Z'
                  fill={'#2A2349'} />
              </svg>

            </AddListBtn>
            <AddListBtn
              onClick={() => pageHandler(parseInt(String(page)) + 10, limit)}
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12.0001 21C16.9706 21 21.0001 16.9706 21.0001 12C21.0001 7.02943 16.9706 2.99999 12.0001 2.99999C7.02949 2.99999 3.00006 7.02943 3.00006 12C3.00006 16.9706 7.02949 21 12.0001 21ZM10.6992 6.86499L9.04674 8.3672L12.8943 11.865L9.04674 15.3628L10.6992 16.865L16.1992 11.865L10.6992 6.86499Z'
                  fill='#2A2349' />
              </svg>
            </AddListBtn>
          </AddListBtnBox>
        </AddListUlTittles>
        {data?.goods?.map((item: IResult) => {
          return (
            <AddListUlInfo>
              <AddListItem className='id'>{item.id}</AddListItem>
              <AddListItem className='plaint'>{item.name}</AddListItem>
              <AddListItem className='name'>{item.owner.first_name} {item.owner.last_name}</AddListItem>
              <AddListItem className='button'>
                <svg className='icon'> {Edit}</svg>
              </AddListItem>
              <AddListItem className='button'>
                <svg onClick={() => deleteAdvert(item.id)} className='icon'> {Delete}</svg>
              </AddListItem>
            </AddListUlInfo>
          );
        })}
      </AddListContainer>
    </Container>
  );
};

export default AddListComponent;