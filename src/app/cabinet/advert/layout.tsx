"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import cls from "./page.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";

const cn = classNames.bind(cls);

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  const activeLink = useSelectedLayoutSegment();
  return (
    <>
      <div className={cls.layout}>
        <nav className={cls.layout_links}>
          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === null })}
            href="/cabinet/advert"
            replace={true}
          >
            Активные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "waiting" })}
            href="/cabinet/advert/waiting"
            replace={true}
          >
            Ожидающие
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "unpaid" })}
            href="/cabinet/advert/unpaid"
            replace={true}
          >
            Неоплаченные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "inactive" })}
            href="/cabinet/advert/inactive"
            replace={true}
          >
            Неактивные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "rejected" })}
            href="/cabinet/advert/rejected"
            replace={true}
          >
            Отклоненные
          </Link>
        </nav>
        {children}
      </div>
    </>
  );
}
