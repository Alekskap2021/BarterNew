"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import cls from "./page.module.scss";
import { Backlink } from "@/ui/Backlink";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button, ThemeButton } from "@/ui/Button";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

const cn = classNames.bind(cls);

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  const activeLink = useSelectedLayoutSegment();
  const { push } = useRouter();
  const isMessages = activeLink === "messages";

  const logoutHandler = () => {
    destroyCookie(null, "access_token", { path: "/" });
    destroyCookie(null, "refresh_token", { path: "/" });
    push("/auth");
  };

  return (
    <>
      <Backlink className={cls.backlink} />

      <div className={cls.layout}>
        <div className={cls.layout_info}>
          <h1 className="title">Объявления</h1>
          <div className={cls.layout_balance}>
            <span>Баланс: 0 ₸</span>
            <Button theme={ThemeButton.CLEAR}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.5C19 7.88071 15.866 9 12 9C8.13401 9 5 7.88071 5 6.5M19 6.5C19 5.11929 15.866 4 12 4C8.13401 4 5 5.11929 5 6.5M19 6.5V18.5C19 19.8807 15.866 21 12 21C8.13401 21 5 19.8807 5 18.5V6.5M19 10.5C19 11.8807 15.866 13 12 13C8.13401 13 5 11.8807 5 10.5M19 14.5C19 15.8807 15.866 17 12 17C8.13401 17 5 15.8807 5 14.5"
                  stroke="#373538"
                  strokeWidth="2"
                />
              </svg>
              Пополнить счет
            </Button>
            <Button theme={ThemeButton.CLEAR} onClick={() => logoutHandler()}>
              Выйти
            </Button>
          </div>
        </div>

        <nav className={cls.layout_links}>
          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "advert" })}
            href="/cabinet/advert"
          >
            Объявления
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "offers" })}
            href="/cabinet/offers"
          >
            Предложения об обмене
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "messages" })}
            href="/cabinet/messages"
          >
            Сообщения
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "settings" })}
            href="/cabinet/settings"
          >
            Настройки
          </Link>
        </nav>
      </div>
      <div className={cn(cls.children, { children_msg: isMessages })}>{children}</div>
    </>
  );
}
