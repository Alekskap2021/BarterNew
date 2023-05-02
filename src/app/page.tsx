"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import cls from "./page.module.scss";
import offerImg from "@/assets/images/ImageOffer.png";
import { mockHomepageCard } from "@/mocks/mockHomepageCards";
import logo from "@/assets/images/LOGO2.svg";
import { HomepageService } from "@/services/HomepageService";
import { parseCookies } from "nookies";

import {
  HomepageCategories,
  HomepagePrompt,
  HomepagePromptBig,
  HomepageRubricks,
  HomepageSearch,
} from "@/components/CompHomepage";
import { Pagination } from "@/components/Pagination";
import { CardsList } from "@/components/CardsList";

const cn = classNames.bind(cls);

export default function Home(ctx) {
  const { getHomepageData } = HomepageService();
  const [cats, setCats] = useState([]);
  const [rec, setRec] = useState([]);
  const [vip, setVip] = useState([]);
  const [hot, setHot] = useState([]);
  const [prompt1, setPrompt1] = useState("");
  const [prompt2, setPrompt2] = useState("");

  useEffect(() => {
    const func = async () => {
      const {
        categories,
        products_popular,
        products_vip,
        products_hot,
        promt_footer_1,
        promt_footer_2,
      } = await getHomepageData();

      setCats(categories);
      setRec(products_popular);
      setVip(products_vip);
      setHot(products_hot);
      setPrompt1(promt_footer_1);
      setPrompt2(promt_footer_2);
    };

    func();
  }, []);

  return (
    <main className={cls.home}>
      <Image src={offerImg} alt="offerImg" className={cls.home_img} />
      <HomepagePrompt />

      <HomepageSearch place="main" />

      <HomepageRubricks categories={cats} />

      {/* Recommended */}
      <section>
        <h2 className="title">Рекомендованные</h2>
        <CardsList productsArr={rec} />
        <Pagination text="Смотреть все" />
      </section>

      {/* Vip */}
      <section>
        <h2 className="title">VIP предложения</h2>
        <CardsList productsArr={vip} />
        <Pagination text="Смотреть все" />
      </section>

      {/* Hot */}
      <section>
        <h2 className="title">Горячие</h2>
        <CardsList productsArr={hot} />
        <Pagination text="Смотреть все" />
      </section>

      <HomepagePromptBig text={prompt1} />

      <div className={cls.home_about}>
        <Image src={logo} alt="logo" />

        <p>{prompt2}</p>
      </div>

      <HomepageCategories categories={cats} />

      <div className={cls.home_sections}></div>
    </main>
  );
}
