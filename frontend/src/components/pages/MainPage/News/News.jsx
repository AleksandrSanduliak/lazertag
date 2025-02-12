import arrowInCircle from 'assets/arrow.svg';
import newsImg from 'assets/newsImg.png';
import cn from 'classnames';
import React from 'react';
import cl from './News.module.scss';
const newsList = [
  {
    id: 0,
    img: newsImg,
    title: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    description: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
    date: '21.06',
    link: '',
  },
  {
    id: 1,
    img: newsImg,
    title: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    description: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
    date: '21.06',
    link: '',
  },
  {
    id: 2,
    img: newsImg,
    title: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    description: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
    date: '21.06',
    link: '',
  },
];

const NewsListItem = ({ item }) => {
  return (
    <li className={cl.newsListItem} key={item.id}>
      <img className={cl.newsListItemImg} src={item.img} alt={item.title} />
      <div className={cl.newsListItemContent}>
        <div className={cl.newsListItemHeader}>
          <h3>{item.title}</h3>
          <p>{item.date}</p>
        </div>
        <div className={cl.newsListItemMain}>
          <p className={cl.newsListItemDesc}>{item.description}</p>
          <a className={cl.newsListItemLink} href={item.link} target="_blank">
            <img src={arrowInCircle} alt="Переход на страницу новости" />
          </a>
        </div>
      </div>
    </li>
  );
};

const News = () => {
  return (
    <section className={cl.news}>
      <div className={cn('news__container', cl.newsContainer)}>
        <div className={cl.newsInner}>
          <h2 className={cl.newsTitle}>НОВОСТИ</h2>
          <ul className={cl.newsList}>
            {newsList.map((item) => {
              return <NewsListItem key={item.id} item={item} />;
            })}
          </ul>
          <button className={cl.newsButton}>
            <a href="./" target="_blank">
              ВСЕ НОВОСТИ
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
