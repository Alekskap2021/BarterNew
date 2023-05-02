"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { UserProductsService } from "@/services/UserProductsService";
import { useEffect, useState } from "react";
import { ExchangeOffer } from "@/components/ExchangeOffer";
import { exchangeProd } from "@/types/AdvertTypes";
import { EmptyResult } from "@/components/EmptyResult";

const cn = classNames.bind(cls);

export default function Waiting() {
  const [offers, setOffers] = useState<exchangeProd[]>([]);
  const { waitingExchange } = UserProductsService();

  useEffect(() => {
    const func = async () => {
      const res = await waitingExchange();
      console.log(res);
      setOffers(res);
    };

    func();
  }, []);

  return (
    <>
      {offers.length ? (
        offers.map((off, i) => (
          <ExchangeOffer view="waiting" {...off} key={off.iexchange_id} num={i} />
        ))
      ) : (
        <EmptyResult place="advert" title="" />
      )}
    </>
  );
}
