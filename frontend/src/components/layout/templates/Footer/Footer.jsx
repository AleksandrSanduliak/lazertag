import { FooterLogo } from 'components/common/logo/Logo';
import { FooterNavigation } from 'components/common/Navigation/Navigation';
import React from 'react';
import cl from './Footer.module.scss';

const ContactForm = () => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className={cl.contactForm} onClick={() => onSubmitForm()}>
      <label className="title">Связаться с нами можно здесь!</label>
      <input type="text" className={cl.nameInput} placeholder="Ваше Имя" />
      <input type="text" placeholder="Ваше Email" />
      <button type="submit" className="formButton">
        <p className="afterPath"></p>
        ОТПРАВИТЬ
      </button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footerInner}>
          <div className={cl.footerLeftSideContent}>
            <FooterLogo />
            <FooterNavigation />
          </div>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
