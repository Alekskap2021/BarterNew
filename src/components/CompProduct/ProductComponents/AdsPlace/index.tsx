import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";

const cn = classNames.bind(cls);

interface AdsPlaceProps {
  className?: string;
  content: string;
}

export const AdsPlace: FC<AdsPlaceProps> = (props) => {
  const { className, content } = props;

  return (
    <section className={cn(cls.ads, className)}>
      <h3 className={cn(cls.ads_title)}>Рекалама</h3>
      <p className={cls.ads_text}>{content}</p>
    </section>
  );
};
