"use client";

import { FC, useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button, ThemeButton } from "@/ui/Button";
import { LikeButton } from "@/ui/LikeButton";
import { ProductPageI } from "@/types/responses/ProductPageRespone";

const cn = classNames.bind(cls);

interface ProductInfoProps {
  className?: string;
  isMobile?: boolean;
  productData: ProductPageI;
}

export const ProductInfo: FC<ProductInfoProps> = (props) => {
  const { className, isMobile = false } = props;
  const { str_date, name, price, description, like, id } = props.productData;

  return (
    <section className={cn(cls.info, className)}>
      <h3 className={cn(cls.info_title, cls.content_subtitle)}>
        Опубликовано <b>{str_date[1]}</b>
      </h3>

      {!isMobile && (
        <LikeButton className={cls.info_like} productId={id.toString()} initialStatus={like} />
      )}

      <h2 className={cn(cls.info_name, cls.content_title)}>{name}</h2>

      <span className={cls.info_price}>{price} ₸</span>

      <h2 className={cn(cls.info_descrTitle, cls.content_title)}>Описание:</h2>

      <p className={cls.info_descrText}>{description}</p>
    </section>
  );
};
