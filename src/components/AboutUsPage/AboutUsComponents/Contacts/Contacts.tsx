import React from 'react';
import {
  ContactsBtnBox,
  ContactsImgBox,
  ContactsSection,
  ContactsSubTitle,
  ContactsTextBox,
  ContactsTitle,
} from './Contacts.style';
import { ContactsSvg, MailSvg, TelSvg, WhatsappSvg } from '../SVG';

const Contacts = () => {
  return (
    <ContactsSection>
      <ContactsTextBox>
        <ContactsTitle>Остались вопросы? Свяжитесь с нами!</ContactsTitle>
        <ContactsSubTitle>
          Зарабатывайте уже сейчас вместе с <b>Zmall</b>. Оставьте свой телефон
          или напишите нам, и мы, с радостью, поможем вашему бизнесу развиваться
          и приносить прибыль.
        </ContactsSubTitle>
        <ContactsBtnBox>
          <button style={{ background: '#69A042' }}>
            {WhatsappSvg}
            <span>написать на whatsapp</span>
          </button>
          <button style={{ background: '#00CCDB' }}>
            {TelSvg}
            <span>обратный звонок</span>
          </button>
          <button style={{ background: '#2A2349' }}>
            {MailSvg}
            <span>написать менеджеру</span>
          </button>
        </ContactsBtnBox>
      </ContactsTextBox>
      <ContactsImgBox>{ContactsSvg}</ContactsImgBox>
    </ContactsSection>
  );
};

export default Contacts;
