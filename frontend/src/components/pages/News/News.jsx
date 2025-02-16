import newsImg from 'assets/newsImg.png';
import cn from 'classnames';
import React from 'react';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './News.module.scss';

const newsList = [
  {
    id: 0,
    status: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    img: newsImg,
    date: '21.05',
    text: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
  },
  {
    id: 1,
    status: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    img: newsImg,
    date: '21.05',
    text: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
  },
  {
    id: 2,
    status: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    img: newsImg,
    date: '21.05',
    text: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
  },
  {
    id: 3,
    status: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    img: newsImg,
    date: '21.05',
    text: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
  },
  {
    id: 4,
    status: 'РЕГИОНАЛЬНЫЕ СОРЕВНОВАНИЯ',
    img: newsImg,
    date: '21.05',
    text: 'С 20-21 мая прошли отборочные региональные соревнования по лазерному бою.',
  },
];

function NextArrow(props) {
  const { className, style, onClick, ref } = props;
  return (
    <div ref={ref} className={cn(className, cl.arrow)} style={{ ...style }} onClick={onClick}>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="34.5" cy="34.5004" r="34.5" fill="#00BBFF" />
        <path
          d="M53.4142 36.4146C54.1953 35.6335 54.1953 34.3672 53.4142 33.5862L40.6863 20.8582C39.9052 20.0772 38.6389 20.0772 37.8579 20.8582C37.0768 21.6393 37.0768 22.9056 37.8579 23.6867L49.1716 35.0004L37.8579 46.3141C37.0768 47.0951 37.0768 48.3615 37.8579 49.1425C38.6389 49.9236 39.9052 49.9236 40.6863 49.1425L53.4142 36.4146ZM17 37.0004H52V33.0004H17V37.0004Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick, ref } = props;
  return (
    <div ref={ref} className={cn(className, cl.arrow)} style={{ ...style }} onClick={onClick}>
      <svg
        width="69"
        height="69"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="34.5"
          cy="34.5"
          r="34.5"
          transform="matrix(-1 0 0 1 69 0.000366211)"
          fill="white"
        />
        <path
          d="M15.5858 36.4146C14.8047 35.6335 14.8047 34.3672 15.5858 33.5862L28.3137 20.8582C29.0948 20.0772 30.3611 20.0772 31.1421 20.8582C31.9232 21.6393 31.9232 22.9056 31.1421 23.6867L19.8284 35.0004L31.1421 46.3141C31.9232 47.0951 31.9232 48.3615 31.1421 49.1425C30.3611 49.9236 29.0948 49.9236 28.3137 49.1425L15.5858 36.4146ZM52 37.0004H17V33.0004H52V37.0004Z"
          fill="#00BBFF"
        />
      </svg>
    </div>
  );
}

const News = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className={cl.news}>
      <div className={cn('news__container', cl.newsContainer)}>
        <div className={cl.newsInner}>
          <h2 className={cl.newsTitle}>НОВОСТИ</h2>
          <div className={cl.sliderContainer}>
            <Swiper
              spaceBetween={125}
              slidesPerView={3}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              wrapperClass={cl.sliderContent}
              className={cl.newsSlider}
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                319: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 80,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 90,
                },
                1920: {
                  slidesPerView: 3,
                  spaceBetween: 125,
                },
              }}>
              {newsList.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={cl.newsSlide}>
                      <div className={cl.newsItem}>
                        <p className={cl.newsItemStatus}>{item.status}</p>
                        <img className={cl.newsItemImg} src={item.img} alt={item.title} />
                        <div className={cl.newsItemDate}>{item.date}</div>
                        <div className={cl.newsItemText}>{item.text}</div>
                      </div>
                      <div className={cl.newsItemLink}>Подробнее</div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <button ref={navigationPrevRef} className={cl.prevButton}>
                <PrevArrow />
              </button>
              <button ref={navigationNextRef} className={cl.nextButton}>
                <NextArrow />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
