"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { ExchangeOffer } from "@/components/ExchangeOffer";
import { UserProductsService } from "@/services/UserProductsService";
import { EmptyResult } from "@/components/EmptyResult";
import { useEffect, useState } from "react";
import { exchangeProd } from "@/types/AdvertTypes";
const cn = classNames.bind(cls);

export default function Offers() {
  const {} = UserProductsService();

  const [offers, setOffers] = useState<exchangeProd[]>([]);
  const { activeExchange } = UserProductsService();

  useEffect(() => {
    const func = async () => {
      const res = await activeExchange();
      console.log(res);
      setOffers(res);
    };

    func();
  }, []);
  return (
    <>
      {offers.length ? (
        offers.map((off, i) => (
          <ExchangeOffer view="active" {...off} num={i} key={off.iexchange_id} />
        ))
      ) : (
        <EmptyResult place="advert" title="" />
      )}
    </>
  );
}
