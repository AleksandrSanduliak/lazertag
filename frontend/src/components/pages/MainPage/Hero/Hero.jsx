import heroLogo from 'assets/heroLogo.svg';
import cn from 'classnames';
import React from 'react';
import cl from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={cl.hero}>
      <div className={cn('hero__container', cl.heroContainer)}>
        <div className={cl.heroInner}>
          <div className={cl.heroInfoWrapper}>
            <div className={cl.heroInfo}>
              <img
                width="227"
                height="214"
                className={cl.heroLogo}
                src={heroLogo}
                alt="Логотип Федерации Лазерного Боя"
              />
              <p className={cl.heroTitle}>
                ФЕДЕРАЦИЯ
                <br />
                ЛАЗЕРНОГО
                <br />
                БОЯ
              </p>
              <p className={cl.heroSubtitle}>В САНКТ-ПЕТЕРБУРГЕ</p>
            </div>
          </div>

          <div className={cl.heroButtonWrapper}>
            <button className={cl.heroButton}>
              <a href="https://www.youtube.com/" target="_blank">
                СМОТРЕТЬ ПРОМО-РОЛИК
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
