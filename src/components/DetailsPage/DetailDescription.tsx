import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Slider } from './Slider';
import { DetailsPageProps } from '@/../pages/detail/[id]';
import { DetailSaleSpeed } from './DetailSaleSpeed';
import { DetailComplain } from './DetailComplain';
import {
  DetailGeolocation,
  DetailInformation,
  DetailNetworks,
  DetailReport,
  DetailShare,
  DetailShareWith,
  DetailStatistic,
  DetailStatisticList,
  DetailWarningText,
} from './DetailInformation';
import {
  BlockOne,
  IconWrapper,
  LeftBlock,
  LeftInner,
  Title,
} from './Details.style';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@/utils';

const networksImg = [
  { logo: '/details/wa.svg', url: 'whatsapp://send?text=' },
  { logo: '/details/vk.svg', url: 'http://vk.com/share.php?url=' },
  {
    logo: '/details/fb.svg',
    url: 'https://www.facebook.com/sharer/sharer.php?u=example.org',
  },
  {
    logo: '/details/telegram.svg',
    url: 'https://telegram.me/share/url?url=<URL>&text=<TEXT>',
  },
  { logo: '/details/ok.svg', url: 'https://connect.ok.ru/offer?url=' },
];

export const DetailDescription = ({ data }: DetailsPageProps) => {
  const [isComplainActive, setIsComplainActive] = useState(false);
  const currentUser = useLocalStorage('currentUser', {});

  const router = useRouter();

  const openReportModal = () => {
    if (currentUser[0].email) {
      setIsComplainActive(true);
    } else {
      router.push('/auth');
    }
  };

  const vip = data?.subscribers
    .sort()
    .filter((item) => item.subscription === 'VIP')[0];

  const urgent = data?.subscribers
    .sort()
    .filter((item) => item.subscription === 'URGENTLY')[0];

  const special = data?.subscribers
    .sort()
    .filter((item) => item.subscription === 'SPECIAL')[0];

  return (
    <>
      <LeftBlock>
        <Title>{data?.slug}</Title>
        <IconWrapper>
          {urgent && (
            <Image
              src="/icons/urgent.svg"
              width={94}
              height={32}
              alt="urgent"
            />
          )}
          {special && (
            <Image
              src="/icons/selected.svg"
              width={120}
              height={32}
              alt="urgent"
            />
          )}
          {vip && (
            <Image src="/icons/vip.svg" width={70} height={32} alt="urgent" />
          )}
        </IconWrapper>
        <LeftInner>
          <BlockOne>
            <Slider data={data} />
            <DetailInformation>
              <DetailStatistic>
                <DetailStatisticList>
                  <p>{data?.created_at}</p>
                  <p>№ 098603</p>
                  <p> просмотров: {data?.views_count}</p>
                </DetailStatisticList>
                <DetailGeolocation>Бишкек</DetailGeolocation>
              </DetailStatistic>
              <DetailWarningText>
                <p>{data?.description}</p>
                <div>
                  <Image
                    src="/details/warn.svg"
                    width={391}
                    height={205}
                    alt="wedwd"
                  />
                </div>
              </DetailWarningText>
              <DetailShare>
                <div>
                  <DetailShareWith>
                    <Image
                      src="/details/share.svg"
                      alt="share"
                      width={16}
                      height={16}
                    />
                    <div>Поделиться с другом</div>
                  </DetailShareWith>
                  <DetailNetworks>
                    {networksImg.map((el, index: number) => {
                      return (
                        <div key={index}>
                          <a href={el.url} target={'_blank'} rel="noreferrer">
                            <Image
                              src={el.logo}
                              alt="el"
                              width={21}
                              height={21}
                            />
                          </a>
                        </div>
                      );
                    })}
                  </DetailNetworks>
                </div>
                <DetailReport onClick={openReportModal}>
                  <Image
                    src="/details/dislike.svg"
                    width={16}
                    height={16}
                    alt="dislike image"
                  />
                  <p>Пожаловаться</p>
                </DetailReport>
                {isComplainActive && (
                  <div>
                    <DetailComplain setIsComplainActive={setIsComplainActive} />
                  </div>
                )}
              </DetailShare>
            </DetailInformation>
          </BlockOne>
          {data?.owner.email === currentUser?.email && <DetailSaleSpeed />}
        </LeftInner>
      </LeftBlock>
    </>
  );
};
