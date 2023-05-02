import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import apple from "@/assets/icons/AppleAppIco.svg";
import google from "@/assets/icons/GoogleAppIco.svg";

const cn = classNames.bind(cls);

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <div className={cls.Footer}>
      <ul className={cls.Footer_links}>
        <li>
          <Link href="/"> Помощь и Обратная связь</Link>
        </li>
        <li>
          <Link href="/"> Мобильное приложение</Link>
        </li>
        <li>
          <Link href="/"> Платные услуги</Link>
        </li>
        <li>
          <Link href="/"> Реклама на сайте</Link>
        </li>
        <li>
          <Link href="/"> Сотрудничество</Link>
        </li>
        <li>
          <Link href="/"> Условия использования</Link>
        </li>
        <li>
          <Link href="/user-agreement"> Политика конфиденциальности</Link>
        </li>
        <li>
          <Link href="/"> Как обмениваться товарами?</Link>
        </li>
        <li>
          <Link href="/"> Правила безопасности</Link>
        </li>
        <li>
          <Link href="/"> Карта сайта</Link>
        </li>
        <li>
          <Link href="/"> Карта регионов</Link>
        </li>
        <li>
          <Link href="/"> Часто задаваемые запросы</Link>
        </li>
      </ul>

      <div className={cls.Footer_apps}>
        <p>Мобильные приложения для вашего смартфона</p>
        <Link href="/">
          <Image src={apple} alt="app icon"></Image>
        </Link>
        <Link href="/">
          <Image src={google} alt="app icon"></Image>
        </Link>
      </div>
    </div>
  );
};
