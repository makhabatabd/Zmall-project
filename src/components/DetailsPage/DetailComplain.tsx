import axios from 'axios';
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

interface reportDataType {
  name: string;
  rusName: string;
}
type Props = {
  setIsComplainActive: (value: boolean) => void;
};

const reportData = [
  { name: 'wrong', rusName: 'Неверная рубрика' },
  { name: 'forbidden', rusName: 'Запрещенный товар/услуги' },
  { name: 'not_relevant', rusName: 'Обьявление не актуально' },
  { name: 'wrong_address', rusName: 'Неверный адрес' },
];

export const DetailComplain = ({ setIsComplainActive }: Props) => {
  const [activeItem, setActiveItem] = useState('');
  const [complainText, setComplainText] = useState('');
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
      type: '',
      text: '',
    };

    axios
      .post('http://188.225.83.42:8001/api/v1/advertisement/complaining/', obj)
      .then(function (response) {
        closeForm();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        closeForm();
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
                type="radio"
                id={el.name}
                name={'report'}
              />
              <label htmlFor={el.name}>{el.rusName}</label>
            </ReportItem>
          );
        })}
        <ReportItem>
          <input
            checked={activeItem === 'other'}
            name={'report'}
            type="radio"
            id="other"
            onChange={() => {
              setActiveItem('other');
            }}
          />
          <label htmlFor="other">Другое</label>
        </ReportItem>
        {activeItem === 'other' && (
          <ReportItem>
            <TextArea
              rows={3}
              autoCapitalize="off"
              placeholder="Опишите причину"
              onChange={(e) => {
                console.log(e);
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
