import classNames from "classnames/bind";
import Link from "next/link";
import cls from "./page.module.scss";
import emptryFavorites from "@/assets/images/emptryFavorites.png";
import { EmptyResult } from "@/components/EmptyResult";
import { CardsList } from "@/components/CardsList";

const cn = classNames.bind(cls);

export default function Favorites() {
  return (
    <section className={cls.latest}>
      <EmptyResult title="Нет избранных объявлений" place="search" />

      {/* <CardsList productsArr={mockHomepageCard} /> */}
    </section>
  );
}
