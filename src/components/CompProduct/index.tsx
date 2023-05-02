"use client";

import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { HomepagePrompt, HomepageSearch } from "@/components/CompHomepage";
import { Backlink } from "@/ui/Backlink";
import { AdsPlace, DeliveryCalculate, ProductImagesSlider, ProductInfo } from "./ProductComponents";
import { Button, ThemeButton } from "@/ui/Button";
import { Linkto, ThemeLink } from "@/ui/Link";
import Link from "next/link";
import { CardsList } from "@/components/CardsList";
import { useMedia } from "@/hooks/useMedia";
import { UserInfoService } from "@/services/UserInfoService";

import Image from "next/image";
import offerImg from "@/assets/images/ImageOffer.png";
import imageMap from "@/assets/images/imageMap.png";
import { ProductPageI } from "@/types/responses/ProductPageRespone";

const cn = classNames.bind(cls);

interface ProductPCProps {
  className?: string;
  productData: ProductPageI;
  myAds?: ProductPageI[];
}

export const Product: FC<ProductPCProps> = (props) => {
  const {
    imgs,
    full_name,
    str_online,
    area,
    city,
    region,
    views,
    id,
    advertising_html,
    authors_products,
    similar_products,
    is_mine,
  } = props.productData;

  const [tablet, setTablet] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("Показать телефон");
  const { showUserPhone } = UserInfoService();

  const { isTablet } = useMedia();
  useEffect(() => setTablet(isTablet), [isTablet]);

  const onShowPhoneHandler = async () => {
    if (number === "Показать телефон") {
      const res = await showUserPhone(id);
      res.ok && setNumber(res.phone);
    } else setNumber("Показать телефон");
  };

  return (
    <main className={cls.product}>
      <Image src={offerImg} alt="offerImg" className={cls.product_img} />
      <HomepagePrompt className={cls.product_pcElems} />
      <HomepageSearch className={cls.product_pcElems} />
      <Backlink
        text="Назад"
        alwaysShow={true}
        className={cn(cls.product_backlink, { hidden: tablet })}
      />

      <div className={cls.content}>
        <ProductImagesSlider
          className={cn(cls.slider, cls.content_section)}
          imgs={imgs}
          isMobile={true}
        />

        {/* User && Contacts */}
        <section
          className={cn(cls.user, cls.content_section)}
          style={is_mine ? { pointerEvents: "none", filter: "grayscale(1)" } : {}}
        >
          <h3 className={cn(cls.user_title, cls.content_subtitle)}>Пользователь</h3>
          <h2 className={cn(cls.user_name, cls.content_title)}>{full_name[0]}</h2>
          <span className={cls.user_online}>{str_online}</span>

          <Button
            className={cls.user_btn}
            theme={ThemeButton.FILL_WHITE}
            onClick={onShowPhoneHandler}
          >
            {number}
          </Button>

          <Linkto className={cls.user_msgLink} theme={ThemeLink.FILL_WHITE} href="/messages">
            Написать сообщение
          </Linkto>

          <Link className={cls.user_all} href="/1/#all">
            Все объявления автора
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="#373538"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </section>

        {/* Map */}
        <section className={cn(cls.map, cls.content_section)}>
          <h3 className={cn(cls.map_title, cls.content_subtitle)}>Местоположение</h3>

          <h2 className={cn(cls.map_adress, cls.content_title)}>
            {city}, {area} район, {region}
          </h2>

          <Image src={imageMap} alt="map" />
        </section>

        {/* Info && Exchange */}
        <div className={cn(cls.flex, cls.content_section)}>
          <ProductInfo productData={props.productData} />
          <DeliveryCalculate
            style={is_mine ? { pointerEvents: "none", filter: "grayscale(1)" } : {}}
            className={cn(cls.flex_calc)}
            myAds={props.myAds}
            id={id}
            price={props.productData.price}
          />

          {/* Count of views && ID */}
          <div className={cls.flex_footer}>
            <span className={cls.flex_footerLabel}>ID: {id} </span>
            <span className={cls.flex_footerLabel}>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.13371 5.52298C0.955426 5.19697 0.955429 4.803 1.13372 4.47699C2.26667 2.40538 4.4689 1.00003 6.99998 1.00003C9.53109 1.00003 11.7334 2.40543 12.8663 4.47708C13.0446 4.8031 13.0446 5.19706 12.8663 5.52307C11.7333 7.59468 9.5311 9.00003 7.00002 9.00003C4.46891 9.00003 2.26665 7.59464 1.13371 5.52298Z"
                  stroke="#868686"
                />
                <circle cx="7" cy="5.00003" r="2" stroke="#868686" />
              </svg>
              {views}
            </span>
          </div>
        </div>

        {/* Other adverts */}
        <section className={cn(cls.otherProducts, cls.content_section)}>
          <h2 className="title">Все объявления автора</h2>
          <CardsList productsArr={authors_products.slice(0, 3)} />

          <h2 className="title">Похожие объявления</h2>
          <CardsList productsArr={similar_products.slice(0, 5)} />
        </section>

        {/* Advertisement */}
        <AdsPlace className={cn(cls.ad, cls.content_section)} content={advertising_html} />
      </div>
    </main>
  );
};
