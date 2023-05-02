import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./FooterMobile.module.scss";
import Link from "next/link";
import { IconFavorites, IconHome, IconMessage, IconUser } from "@/assets/icons";

const cn = classNames.bind(cls);

interface FooterMobileProps {
  className?: string;
  activeLink: string | null;
}

export const FooterMobile: FC<FooterMobileProps> = (props) => {
  const { className, activeLink } = props;

  return (
    <nav className={cn(cls.FooterMobile)}>
      <div className={cls.FooterMobile_wrapper}>
        <div>
          <Link
            className={cn(cls.FooterMobile_link, { FooterMobile_linkActive: activeLink === null })}
            href="/"
          >
            <IconHome strokeColor="#868686" />
            Главная
          </Link>

          <Link
            className={cn(cls.FooterMobile_link, {
              FooterMobile_linkActive: activeLink === "favorites",
            })}
            href="/favorites"
          >
            <IconFavorites strokeColor="#868686" />
            Избранное
          </Link>
        </div>

        <div>
          <Link
            className={cn(cls.FooterMobile_link, {
              FooterMobile_linkActive: activeLink === "messages",
            })}
            href="/cabinet/messages"
          >
            <IconMessage strokeColor="#868686" withDottes={true} />
            Сообщения
          </Link>

          <Link
            className={cn(cls.FooterMobile_link, {
              FooterMobile_linkActive: activeLink === "cabinet",
            })}
            href="/cabinet"
          >
            <IconUser strokeColor="#868686" />
            Профиль
          </Link>
        </div>

        <Link className={cls.FooterMobile_add} href="/create-add">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3653_5138)">
              <path
                d="M34.125 22.75H11.375"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.75 11.375V34.125"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3653_5138">
                <rect
                  width="32.1734"
                  height="32.1734"
                  fill="white"
                  transform="translate(22.75) rotate(45)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </nav>
  );
};
