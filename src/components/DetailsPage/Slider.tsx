import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import SwiperClass from 'swiper/types/swiper-class';
import Image from 'next/image';
import { DetailsPageProps, IImages } from '@/../pages/detail/[id]';

export const Slider = ({ data }: DetailsPageProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [fullImg, setFullImg] = useState('');
  const [isMore, setIsMore] = useState(false);

  const showFullImg = (img: string) => {
    setFullImg(img);
  };

  useEffect(() => {
    const isMore = data?.images?.length === 1;
    setIsMore(isMore);
  }, []);

  return (
    <div className="swiper-wrap">
      <div className="swiper-price">{data.price} ₸</div>
      <Swiper
        modules={[FreeMode, Thumbs, Navigation]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        navigation={true}
        slidesPerView={'auto'}
        spaceBetween={10}
        className={isMore ? 'swiper-one swiper-top' : 'swiper-top'}
      >
        {data?.images?.map((el: IImages, index: number) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <div className="swiper-slide-cont">
                <div className="zoom" onClick={() => showFullImg(el.image!)}>
                  <Image
                    src="/details/zoom.svg"
                    alt="bigger image"
                    width={10}
                    height={10}
                  />
                </div>
                <Image src={el.image!} alt="error" width={100} height={100} />
              </div>
            </SwiperSlide>
          );
        })}
        {data?.images.length === 0 && (
          <SwiperSlide>
            <div className="swiper-slide-cont">
              <Image src="/good.png" alt="img" width={100} height={100} />
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, Navigation, FreeMode]}
        freeMode={true}
        watchSlidesProgress={true}
        slidesPerView={'auto'}
        className="bottom-swiper"
      >
        {data?.images.map((el, index: number) => {
          return (
            <SwiperSlide key={`slide-bottom-${index}`}>
              <div className="swiper-slide-cont">
                <Image
                  src={el.image || '/good.png'}
                  alt="images"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {fullImg.length > 1 && (
        <div className="fullImg" onClick={() => setFullImg('')}>
          <Image src={fullImg} alt="the image" width={100} height={100} />
        </div>
      )}
    </div>
  );
};
