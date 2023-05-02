"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import mockImg from "../../../public/assets/images/HomePageCardItem.png";
import img2 from "../../../public/assets/images/SearchPageCardItem.png";
import Image from "next/image";
import Link from "next/link";
import { HomepgaeCardI, ThemeCardAdvert } from "@/types/cardTypes";
import { Button, ThemeButton } from "@/ui/Button";
import { LikeButton } from "@/ui/LikeButton";
import { CardItemI } from "@/types/responses/HomepageResponse";
import { ProductPageI } from "@/types/responses/ProductPageRespone";
import { UserProductsService } from "@/services/UserProductsService";

const cn = classNames.bind(cls);

interface CardItemProps extends CardItemI {
  className?: string;
}

export const CardItem: FC<CardItemProps> = (props) => {
  const { className, price, str_date, str_time, id, name, like, img } = props;
  const time = str_time[0] ? (
    <>
      <b>{str_time[0]}</b> - {str_time[1]}
    </>
  ) : (
    <b>{str_time[1]}</b>
  );

  return (
    <Link className={cn(cls.card, className)} href={`/${id}`}>
      <Image
        className={cls.card_img}
        src={img || mockImg}
        alt="card image"
        width={239}
        height={176}
      />

      <span className={cls.card_label}>
        <b>{str_date[0]}</b> - {str_date[1]}
      </span>

      <LikeButton
        className={cls.card_favoritesBtn}
        productId={id.toString()}
        initialStatus={like}
      />

      <div className={cls.card_container}>
        <h3 className={cls.card_title}>{name}</h3>
        <span className={cls.card_price}>{price} ₸</span>

        <span className={cls.card_date}>{time}</span>
      </div>
    </Link>
  );
};

export const CardItemFullSize: FC<CardItemProps> = (props) => {
  const { className, name, id, prod_condition, city, area, str_date, str_time, price, like, img } =
    props;

  return (
    <Link className={cn(cls.bigCard, className)} href={`/${id}`}>
      <Image className={cls.bigCard_img} src={img} alt="card image" width={213} height={146} />
      <div className={cls.bigCard_text}>
        <h3 className={cls.bigCard_title}>{name} </h3>
        <span className={cls.bigCard_state}>{prod_condition}</span>
        <span className={cls.bigCard_adress}>
          {city}, {area} / {str_time ? `${str_time[0]} ${str_time[1]}` : str_date[1]}
        </span>
      </div>

      <div className={cls.bigCard_price}>
        <span>{price}&nbsp;₸ </span>
        <LikeButton
          className={cls.bigCard_favoritesBtn}
          productId={id.toString()}
          initialStatus={like}
        />
      </div>
    </Link>
  );
};

interface CardAdvertProps extends ProductPageI {
  className?: string;
  theme?: ThemeCardAdvert;
  onDelete?: (id: any) => Promise<void>;
}

export const CardItemAdvert: FC<CardAdvertProps> = (props) => {
  const {
    className,
    theme = ThemeCardAdvert.ACTIVE,
    name,
    price,
    city,
    str_date,
    str_time,
    img,
    id,
    views,
    calls,
    favorites,

    onDelete,
  } = props;

  const { deleteActive } = UserProductsService();

  const isUnpaid = theme === "unpaid";
  const isInactive = theme === "inactive";

  return (
    <div className={cn(cls.cardAdvert, cls[theme], className)}>
      <div className={cls.cardAdvert_wrapper}>
        <Link href={`/${id}`}>
          <Image className={cls.bigCard_img} src={img} alt="card image" width={213} height={146} />
        </Link>

        <div className={cls.cardAdvert_info}>
          <Link href={`/${id}`}>
            <h3 className={cls.cardAdvert_title}>{name}</h3>
          </Link>

          <span className={cls.cardAdvert_adress}>
            {city}, Медеуский район / {str_time[0]} {str_time[1]}
          </span>
          <span className={cn(cls.price, cls.price_info, { price_red: isUnpaid })}>{price} ₸ </span>
          <span className={cls.cardAdvert_date}>{str_date[1]}</span>
        </div>

        <div className={cls.cardAdvert_price}>
          <span className={cn(cls.price, cls.price_main, { price_red: isUnpaid })}>{price} ₸ </span>

          <div className={cls.cardAdvert_icons}>
            <i>
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.234 8.91516C0.921996 8.34464 0.922001 7.65519 1.23401 7.08468C3.21667 3.45936 7.07058 1 11.5 1C15.9294 1 19.7834 3.45944 21.766 7.08484C22.078 7.65536 22.078 8.34481 21.766 8.91532C19.7833 12.5406 15.9294 15 11.5 15C7.07059 15 3.21663 12.5406 1.234 8.91516Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                />
                <circle cx="11.5" cy="8" r="3.5" stroke="#868686" strokeWidth="1.5" />
              </svg>
              {views}
            </i>

            <i>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5127 20.1314C17.3413 22.3029 11.7803 20.2625 7.09187 15.5741C2.40349 10.8858 0.363116 5.32475 2.53457 3.15328L3.96432 1.72354C4.95135 0.736506 6.57773 0.762597 7.59695 1.78181L9.81149 3.99636C10.8307 5.01557 10.8568 6.64196 9.86976 7.62899L9.56267 7.93608C9.02976 8.46899 8.97762 9.32868 9.4728 9.92874C9.95042 10.5075 10.4653 11.0841 11.0237 11.6424C11.582 12.2007 12.1585 12.7156 12.7373 13.1932C13.3373 13.6884 14.197 13.6363 14.7299 13.1033L15.037 12.7963C16.0241 11.8092 17.6504 11.8353 18.6697 12.8545L20.8842 15.0691C21.9034 16.0883 21.9295 17.7147 20.9425 18.7017L19.5127 20.1314Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                />
              </svg>
              {calls}
            </i>

            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9534 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08895 20.3373 4.75248C18.1203 2.416 14.5258 2.416 12.3088 4.75248V4.75248C12.1409 4.92938 11.8591 4.92938 11.6912 4.75248V4.75248C9.47421 2.416 5.87975 2.416 3.66275 4.75248C1.44575 7.08895 1.44575 10.8771 3.66275 13.2136Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                />
              </svg>
              {favorites}
            </i>
          </div>
        </div>
        {isInactive ? (
          <span className={cls.label}>Срок действия объявления истек</span>
        ) : (
          <span className={cls.label}>Отклонено</span>
        )}
      </div>

      <div className={cls.cardAdvert_btns}>
        <Button className={cn({ hidden: isUnpaid })} theme={ThemeButton.CLEAR}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5137 4.30589C14.5869 3.23113 16.3274 3.23047 17.4013 4.30442L19.8932 6.79627C20.958 7.86105 20.969 9.58481 19.918 10.6632L10.6849 20.1364C9.97933 20.8603 9.01167 21.2685 8.00124 21.2684L5.24909 21.2683C3.96984 21.2683 2.94823 20.2019 3.00203 18.9228L3.12019 16.1138C3.15968 15.1747 3.54996 14.2847 4.2138 13.6199L13.5137 4.30589ZM16.3415 5.36588C15.8533 4.87772 15.0622 4.87802 14.5744 5.36655L12.9113 7.03215L17.1911 11.3119L18.8446 9.61542C19.3224 9.12525 19.3173 8.34172 18.8333 7.85773L16.3415 5.36588ZM5.27446 14.6806L11.8514 8.09361L16.144 12.3862L9.61148 19.0887C9.18816 19.523 8.60756 19.7679 8.0013 19.7679L5.24916 19.7678C4.82274 19.7677 4.4822 19.4123 4.50014 18.9859L4.61829 16.1769C4.64199 15.6135 4.87616 15.0795 5.27446 14.6806ZM20.5148 21.1951C20.9289 21.1951 21.2645 20.8592 21.2645 20.4449C21.2645 20.0305 20.9289 19.6946 20.5148 19.6946H14.3931C13.9791 19.6946 13.6434 20.0305 13.6434 20.4449C13.6434 20.8592 13.9791 21.1951 14.3931 21.1951H20.5148Z"
              fill="#868686"
            />
          </svg>
          Редактировать
        </Button>

        <Button theme={ThemeButton.CLEAR}>
          {isUnpaid ? (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 10H23"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Оплатить
            </>
          ) : (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2789 12.7837L16.729 12.2737L17.2789 12.7837ZM11.2161 6.72082L11.7261 7.27072L11.2161 6.72082ZM20.1576 5.46426L20.9013 5.56153L20.1576 5.46426ZM18.5355 3.84214L18.6328 4.58581L18.5355 3.84214ZM7.1535 12.648L7.82693 12.9781L7.1535 12.648ZM11.3518 16.8463L11.0216 16.1728L11.3518 16.8463ZM8.71497 10.4345C8.42208 10.1416 7.9472 10.1416 7.65431 10.4345C7.36142 10.7274 7.36142 11.2022 7.65431 11.4951L8.71497 10.4345ZM12.5046 16.3454C12.7975 16.6383 13.2724 16.6383 13.5653 16.3454C13.8582 16.0525 13.8582 15.5777 13.5653 15.2848L12.5046 16.3454ZM7.19925 17.8612C7.49215 17.5683 7.49215 17.0934 7.19925 16.8005C6.90636 16.5076 6.43148 16.5076 6.13859 16.8005L7.19925 17.8612ZM3.71344 19.2257C3.42055 19.5185 3.42055 19.9934 3.71344 20.2863C4.00633 20.5792 4.48121 20.5792 4.7741 20.2863L3.71344 19.2257ZM5.38039 16.0423C5.67328 15.7494 5.67328 15.2745 5.38039 14.9816C5.08749 14.6887 4.61262 14.6887 4.31973 14.9816L5.38039 16.0423ZM3.10715 16.1942C2.81426 16.4871 2.81426 16.962 3.10715 17.2549C3.40004 17.5478 3.87492 17.5478 4.16781 17.2549L3.10715 16.1942ZM9.01811 19.68C9.31101 19.3871 9.31101 18.9123 9.01811 18.6194C8.72522 18.3265 8.25035 18.3265 7.95745 18.6194L9.01811 19.68ZM6.74488 19.8319C6.45199 20.1248 6.45199 20.5997 6.74488 20.8926C7.03777 21.1855 7.51265 21.1855 7.80554 20.8926L6.74488 19.8319ZM10.6704 19.8772L11.4129 19.7712L11.4129 19.7712L10.6704 19.8772ZM15.0963 16.9064L15.8388 16.8004L15.0963 16.9064ZM4.12249 13.3293L4.22856 12.5869L4.22856 12.5869L4.12249 13.3293ZM7.0933 8.90344L6.98724 9.64591L6.98724 9.64591L7.0933 8.90344ZM10.0208 15.9844L8.01539 13.979L6.95473 15.0396L8.96012 17.045L10.0208 15.9844ZM16.729 12.2737C15.1199 14.0087 12.4993 15.4484 11.0216 16.1728L11.6819 17.5197C13.1751 16.7876 16.0166 15.2476 17.8288 13.2937L16.729 12.2737ZM7.82693 12.9781C8.55137 11.5004 9.99104 8.8799 11.7261 7.27072L10.706 6.17093C8.75213 7.98311 7.21212 10.8246 6.48008 12.3178L7.82693 12.9781ZM19.4139 5.367C19.1537 7.35655 18.4644 10.4027 16.729 12.2737L17.8288 13.2937C19.9072 11.0528 20.6364 7.58673 20.9013 5.56153L19.4139 5.367ZM11.7261 7.27072C13.5971 5.5354 16.6432 4.84602 18.6328 4.58581L18.4382 3.09848C16.413 3.36335 12.947 4.09251 10.706 6.17093L11.7261 7.27072ZM20.9013 5.56153C21.0914 4.10811 19.8916 2.90839 18.4382 3.09848L18.6328 4.58581C19.1093 4.52349 19.4763 4.8905 19.4139 5.367L20.9013 5.56153ZM8.01539 13.979C7.73427 13.6979 7.66969 13.2989 7.82693 12.9781L6.48008 12.3178C6.02296 13.2502 6.24899 14.3339 6.95473 15.0396L8.01539 13.979ZM8.96012 17.045C9.66586 17.7508 10.7495 17.9768 11.6819 17.5197L11.0216 16.1728C10.7009 16.3301 10.3019 16.2655 10.0208 15.9844L8.96012 17.045ZM7.65431 11.4951L12.5046 16.3454L13.5653 15.2848L8.71497 10.4345L7.65431 11.4951ZM6.13859 16.8005L3.71344 19.2257L4.7741 20.2863L7.19925 17.8612L6.13859 16.8005ZM4.31973 14.9816L3.10715 16.1942L4.16781 17.2549L5.38039 16.0423L4.31973 14.9816ZM7.95745 18.6194L6.74488 19.8319L7.80554 20.8926L9.01811 19.68L7.95745 18.6194ZM12.8078 7.70618C11.8452 8.66876 11.8452 10.2294 12.8078 11.192L13.8684 10.1313C13.4916 9.75454 13.4916 9.14363 13.8684 8.76684L12.8078 7.70618ZM12.8078 11.192C13.7703 12.1546 15.331 12.1546 16.2936 11.192L15.2329 10.1313C14.8561 10.5081 14.2452 10.5081 13.8684 10.1313L12.8078 11.192ZM16.2936 11.192C17.2562 10.2294 17.2562 8.66876 16.2936 7.70618L15.2329 8.76684C15.6097 9.14363 15.6097 9.75454 15.2329 10.1313L16.2936 11.192ZM16.2936 7.70618C15.331 6.7436 13.7703 6.7436 12.8078 7.70618L13.8684 8.76684C14.2452 8.39005 14.8561 8.39005 15.2329 8.76684L16.2936 7.70618ZM14.3235 17.1036L11.5952 19.8319L12.6558 20.8926L15.3841 18.1643L14.3235 17.1036ZM11.4129 19.7712L11.0491 17.2248L9.56419 17.4369L9.92796 19.9833L11.4129 19.7712ZM14.1113 15.3149L14.3539 17.0125L15.8388 16.8004L15.5963 15.1028L14.1113 15.3149ZM11.5952 19.8319C11.5741 19.853 11.5571 19.8595 11.5442 19.8623C11.5283 19.8657 11.5076 19.8653 11.4853 19.8579C11.4629 19.8505 11.4461 19.8383 11.4355 19.826C11.4268 19.8161 11.4171 19.8007 11.4129 19.7712L9.92796 19.9833C10.1153 21.2946 11.7192 21.8292 12.6558 20.8926L11.5952 19.8319ZM15.3841 18.1643C15.7419 17.8065 15.9103 17.3012 15.8388 16.8004L14.3539 17.0125C14.3586 17.046 14.3474 17.0797 14.3235 17.1036L15.3841 18.1643ZM5.83543 8.61563L3.10713 11.3439L4.16779 12.4046L6.89609 9.67629L5.83543 8.61563ZM4.01643 14.0718L6.56284 14.4356L6.77497 12.9507L4.22856 12.5869L4.01643 14.0718ZM8.89698 8.4035L7.19937 8.16098L6.98724 9.64591L8.68485 9.88842L8.89698 8.4035ZM3.10713 11.3439C2.17051 12.2806 2.70515 13.8845 4.01643 14.0718L4.22856 12.5869C4.19901 12.5827 4.18367 12.573 4.17371 12.5643C4.16146 12.5537 4.14928 12.5368 4.14184 12.5145C4.13441 12.4922 4.13405 12.4714 4.13745 12.4556C4.14022 12.4426 4.14669 12.4257 4.16779 12.4046L3.10713 11.3439ZM6.89609 9.67629C6.92 9.65238 6.95377 9.64112 6.98724 9.64591L7.19937 8.16098C6.69851 8.08943 6.19319 8.25787 5.83543 8.61563L6.89609 9.67629Z"
                  fill="white"
                />
              </svg>
              Продвигать
            </>
          )}
        </Button>

        <Button
          className={cn({ hidden: isUnpaid })}
          theme={ThemeButton.CLEAR}
          onClick={() => onDelete(id)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19922 5.45458H22.7992M20.3992 5.45458V20.7273C20.3992 21.306 20.1464 21.8609 19.6963 22.2701C19.2462 22.6793 18.6357 22.9091 17.9992 22.9091H5.99922C5.3627 22.9091 4.75225 22.6793 4.30216 22.2701C3.85208 21.8609 3.59922 21.306 3.59922 20.7273V5.45458M7.19922 5.45458V3.27276C7.19922 2.69411 7.45208 2.13915 7.90216 1.72998C8.35225 1.32081 8.9627 1.09094 9.59922 1.09094H14.3992C15.0357 1.09094 15.6462 1.32081 16.0963 1.72998C16.5464 2.13915 16.7992 2.69411 16.7992 3.27276V5.45458M9.59922 10.9091V17.4546M14.3992 10.9091V17.4546"
              stroke="#C4C7CC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
