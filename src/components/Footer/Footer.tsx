import React from 'react';
import Link from 'next/link';
import {
  About,
  Catalog,
  Cities,
  Contacts,
  FooterBody,
  Item,
  Links,
  List,
  ListColumn,
  SocialMedia,
  Text,
  Title,
  Wrapper,
} from './Footer.style';
import Image from 'next/image';
import { Container } from '../Styles/sharedstyles';

const Footer = () => {
  const mockData = {
    catakog: [
      'Услуги',
      'Детям',
      'Электроника',
      'Работа',
      'Хобби и отдых',
      ' Для дома и дачи',
      'Личные вещи',
      'Животные',
      'Для бизнеса',
      'Ручная работа',
      'Недвижимость',
    ],
    cities: [
      'Актау',
      'Актобе',
      'Алматы',
      'Балхаш',
      'Жезказган',
      'Караганда',
      'Кокшетау',
      'Костанай',
      'Кызылорда',
      'Павлодар',
      'Петропавловск',
      'Семей',
      'Ушарал',
      'Шымкент',
      'Экибастуз',
    ],
  };
  return (
    <Wrapper>
      <Container>
        <FooterBody>
          <About>
            <Title>О проекте</Title>
            <ListColumn>
              <Item>
                <Link href="/">Объявления</Link>
              </Item>
              <Item>
                <Link href="/">Помощь</Link>
              </Item>
              <Item>
                <Link href="/">Связаться с администрацией</Link>
              </Item>
              <Item>
                <Link href="/">Политика конфиденциальности</Link>
              </Item>
            </ListColumn>
          </About>
          <Links>
            <Catalog>
              <Title>Каталог объявлений</Title>
              <List>
                {mockData.catakog.map((item, index) => (
                  <Item key={index}>{item}</Item>
                ))}
              </List>
            </Catalog>
            <Cities>
              <Title>Объявления по городам</Title>
              <List>
                {mockData.cities.map((item, index) => (
                  <Item key={index}>{item}</Item>
                ))}
              </List>
            </Cities>
          </Links>
          <Contacts>
            <Text>Бесплатное приложение для твоего телефона</Text>
            <Image
              alt="Google Play"
              src="/footer/google-play.svg"
              height={48}
              width={162}
            />

            <Text>Zmall в социальных сетях</Text>
            <SocialMedia>
              <Image alt="OK" src="/footer/ok.svg" width={48} height={48} />
              <Image
                alt="Facebook"
                src="/footer/fb.svg"
                width={48}
                height={48}
              />
              <Image
                alt="Instagram"
                src="/footer/ig.svg"
                width={48}
                height={48}
              />
            </SocialMedia>

            <Text>© 2022. Zmall. Все права защищены</Text>
          </Contacts>
        </FooterBody>
      </Container>
    </Wrapper>
  );
};

export default Footer;
