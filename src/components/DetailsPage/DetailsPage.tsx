import { ISlider } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Container } from '../Styles/sharedstyles';
import styles from './Details.module.scss';
import {
  BlockOne,
  BlockText,
  BlockTitle,
  BlockTwo,
  Client,
  ClientContact,
  ClientContacts,
  ClientContactShow,
  ClientName,
  ClientNumber,
  ClientNumbers,
  ClientPhone,
  ClientTop,
  DetailInner,
  FavoriteWrapper,
  FavText,
  FavWrapper,
  IconWrapper,
  LeftBlock,
  LeftInner,
  PriceTitle,
  RightBlock,
  Similiar,
  SimiliarWrapper,
  SmallBlock,
  SmallBlocks,
  SubTitle,
  TextButton,
  Title,
  Wrapper,
  WriteButton,
} from './Details.style';
import { Slider } from './Slider';

// import whatsApp from '../../../public/details/wa.svg';
// import facebook from '../../../public/details/fb.svg';
// import vk from '../../../public/details/vk.svg';
// import telegram from '../../../public/details/telegram.svg';
// import odnoklassniki from '../../../public/details/ok.svg';
import { ListCard } from '@/ui/listCard/ListCard';

const DetailsPage = () => {
  const data = [
    {
      id: 1,
      image:
        'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',
      price: '23 000 890',
      title: 'Продаётся новая Toyota RAV4 2018 г.в.',
      description:
        'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
      date: 'сегодня, 12: 56,',
      category: 'cars',
      location: 'Bishkek',
    },
    {
      id: 2,
      image:
        'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

      price: '23 000 890',
      title: 'Продаётся новая Toyota RAV4 2018 г.в.',
      description:
        'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
      date: 'сегодня, 12: 56,',
      category: 'cars',
      location: 'Bishkek',
    },
    {
      id: 3,
      image:
        'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

      price: '23 000 890',
      title: 'Продаётся новая Toyota RAV4 2018 г.в.',
      description:
        'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
      date: 'сегодня, 12: 56,',
      category: 'cars',
      location: 'Bishkek',
    },
    {
      id: 4,
      image:
        'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960',

      price: '23 000 890',
      title: 'Продаётся новая Toyota RAV4 2018 г.в.',
      description:
        'Выразительный и брутальный дизайн, смелый и функциональный интерьер — Toyota RAV4 ломает стереотипы и начинает новую страницу в своей и ...',
      date: 'сегодня, 12: 56,',
      category: 'cars',
      location: 'Bishkek',
    },
  ];
  const networksImg = [
    { logo: '/details/wa.svg', url: 'whatsapp://send?text=' },
    { logo: '/details/vk.svg', url: 'http://vk.com/share.php?url=' },
    {
      logo: '/details/fb.svg',
      url: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    {
      logo: '/details/telegram.svg',
      url: 'https://telegram.me/share/url?url=',
    },
    { logo: '/details/ok.svg', url: 'https://connect.ok.ru/offer?url=' },
  ];
  const imageProps: ISlider = {
    imgArray: [
      {
        image: '/details/bmw.jpg',
      },
      {
        image: '/details/bmw.jpg',
      },
      {
        image: '/details/bmw.jpg',
      },
      {
        image: '/details/bmw.jpg',
      },
    ],
    price: 10000,
  };
  return (
    <>
      <Wrapper>
        <Container style={{ width: '100%', padding: '15px' }}>
          <DetailInner>
            <LeftBlock>
              <Title>
                Роскошная вилла с задним двором и бассейном, террасой и гаражом,
                Север Майами, США
              </Title>
              <IconWrapper>
                <Image
                  src="/icons/urgent.svg"
                  width={94}
                  height={32}
                  alt="urgent"
                />
                <Image
                  src="/icons/selected.svg"
                  width={120}
                  height={32}
                  alt="urgent"
                />
                <Image
                  src="/icons/vip.svg"
                  width={70}
                  height={32}
                  alt="urgent"
                />
              </IconWrapper>
              <LeftInner>
                <BlockOne>
                  <Slider item={imageProps} />
                  <div className={styles.about}>
                    <div className={styles.statistics}>
                      <div className={styles.statisticsList}>
                        <p>20 января</p>
                        <p>№ 098603</p>
                        <p> просмотров: 20</p>
                      </div>
                      <div className={styles.geolocation}>Бишкек</div>
                    </div>
                    <div className={styles.text}>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Inventore sequi quam quo itaque possimus, fuga
                        vero, adipisci quisquam rerum fugiat ipsa minus
                        voluptate, quasi tempore illum quae quaerat laborum
                        ratione. Quo, voluptates pariatur recusandae explicabo
                        quasi dignissimos hic exercitationem voluptas.Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore sequi quam quo itaque possimus, fuga vero,
                        adipisci quisquam rerum fugiat ipsa minus voluptate,
                        quasi tempore illum quae quaerat laborum ratione. Quo,
                        voluptates pariatur recusandae explicabo quasi
                        dignissimos hic exercitationem voluptas.
                      </p>
                      <div className={styles.warning}>
                        <Image
                          src="/details/warn.svg"
                          width={391}
                          height={205}
                          alt="wedwd"
                        />
                      </div>
                    </div>
                    <div className={styles.share}>
                      <div className={styles.links}>
                        <div className={styles.shareFriend}>
                          <Image
                            src="/details/share.svg"
                            alt="share"
                            width={16}
                            height={16}
                          />
                          <div>Поделиться с другом</div>
                        </div>
                        <div className={styles.networks}>
                          {networksImg.map((el, index: number) => {
                            return (
                              <div className={styles.network} key={index}>
                                <a target={'_blank'}>
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
                        </div>
                      </div>
                      <div className={styles.report}>
                        <Image
                          src="/details/dislike.svg"
                          width={16}
                          height={16}
                          alt="dislike image"
                        />
                        <p className={styles.reportText}>Пожаловаться</p>
                      </div>
                    </div>
                  </div>
                </BlockOne>
                <BlockTwo>
                  <SubTitle>Ускорить продажу</SubTitle>
                  <SmallBlocks>
                    <SmallBlock>
                      <Image
                        src="/details/block-1.svg"
                        width={30}
                        height={30}
                        alt="block-1"
                      />
                      <div>
                        <BlockTitle>
                          Добавить стикер «Срочно» за <span>500 ₸</span>
                        </BlockTitle>
                        <BlockText>Период выделения — 10 дней</BlockText>
                      </div>
                    </SmallBlock>
                    <SmallBlock>
                      <Image
                        src="/details/block-2.svg"
                        width={30}
                        height={30}
                        alt="block-2"
                      />
                      <div>
                        <BlockTitle>
                          VIP за <span> 700 ₸</span>
                        </BlockTitle>
                        <BlockText>Период выделения — 10 дней</BlockText>
                      </div>
                    </SmallBlock>
                    <SmallBlock>
                      <Image
                        src="/details/block-3.svg"
                        width={30}
                        height={30}
                        alt="block-3"
                      />
                      <div>
                        <BlockTitle>
                          Выделить цветом за <span> 100 ₸</span>
                        </BlockTitle>
                        <BlockText>Период выделения — 10 дней</BlockText>
                      </div>
                    </SmallBlock>
                  </SmallBlocks>
                </BlockTwo>
              </LeftInner>
            </LeftBlock>
            <RightBlock>
              <FavoriteWrapper>
                <FavWrapper>
                  <Image
                    src="/icons/heart-icon.svg"
                    width={18}
                    height={16}
                    alt="heart-icon"
                  />
                </FavWrapper>
                <FavText>Добавить в избранное</FavText>
              </FavoriteWrapper>
              <PriceTitle>1 300 120 ₸</PriceTitle>
              <Client>
                <ClientTop>
                  <Image
                    src="/details/avatar.svg"
                    alt="avatar"
                    width={64}
                    height={64}
                  />
                  <ClientName>Константинопольский Александр</ClientName>
                </ClientTop>
                <ClientContacts>Контакты продавца</ClientContacts>
                <ClientContactShow>показать контакты</ClientContactShow>
                <ClientContact>
                  <ClientPhone>Телефон:</ClientPhone>
                  <ClientNumbers>
                    <ClientNumber>+996777xxxxxx</ClientNumber>
                    <ClientNumber>+996777xxxxxx</ClientNumber>
                    <ClientNumber>+996777xxxxxx</ClientNumber>
                  </ClientNumbers>
                </ClientContact>
                <ClientContact>
                  <ClientPhone>WhatsApp:</ClientPhone>
                  <ClientNumbers>
                    <ClientNumber>+996777xxxxxx</ClientNumber>
                  </ClientNumbers>
                </ClientContact>
                <WriteButton>
                  <Image
                    src="/details/write-icon.svg"
                    width={26}
                    height={32}
                    alt="icon"
                  />
                  написать продавцу
                </WriteButton>
                <TextButton>
                  <Image
                    src="/details/white-wa.svg"
                    width={26}
                    height={32}
                    alt="icon"
                  />
                  написать на whatsapp
                </TextButton>
              </Client>
            </RightBlock>
          </DetailInner>
          <SimiliarWrapper>
            <Similiar>Похожие объявления</Similiar>
            {data?.map((item) => (
              <ListCard
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                description={item.description}
                date={item.date}
                category={item.category}
                location={item.location}
              />
            ))}
          </SimiliarWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default DetailsPage;
