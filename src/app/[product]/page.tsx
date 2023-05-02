"use client";

import { Product } from "@/components/CompProduct";
import { ProductPageService } from "@/services/ProductPageService";
import { ProductPageI } from "@/types/responses/ProductPageRespone";
import { useEffect, useState } from "react";
import { UserProductsService } from "@/services/UserProductsService";

//  @ts-ignore
// @ts-nocheck

export default function ProductItem(ctx) {
  const [datas, setDatas] = useState<ProductPageI>(null);
  const [myAds, setMyAds] = useState<ProductPageI[]>([]);
  const { params } = ctx;
  const { getProductData } = ProductPageService();
  const { getActive } = UserProductsService();

  useEffect(() => {
    const func = async () => {
      const productData = await getProductData(params.product);
      const myActive = await getActive();
      setDatas(productData);
      setMyAds(myActive);
    };

    func();
  }, []);

  console.log(datas);
  return datas && <Product productData={datas} myAds={myAds} />;
}
