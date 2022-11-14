import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  BlockText,
  BlockTitle,
  BlockTwo,
  SmallBlock,
  SmallBlocks,
  SubTitle,
} from './Details.style';
import { ConfirmModal } from '@/ui/modal/ConfirmModal';
import { useLazyGetOrderSubscriptionsQuery } from '@/store/order.api';
import { ISubscription } from '@/types';

export const DetailSaleSpeed = () => {
  const [getOrderSubscriptions, { data }] = useLazyGetOrderSubscriptionsQuery();

  useEffect(() => {
    getOrderSubscriptions('');
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number>();

  const orderPay = (id: number) => {
    setValue(id);
    setIsOpen(true);
  };

  return (
    <BlockTwo>
      {isOpen && <ConfirmModal subscription={value} setIsOpen={setIsOpen} />}
      <SubTitle>Ускорить продажу</SubTitle>

      <SmallBlocks>
        {data?.results.map((subscription: ISubscription) => (
          <SmallBlock
            onClick={() => orderPay(subscription.id)}
            key={subscription.id}
          >
            <Image
              src="/details/block-1.svg"
              width={30}
              height={30}
              alt="block-1"
            />
            <div>
              <BlockTitle>
                Добавить стикер {subscription.name} за <span></span>
                <span>{subscription.price}</span>
              </BlockTitle>
              <BlockText>Период выделения — 10 дней</BlockText>
            </div>
          </SmallBlock>
        ))}
      </SmallBlocks>
    </BlockTwo>
  );
};
