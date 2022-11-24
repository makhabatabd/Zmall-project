import React, { useEffect } from 'react';
import { Container } from '@/components/Styles/sharedstyles';
import { ComplaintsContainer, ComplaintsUlTittles,  ComplaintsItem, ComplaintsUlInfo} from '@/components/AdminPage/Complaints/Complaints.style';
import { Delete, Edit } from '@/components/AdminPage/svg';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToStoreComplains, selectAdminState } from '@/store/adminSlice';
import { getAdminComplains } from '@/api';

interface IItem {
  check_date: string | null,
  checked: boolean,
  email: string,
  name: string,
  send_date: string | null,
  subject: string,
  text: string
}

const ComplaintsComponent = () => {

  const data = useAppSelector(selectAdminState);
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    const token = JSON.parse(localStorage?.getItem("auth") as string)
    const res = await getAdminComplains(token)
    dispatch(addToStoreComplains(res?.results));
  }
  useEffect( () => {
    fetchData()
  }, []);

  console.log(data);
  return (
    <Container>
      <ComplaintsContainer>
        <ComplaintsUlTittles>
          <ComplaintsItem className='id'>ID</ComplaintsItem>
          <ComplaintsItem className='name'>Название</ComplaintsItem>
          <ComplaintsItem className='plaint'>Жалобы</ComplaintsItem>
          <ComplaintsItem className='send'>Дата отправки</ComplaintsItem>
          <ComplaintsItem className='button'>Редактировать</ComplaintsItem>
          <ComplaintsItem className='button'>Удалить</ComplaintsItem>
        </ComplaintsUlTittles>
        {
          data.reports.map((it: IItem, idx) => {
            return (
              <ComplaintsUlInfo>
                <ComplaintsItem className='id'>{idx}</ComplaintsItem>
                <ComplaintsItem className='name'>{it.name}</ComplaintsItem>
                <ComplaintsItem className='plaint'>{it.subject}</ComplaintsItem>
                <ComplaintsItem className='send'>{it.send_date}</ComplaintsItem>
                <ComplaintsItem className='button'><svg className="icon"> {Edit}</svg></ComplaintsItem>
                <ComplaintsItem className='button'><svg className="icon"> {Delete}</svg></ComplaintsItem>
              </ComplaintsUlInfo>
            )
          })
        }



      </ComplaintsContainer>
    </Container>
  );
};

export default ComplaintsComponent;