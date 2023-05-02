"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button, ThemeButton } from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/images/avatar.png";
import product from "@/assets/images/imageChatProduct.png";

const cn = classNames.bind(cls);

interface ChatHeaderProps {
  className?: string;
}

export const ChatHeader: FC<ChatHeaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cls.header}>
      <div className={cls.header_user}>
        <Image src={avatar} alt="user avatar" />

        <p>
          <span>Юлия</span>
          {/* header_status_offline if offline */}
          <span className={cn(cls.header_status, cls.header_status_offline)}>В сети</span>
        </p>
      </div>

      <div className={cls.header_btns}>
        <Button theme={ThemeButton.CLEAR}>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button theme={ThemeButton.CLEAR}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H16"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button theme={ThemeButton.CLEAR}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6725 7.75L17.1075 2.935C17.1872 2.82306 17.2346 2.69138 17.2446 2.55433C17.2545 2.41727 17.2266 2.28012 17.1639 2.15784C17.1013 2.03556 17.0062 1.93285 16.8891 1.86093C16.772 1.78901 16.6374 1.75063 16.5 1.75H2.25V1C2.25 0.801088 2.17098 0.610322 2.03033 0.46967C1.88968 0.329018 1.69891 0.25 1.5 0.25C1.30109 0.25 1.11032 0.329018 0.96967 0.46967C0.829018 0.610322 0.75 0.801088 0.75 1V19C0.75 19.1989 0.829018 19.3897 0.96967 19.5303C1.11032 19.671 1.30109 19.75 1.5 19.75C1.69891 19.75 1.88968 19.671 2.03033 19.5303C2.17098 19.3897 2.25 19.1989 2.25 19V13.75H16.5C16.6374 13.7494 16.772 13.711 16.8891 13.6391C17.0062 13.5671 17.1013 13.4644 17.1639 13.3422C17.2266 13.2199 17.2545 13.0827 17.2446 12.9457C17.2346 12.8086 17.1872 12.6769 17.1075 12.565L13.6725 7.75ZM2.25 12.25V3.25H15.045L12.1425 7.315C12.0521 7.44202 12.0035 7.59407 12.0035 7.75C12.0035 7.90593 12.0521 8.05798 12.1425 8.185L15.045 12.25H2.25Z"
              fill="#868686"
            />
          </svg>
        </Button>
        <Button theme={ThemeButton.CLEAR}>
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.05063 6.73418C1.20573 5.60763 2.00954 4 3.41772 4H14.5823C15.9905 4 16.7943 5.60763 15.9494 6.73418V6.73418C15.3331 7.55584 15 8.5552 15 9.58228V16C15 18.2091 13.2091 20 11 20H7C4.79086 20 3 18.2091 3 16V9.58228C3 8.5552 2.66688 7.55584 2.05063 6.73418V6.73418Z"
              stroke="#868686"
              strokeWidth="1.5"
            />
            <path
              d="M11 15L11 9"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 15L7 9"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 4L12.4558 2.36754C12.1836 1.55086 11.4193 1 10.5585 1H7.44152C6.58066 1 5.81638 1.55086 5.54415 2.36754L5 4"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </div>

      <Link className={cls.product} href="/1">
        <Image className={cls.product_img} src={product} alt="product img" />

        <p className={cls.product_info}>
          <span>Аллюминивая кружка</span>
          <span>Алматы, Медеуский район</span>
          <span>Вчера 19:57</span>
          <span>10 000 ₸</span>
        </p>
      </Link>
    </div>
  );
};
