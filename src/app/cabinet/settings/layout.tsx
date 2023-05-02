"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import cls from "./page.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";

const cn = classNames.bind(cls);

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const activeLink = useSelectedLayoutSegment();

  return (
    <>
      <div className={cls.layout}>
        <nav className={cls.layout_links}>
          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === null })}
            href="/cabinet/settings"
            replace={true}
          >
            Мой профиль
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "change-pass" })}
            href="/cabinet/settings/change-pass"
            replace={true}
          >
            Изменить пароль
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "change-email" })}
            href="/cabinet/settings/change-email"
            replace={true}
          >
            Изменить e-mail
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "change-phone" })}
            href="/cabinet/settings/change-phone"
            replace={true}
          >
            Изменить телефон
          </Link>
        </nav>
        <div className={cls.wrapper}> {children}</div>
      </div>
    </>
  );
}
