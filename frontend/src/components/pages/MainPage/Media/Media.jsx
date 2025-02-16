import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageSlide from '../../../../assets/mediaImgSlides/imageSlide.png';
import imageSlide1 from '../../../../assets/mediaImgSlides/imageSlide1.png';
import imageSlide2 from '../../../../assets/mediaImgSlides/imageSlide2.png';
import imageSlide3 from '../../../../assets/mediaImgSlides/imageSlide3.png';
import imageSlide4 from '../../../../assets/mediaImgSlides/imageSlide4.png';
import cl from './Media.module.scss';

const imagesList = [
  {
    id: 0,
    img: imageSlide,
  },
  {
    id: 1,
    img: imageSlide1,
  },
  {
    id: 2,
    img: imageSlide2,
  },
  {
    id: 3,
    img: imageSlide3,
  },
  {
    id: 4,
    img: imageSlide4,
  },
  {
    id: 5,
    img: imageSlide1,
  },
  {
    id: 6,
    img: imageSlide2,
  },
  {
    id: 7,
    img: imageSlide3,
  },
  {
    id: 8,
    img: imageSlide4,
  },
];

const Media = () => {
  const swiperRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(2);
  const updateIndex = React.useCallback(
    () => setActiveIndex(swiperRef.current.swiper.realIndex),
    [],
  );
  React.useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);
  return (
    <section className={cl.media}>
      <div className="media__container">
        <div className={cl.mediaInner}>
          <div className={cl.mediaHeader}>
            <div>
              <h2 className={cl.mediaTitle}>МЕДИА</h2>
              <p className={cl.mediaSubtitle}>
                ИГРАЙ С НАМИ!
                <svg
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.6524 1.4577C18.3345 -0.187936 20.6655 -0.187937 21.3476 1.4577L25.233 10.832C25.5208 11.5265 26.1738 12.0009 26.9232 12.06L37.0394 12.8584C38.8152 12.9986 39.5356 15.2156 38.1812 16.3728L30.4664 22.9648C29.8949 23.4532 29.6454 24.2208 29.8208 24.9518L32.1875 34.8196C32.603 36.5518 30.7171 37.922 29.1981 36.9915L20.5446 31.6913C19.9036 31.2987 19.0964 31.2987 18.4554 31.6913L9.80195 36.9915C8.28286 37.922 6.39701 36.5518 6.81248 34.8196L9.17922 24.9518C9.35455 24.2208 9.10514 23.4532 8.53361 22.9648L0.818756 16.3728C-0.535565 15.2156 0.184768 12.9986 1.96063 12.8584L12.0768 12.06C12.8262 12.0009 13.4792 11.5265 13.767 10.832L17.6524 1.4577Z"
                    fill="#FF0000"
                  />
                </svg>
              </p>
            </div>
            <div className={cl.mediaHeaderLeftSide}>
              <NavLink className={cl.allMediaLink} to="gallery">
                ВСЕ МЕДИА
              </NavLink>
              <p className={cl.blueBlock}></p>
            </div>
          </div>
          <div className={cl.swiperContainer}>
            <Swiper
              ref={swiperRef}
              effect={'cards'}
              modules={[Autoplay, EffectCards]}
              initialSlide={activeIndex}
              slidesPerView={'2'}
              grabCursor={false}
              init={false}
              centeredSlides={true}
              loop={true}
              watchOverflow={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              cardsEffect={{
                perSlideOffset: 30,
                perSlideRotate: 1,
                slideShadows: false,
              }}>
              {imagesList.map((item) => {
                if (activeIndex === item.id) {
                  console.log('activeIndex === item', activeIndex === item.id);
                  console.log(' item', item);
                  console.log('activeIndex', activeIndex);
                }
                return (
                  <SwiperSlide
                    className={cn(cl.mediaSlide, { [cl.activeSlide]: activeIndex === item.id })}
                    key={item.id}>
                    <img className={cl.img} src={item.img} alt="Картинка медиа" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
