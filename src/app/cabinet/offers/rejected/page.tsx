"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { useEffect, useState } from "react";
import { UserProductsService } from "@/services/UserProductsService";
import { ExchangeOffer } from "@/components/ExchangeOffer";
import { EmptyResult } from "@/components/EmptyResult";
import { exchangeProd } from "@/types/AdvertTypes";

const cn = classNames.bind(cls);

export default function Rejected() {
  const [offers, setOffers] = useState<exchangeProd[]>([]);
  const { getRejectedOffers } = UserProductsService();

  useEffect(() => {
    const func = async () => {
      const res = await getRejectedOffers();
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
