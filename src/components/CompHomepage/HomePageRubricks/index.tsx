"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { RubricItem } from "./RubricItem";
import { Pagination } from "@/components/Pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperI } from "swiper/types";

import "swiper/css";

import "swiper/css/effect-fade";
import { CategoryI } from "@/types/responses/HomepageResponse";

const cn = classNames.bind(cls);

interface RubricksProps {
  className?: string;
  categories: CategoryI[];
}

export const HomepageRubricks: FC<RubricksProps> = (props) => {
  const [mySwiper, setMySwiper] = useState<SwiperI>();
  const { className, categories } = props;
  const params = {
    breakpoints: {
      550: {
        slidesPerView: 5,
      },
      320: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className={cn(cls.rubrics)}>
      <h2 id="rubrics_title" className={cls.rubrics_title}>
        Все рубрики
      </h2>

      <Swiper
        // slidesPerView={5}
        loop={true}
        {...params}
        centeredSlides={true}
        centeredSlidesBounds={true}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setMySwiper(swiper)}
        className={cls.rubrics_slider}
        // {...params}
      >
        {categories?.map((cats) => (
          <SwiperSlide className={cls.rubrics_slide} key={cats.id}>
            {({ isActive, isNext, isPrev }) => (
              <RubricItem {...cats} className={cn({ active: isActive })} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Pagination
        onNextHandler={() => mySwiper?.slideNext()}
        onPrevHandler={() => mySwiper?.slidePrev()}
      />
    </section>
  );
};
