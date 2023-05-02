"use client";
import classNames from "classnames/bind";
import Link from "next/link";
import cls from "./page.module.scss";
import { Backlink } from "@/ui/Backlink";
import { useSelectedLayoutSegment } from "next/navigation";

const cn = classNames.bind(cls);

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  const activeLink = useSelectedLayoutSegment();
  return (
    <>
      <Backlink className={cls.backlink} />

      <div className={cls.layout}>
        <h1 className="title">Избранные объявление</h1>
        <nav className={cls.layout_links}>
          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === null })}
            href="/favorites"
            replace={true}
          >
            Избранные объявления
          </Link>
          <Link
            className={cn(cls.layout_link, { layout_link_active: activeLink === "latest" })}
            href="/favorites/latest"
            replace={true}
          >
            Недавно просмотренные
          </Link>
        </nav>
      </div>
      {children}
    </>
  );
}
