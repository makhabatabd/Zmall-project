import React, { useEffect, useState } from 'react';
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
  advertisement: unknown;
  subscription: number | undefined;
  start_date: string;
  end_date: string;
}

export interface Auth {
  token: string;
  refresh: string;
}

export const ConfirmModal = ({ setIsOpen, subscription }: Props) => {
  const [orderPayment, data] = useOrderPaymentMutation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const { id } = router.query;

  const URL = data?.data?.redirect_url;

  const handleCalendarStart = (date: Date) => {
    setStartDate(date);
  };

  const handleCalendarEnd = (date: Date) => {
    setEndDate(date);
  };

  useEffect(() => {
    if (data.isSuccess) {
      window.open(URL);
    }
  }, [data.isSuccess]);

  const onPaywithPaybox = async () => {
    let token: Auth = {
      token: '',
      refresh: '',
    };

    if (typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('auth') || '');
    }

    const Obj: Obj = {
      advertisement: id,
      subscription: subscription,
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    };
    await orderPayment({ Obj, token });
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
