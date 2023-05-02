import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";

const cn = classNames.bind(cls);

interface ProductDetailsProps {
  className?: string;
}

export const ProductDetails: FC<ProductDetailsProps> = (props) => {
  const { className } = props;

  return <div className={cn(cls.index)}></div>;
};
