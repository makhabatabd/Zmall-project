import React, { useEffect } from 'react';
import { Container } from '@/components/Styles/sharedstyles';
import {
  FeedBackContainer,
  FeedBackMessage, FeedBackMessageText, FeedBackMessageTitle, FeedBackMessageValue,
  FeedBackMessageWrapper,
  FeedBackRow,
} from '@/components/AdminPage/Feedback/FeedBack.style';
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

const FeedBackComponent = () => {

  const {reports} = useAppSelector(selectAdminState);
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    const token = JSON.parse(localStorage?.getItem("auth") as string)
    const res = await getAdminComplains(token)
    dispatch(addToStoreComplains(res?.results));
  }
  useEffect( () => {
    fetchData()
  }, []);
  console.log(reports);
  return (
    <Container>
      <FeedBackContainer>
        <FeedBackRow>

          {
            reports?.map((it: IItem) => {
            return (
              <FeedBackMessage>
                <FeedBackMessageWrapper>
                  <FeedBackMessageTitle>
                    Сообщение от:
                  </FeedBackMessageTitle>
                  <FeedBackMessageValue>
                    {it.name}
                  </FeedBackMessageValue>
                </FeedBackMessageWrapper>
                <FeedBackMessageWrapper>
                  <FeedBackMessageTitle>
                    Email:
                  </FeedBackMessageTitle>
                  <FeedBackMessageValue>
                    {it.email}
                  </FeedBackMessageValue>
                </FeedBackMessageWrapper>
                <FeedBackMessageWrapper>
                  <FeedBackMessageTitle>
                    Тема сообщения:
                  </FeedBackMessageTitle>
                  <FeedBackMessageValue>
                    {it.subject}
                  </FeedBackMessageValue>
                </FeedBackMessageWrapper>

                <FeedBackMessageText>
                  {it.text}
                </FeedBackMessageText>

                <FeedBackMessageWrapper>
                  <FeedBackMessageTitle>
                    Дата отправки:
                  </FeedBackMessageTitle>
                  <FeedBackMessageValue>
                    {it.send_date}
                  </FeedBackMessageValue>
                </FeedBackMessageWrapper>
              </FeedBackMessage>
            )
          })
          }
        </FeedBackRow>
      </FeedBackContainer>
    </Container>
  );
};

export default FeedBackComponent;