import React, { useState } from 'react';
import styles from './ConfirmModal.module.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useOrderPaymentMutation } from '@/store/order.api';
import { useRouter } from 'next/router';

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date?.getDate()),
    padTo2Digits(date?.getMonth() + 1),
    date.getFullYear(),
  ].join('.');
}

type Props = {
  setIsOpen: (value: boolean) => void;
  subscription?: number;
};

export interface Obj {
  advertisement: number;
  subscription: number | undefined;
  start_date: string;
  end_date: string;
}

export const ConfirmModal = ({ setIsOpen, subscription }: Props) => {
  const [orderPayment, { data }] = useOrderPaymentMutation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const { id } = router.query;
  console.log(id, 'id');

  const obj: Obj = {
    advertisement: 65,
    subscription: subscription,
    start_date: formatDate(startDate),
    end_date: formatDate(endDate),
  };

  const handleCalendarStart = (date: Date) => {
    console.log(date, 'date');
    setStartDate(date);
  };

  const handleCalendarEnd = (date: Date) => {
    setEndDate(date);
  };

  const onPaywithPaybox = async () => {
    await orderPayment(obj);
    window.open(data?.redirect_url);
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.actionsContainer}>
            <div className={styles.calendars}>
              <div className={styles.calendar}>
                <p>Start day</p>
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date: Date) => handleCalendarStart(date)}
                />
              </div>
              <div className={styles.calendar}>
                <p>End day</p>
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date: Date) => handleCalendarEnd(date)}
                />
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.deleteBtn} onClick={onPaywithPaybox}>
                Оплатить
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
