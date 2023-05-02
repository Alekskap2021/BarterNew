"use client";
//  @ts-ignore
// @ts-nocheck
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { CardsList } from "@/components/CardsList";
import { FavoritesService } from "@/services/FavoritesService";
import { CardItemI } from "@/types/responses/HomepageResponse";
import { EmptyResult } from "@/components/EmptyResult";

const cn = classNames.bind(cls);

export default function Favorites() {
  const { getAllFavorites } = FavoritesService();
  const [favList, setFavList] = useState<CardItemI[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await getAllFavorites();
      console.log(res);
      setFavList(res);
    };
    func();
  }, []);

  return (
    <section className={cls.favorites}>
      {favList.length ? (
        <CardsList productsArr={favList} />
      ) : (
        <EmptyResult place="favorites" title="" />
      )}
    </section>
  );
}
