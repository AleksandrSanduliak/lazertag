import cardWithStar from 'assets/info/cardWithStar.svg';
import human from 'assets/info/human.svg';
import pedestal from 'assets/info/pedestal.svg';
import peoples from 'assets/info/peoples.svg';
import React from 'react';
import cl from './Info.module.scss';

const infoList = [
  {
    id: 0,
    icon: human,
    title: '200+',
    subtitle: 'СПОРТСМЕНОВ',
  },
  {
    id: 1,
    icon: peoples,
    title: '50+',
    subtitle: 'ВСТРЕЧ',
  },
  {
    id: 2,
    icon: cardWithStar,
    title: '20+',
    subtitle: 'КЛУБОВ',
  },
  {
    id: 3,
    icon: pedestal,
    title: '30+',
    subtitle: 'ТУРНИРОВ',
  },
];

const InfoListItem = ({ item }) => {
  return (
    <li className={cl.infoListItem}>
      <img src={item.icon} className={cl.infoImg} alt="Иконка списка достижений" />
      <p className={cl.infoListItemTitle}>{item.title}</p>
      <p className={cl.infoListItemSubtitle}>{item.subtitle}</p>
    </li>
  );
};

const Info = () => {
  return (
    <section className={cl.info}>
      <div className="info__container">
        <div className={cl.infoInner}>
          <p className={cl.infoTitle}>ЧТО ТАКОЕ ЛАЗЕРНЫЙ БОЙ?</p>
          <p className={cl.infoSubtitle}>
            Лазертаг, известный также как "лазерный бой" - официальный вид спорта в России. Это
            технологичная командная игра, в которой участники используют Тагеры - стрелковые
            снаряды, имитирующие стрелковое оружие. Эта игра сочетает в себе элементы стратегии,
            физической активности и адреналина.
          </p>
          <ul className={cl.infoList}>
            {infoList.map((item) => (
              <InfoListItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
