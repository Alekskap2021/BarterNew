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
            href="/cabinet/offers"
            replace={true}
          >
            Активные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "waiting" })}
            href="/cabinet/offers/waiting"
            replace={true}
          >
            Ожидающие
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "paid" })}
            href="/cabinet/offers/paid"
            replace={true}
          >
            Оплаченные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "complete" })}
            href="/cabinet/offers/complete"
            replace={true}
          >
            Завершенные
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "bidding-stage" })}
            href="/cabinet/offers/bidding-stage"
            replace={true}
          >
            Стадия торгов
          </Link>

          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "rejected" })}
            href="/cabinet/offers/rejected"
            replace={true}
          >
            Отклоненные сделки
          </Link>
        </nav>
        {children}
      </div>
    </>
  );
}
