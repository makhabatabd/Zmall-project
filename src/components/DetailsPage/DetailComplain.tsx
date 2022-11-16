import { useLocalStorage } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  DetailReportWindow,
  ErrorText,
  Form,
  ReportClose,
  ReportItem,
  ReportTitle,
  SubmitButton,
  TextArea,
} from './DetailInformation';
import Swal from 'sweetalert2';

interface reportDataType {
  name: string;
}
type Props = {
  setIsComplainActive: (value: boolean) => void;
};

const reportData = [
  { name: 'Неверная рубрика' },
  { name: 'Запрещенный товар/услуга' },
  { name: 'Объявление не актуально' },
  { name: 'Неверный адрес' },
];

export const DetailComplain = ({ setIsComplainActive }: Props) => {
  const [activeItem, setActiveItem] = useState('');
  const [reportText, setReportText] = useState('');
  const [complainText, setComplainText] = useState('');
  const authUser = useLocalStorage('auth', {});
  const token = authUser[0];
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (activeItem !== '') return setComplainText('');
  }, [activeItem]);

  const closeForm = () => {
    setIsComplainActive(false);
    setActiveItem('');
  };

  const sendComplaints = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const obj = {
      advertisement: id,
      type: activeItem,
      text: '',
    };

    if (activeItem === 'Другое') obj['text'] = reportText;
    else if (activeItem === '') {
      setComplainText('Чтобы отправить выберите один из вариантов');
      return;
    } else obj['type'] = activeItem;

    fetch('http://188.225.83.42:8001/api/v1/advertisement/complaining/', {
      body: JSON.stringify(obj),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then(function (response) {
        if (!response.ok) {
          return Promise.reject(response);
        } else if (response.ok) {
          closeForm();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ваша жалоба принята',
            showConfirmButton: false,
            timer: 1500,
          });
          return response.json();
        }
      })
      .catch(async (response) => {
        const error = await response.json();
        setComplainText(error?.errors?.error[0]);
      });
  };

  return (
    <DetailReportWindow>
      <ReportTitle>
        <p>
          Уажите причины, по которым вы считаете это обьявление неккоректным
        </p>
        <ReportClose onClick={() => setIsComplainActive(false)}>
          <Image
            src={'/icons/reportClose.svg'}
            alt="close"
            width={16}
            height={16}
          />
        </ReportClose>
      </ReportTitle>
      <Form action="">
        {reportData.map((el: reportDataType, index: number) => {
          return (
            <ReportItem key={index}>
              <input
                onChange={() => setActiveItem(el.name)}
                checked={activeItem === el.name}
                type="radio"
                id={el.name}
                name={'report'}
              />
              <label htmlFor={el.name}>{el.name}</label>
            </ReportItem>
          );
        })}
        <ReportItem>
          <input
            checked={activeItem === 'Другое'}
            name={'report'}
            type="radio"
            id="other"
            onChange={() => {
              setActiveItem('Другое');
            }}
          />
          <label htmlFor="other">Другое</label>
        </ReportItem>
        {activeItem === 'Другое' && (
          <ReportItem>
            <TextArea
              rows={3}
              autoCapitalize="off"
              placeholder="Опишите причину"
              onChange={(e) => {
                setReportText(e.target.value);
              }}
            />
          </ReportItem>
        )}
        <SubmitButton onClick={sendComplaints}>Отправить жалобу</SubmitButton>
        <ErrorText>{complainText}</ErrorText>
      </Form>
    </DetailReportWindow>
  );
};
