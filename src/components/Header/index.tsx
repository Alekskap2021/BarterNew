"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/LOGO.png";
import { Linkto, ThemeLink } from "@/ui/Link";
import { IconCabinet, IconFavorites, IconMessage } from "@/assets/icons";
import { useAuth } from "@/hooks/useAuth";

const cn = classNames.bind(cls);

interface indexProps {
  className?: string;
}

export const Header: FC<indexProps> = (props) => {
  const { className } = props;
  const isAuth = useAuth();

  return (
    <div className={cn(cls.Header)}>
      <div className={cls.Header_wrapper}>
        <Link href="/">
          <Image className={cls.Header_logo} src={logo} alt="logo" />
        </Link>

        <div className={cls.Header_actions}>
          <Linkto className={cls.Header_link} href={isAuth ? "/cabinet/messages/1" : "/auth"}>
            <IconMessage />
            Сообщения
          </Linkto>
          <Linkto className={cls.Header_link} href={isAuth ? "/favorites" : "/auth"}>
            <IconFavorites />
            Избранные
          </Linkto>
          <Linkto className={cls.Header_link} href={isAuth ? "/cabinet/advert" : "/auth"}>
            <IconCabinet />
            Личный кабинет
          </Linkto>
          <Linkto
            className={cls.Header_link}
            href={isAuth ? "/create-add" : "/auth"}
            theme={ThemeLink.FILL_YELLOW}
          >
            Подать объявление
          </Linkto>

          <div className={cls.Header_changeLang}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#373538"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H22"
                stroke="#373538"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
                stroke="#373538"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Рус</span>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#373538"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
