"use client";

import { useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./page.module.scss";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Button, ThemeButton } from "@/ui/Button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useMedia } from "@/hooks/useMedia";

const cn = classNames.bind(cls);

export default function Cabinet() {
  const { isMobile } = useMedia();

  useEffect(() => {
    if (!isMobile) {
      redirect("cabinet/advert");
    }
  }, [isMobile]);

  return (
    <div className={cls.cabinet}>
      <div className={cls.user}>
        <Image className={cls.user_img} src={avatar} alt="user avatar" />
        <h2 className={cls.user_title}>Привет, Юлия!</h2>
        <div className={cls.user_balance}>
          <span>
            Пополнить кошелёк: <b>0.00</b>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5156 0C17.9644 0 20 1.98459 20 5.3818H15.7689V5.41647C13.8052 5.41647 12.2133 6.96849 12.2133 8.883C12.2133 10.7975 13.8052 12.3495 15.7689 12.3495H20V12.6615C20 16.0154 17.9644 18 14.5156 18H5.48444C2.03556 18 0 16.0154 0 12.6615V5.33847C0 1.98459 2.03556 0 5.48444 0H14.5156ZM19.2533 6.87241C19.6657 6.87241 20 7.19834 20 7.60039V10.131C19.9952 10.5311 19.6637 10.8543 19.2533 10.8589H15.8489C14.8548 10.872 13.9855 10.2084 13.76 9.26432C13.6471 8.67829 13.8056 8.07357 14.1931 7.61222C14.5805 7.15087 15.1573 6.88007 15.7689 6.87241H19.2533ZM16.2489 8.04237H15.92C15.7181 8.04005 15.5236 8.11664 15.38 8.25504C15.2364 8.39344 15.1556 8.58213 15.1556 8.77901C15.1555 9.19205 15.4964 9.52823 15.92 9.53298H16.2489C16.6711 9.53298 17.0133 9.1993 17.0133 8.78767C17.0133 8.37605 16.6711 8.04237 16.2489 8.04237ZM10.3822 3.89119H4.73778C4.31903 3.89116 3.9782 4.2196 3.97333 4.62783C3.97333 5.04087 4.31415 5.37705 4.73778 5.3818H10.3822C10.8044 5.3818 11.1467 5.04812 11.1467 4.6365C11.1467 4.22487 10.8044 3.89119 10.3822 3.89119Z"
                fill="url(#paint0_linear_2523_101387)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2523_101387"
                  x1="0"
                  y1="9"
                  x2="20"
                  y2="9"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F9D423" />
                  <stop offset="0.523958" stopColor="#FFE24C" />
                  <stop offset="1" stopColor="#F9CB26" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <Button theme={ThemeButton.CLEAR}>
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9987 42.1667C33.5842 42.1667 42.1654 33.5855 42.1654 23C42.1654 12.4146 33.5842 3.83337 22.9987 3.83337C12.4132 3.83337 3.83203 12.4146 3.83203 23C3.83203 33.5855 12.4132 42.1667 22.9987 42.1667Z"
                fill="url(#paint0_linear_2523_101382)"
              />
              <path
                d="M23 15.3334V30.6667"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.332 23H30.6654"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2523_101382"
                  x1="3.83203"
                  y1="23"
                  x2="42.1654"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F9D423" />
                  <stop offset="0.523958" stopColor="#FFE24C" />
                  <stop offset="1" stopColor="#F9CB26" />
                </linearGradient>
              </defs>
            </svg>
          </Button>
        </div>
      </div>

      {/* My adds */}
      <section className={cn(cls.sect)}>
        <h2 className={cls.sect_title}>Мои объявления</h2>
        <Link className={cls.sect_link} href="/cabinet/advert">
          <span>
            Активные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className={cls.sect_link} href="/cabinet/advert/waiting">
          <span>
            Ожидающие <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className={cls.sect_link} href="/cabinet/advert/unpaid">
          <span>
            Неоплаченные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className={cls.sect_link} href="/cabinet/advert/inactive">
          <span>
            Неактивные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className={cls.sect_link} href="/cabinet/advert/rejected">
          <span>
            Отклоненные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {/* My exchange offers */}
      <section className={cn(cls.sect)}>
        <h2 className={cls.sect_title}>Предложения об обмене</h2>
        <Link className={cls.sect_link} href="/cabinet/offers">
          <span>
            Активные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/offers/waiting">
          <span>
            Ожидающие <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/offers/paid">
          <span>
            Оплаченные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/offers/complete">
          <span>
            Завершенные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/offers/rejected">
          <span>
            Отклоненные <b>/ 3</b>
          </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {/* Settings */}
      <section className={cn(cls.sect)}>
        <h2 className={cls.sect_title}>Настройки</h2>
        <Link className={cls.sect_link} href="/cabinet/settings">
          <span>Данные профиля</span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/settings/change-pass">
          <span>Изменить пароль</span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/settings/change-email">
          <span>Изменить Email</span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/cabinet/settings/change-phone">
          <span>Изменить телефон </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {/* Others info */}
      <section className={cn(cls.sect)}>
        <h2 className={cls.sect_title}>Другое</h2>
        <Link className={cls.sect_link} href="/user-agreement">
          <span>Cпособы оплаты и возврата</span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Link className={cls.sect_link} href="/user-agreement">
          <span>Политика конфиденциальности </span>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      <Button>Выйти</Button>
    </div>
  );
}
