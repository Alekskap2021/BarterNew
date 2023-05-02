"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Pagination } from "@/components/Pagination";
import Image from "next/image";
import imageProduct from "@/assets/images/imageProduct.png";
import nullImg from "../../../../../public/assets/images/nullImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperI } from "swiper/types";
import { EffectFade, EffectCoverflow, Grid } from "swiper";
import { useMedia } from "@/hooks/useMedia";

import "swiper/css";
import "swiper/css/effect-fade";

const cn = classNames.bind(cls);

interface sliderProps {
  className?: string;
  isMobile?: boolean;
  imgs: string[];
}

export const ProductImagesSlider: FC<sliderProps> = (props) => {
  const { className, imgs } = props;
  const { isMobile } = useMedia();

  const [mySwiper, setMySwiper] = useState<SwiperI>(null);

  return (
    <section className={cn(className, cls.sec)}>
      <Swiper
        slidesPerView={1}
        modules={[EffectFade]}
        centeredSlides={true}
        effect="fade"
        loop={true}
        centeredSlidesBounds={true}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setMySwiper(swiper)}
        className={cn(cls.swiper, { swiper_mobile: isMobile })}
      >
        {imgs.map((img, i) => (
          <SwiperSlide className={cls.swiper_slide} key={i}>
            <Image
              className={cls.swiper_img}
              src={img}
              width={650}
              height={475}
              alt="product image"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className={cls.swiper_slide}>
          <Image className={cls.swiper_img} src={imageProduct} alt="product image" />
        </SwiperSlide>

        <SwiperSlide className={cls.swiper_slide}>
          <Image className={cls.swiper_img} src={nullImg} alt="product image" />
        </SwiperSlide> */}
      </Swiper>

      {!isMobile && (
        <Pagination
          onNextHandler={() => mySwiper?.slideNext()}
          onPrevHandler={() => mySwiper?.slidePrev()}
        />
      )}
    </section>
  );
};
