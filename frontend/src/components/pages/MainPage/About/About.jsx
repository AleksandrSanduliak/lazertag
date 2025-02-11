import cn from 'classnames';
import React from 'react';
import cl from './About.module.scss';

const About = () => {
  return (
    <section className={cl.about}>
      <div className={cn('about__container', cl.aboutContainer)}>
        <div className={cl.aboutInner}>
          <div className={cl.aboutContent}>
            <p className={cl.aboutTitle}>О НАС</p>
            <div className={cl.aboutInfo}>
              <div className={cl.aboutInfoItem}>
                <p className={cl.aboutInfoItemTitle}>НАИМЕНОВАНИЕ</p>
                <p className={cl.aboutInfoItemContent}>
                  Региональное отделение Всероссийской общественной организации развития лазерного
                  боя «Федерация Лазертага России» в Санкт-Петербурге.
                </p>
              </div>
              <div className={cl.aboutInfoItem}>
                <p className={cl.aboutInfoItemTitle}>ДЕЯТЕЛЬНОСТЬ</p>
                <p className={cl.aboutInfoItemContent}>
                  Занимаемся организацией и проведением турниров, спортивно-массовых мероприятий и
                  дружеских встреч на территории Санкт-Петербурга.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
