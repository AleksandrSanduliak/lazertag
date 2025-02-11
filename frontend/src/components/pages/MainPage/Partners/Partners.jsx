import cn from 'classnames';
import React from 'react';
import birdmp78 from '../../../../assets/partners/birdmp78.svg';
import gutid from '../../../../assets/partners/gutid.svg';
import helmet from '../../../../assets/partners/helmet.svg';
import kalinin from '../../../../assets/partners/kalinin.svg';
import shield from '../../../../assets/partners/shield.svg';
import spbFed from '../../../../assets/partners/spbFed.svg';
import cl from './Partners.module.scss';

const partnersList = [
  {
    id: 0,
    title: 'Молодёжный парламент Санкт-Петербурга',
    subtitle: 'Будущее Петербурга – в руках молодёжи! Определи вектор развития нашего города! ',
    img: birdmp78,
    bcgClass: cl.birdBcg,
  },
  {
    id: 1,
    title: 'Молодёжный клуб “Мужество”. Калининский район',
    subtitle: 'Мы - это 20 молодёжных клубов и дом молодёжи “Атлант”. Ждём тебя и твоих друзей',
    img: shield,
    bcgClass: cl.shieldBcg,
  },
  {
    id: 2,
    title: 'Подростково-молодёжный центр “Калининский',
    subtitle:
      'Создание пространства, в котором подростки и молодёжь могут реализовать свои потребности и интересы',
    img: kalinin,
    bcgClass: cl.kalinindBcg,
  },
  {
    id: 3,
    title: 'Доблесть веков. Агентство исторических событий',
    subtitle: 'Команда увлеченных людей из движения военно-исторической реконструкции',
    img: helmet,
    bcgClass: cl.helmetBcg,
  },
  {
    id: 4,
    title: 'ГУТИД. Спортивный клуб СПбГУПТД',
    subtitle:
      'Спортивный клуб Санкт-Петербургского государственного Университета Промышленных Технологий и Дизайна',
    img: gutid,
    bcgClass: cl.gutidBcg,
  },
  {
    id: 5,
    title: 'Законодательное Собрание Санкт-Петербурга',
    subtitle:
      'Представительный орган государственной власти субъекта РФ, города федерального значения Санкт-Петербурга',
    img: spbFed,
    bcgClass: cl.spbBcg,
  },
];

const Partners = () => {
  return (
    <section className={cl.partners}>
      <div className="partners__container">
        <div className={cl.partnersInner}>
          <h2 className={cl.partnersTitle}>НАШИ ПАРТНЁРЫ</h2>
          <ul className={cl.partnersList}>
            {partnersList.map((item) => {
              return (
                <li key={item.id} className={cn(cl.partnersListItem, item.bcgClass)}>
                  <img
                    className={cl.partnersItemImg}
                    src={item.img}
                    alt={`логотип ${item.title}`}
                  />
                  <div>
                    <p className={cl.partnersItemTitle}>{item.title}</p>
                    <p className={cl.partnersItemSubtitle}>{item.subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
