"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { Select } from "@/ui/Select";
import { Checkbox } from "@/ui/Checkbox";
import { CardItemAdvert } from "@/components/CardItem";
import { EmptyResult } from "@/components/EmptyResult";
import { UserProductsService } from "@/services/UserProductsService";
import { useEffect, useState } from "react";
import { ProductPageI } from "@/types/responses/ProductPageRespone";
import { SuccessAddModal } from "@/components/Modals";
import { createPortal } from "react-dom";

const cn = classNames.bind(cls);

export default function Active() {
  const [prods, setProds] = useState<ProductPageI[]>([]);
  const { getActive, deleteActive } = UserProductsService();

  const func = async () => {
    const res = await getActive();
    console.log(res);
    setProds(res);
  };

  useEffect(() => {
    func();
  }, []);

  const deleteProds = async (id) => {
    deleteActive(id);
    func();
  };

  return (
    <div className={cls.advert}>
      <div className={cls.advert_filters}>
        <Select className={cls.advert_select} asForm={false} label="Выберите категорию">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <Checkbox
          className={cls.advert_checkbox}
          asForm={false}
          textField="Рекламируемые объявления"
        />
      </div>

      <h2 className={cn(cls.advert_title, "title")}>Мои объявления</h2>

      <div className={cls.advert_list}>
        {prods.length ? (
          prods.map((prod) => <CardItemAdvert {...prod} key={prod.id} onDelete={deleteProds} />)
        ) : (
          <EmptyResult place="advert" title="Пока здесь нет объявлений" />
        )}
      </div>

      {/* {document ? createPortal(<SuccessAddModal />, document.body) : <></>} */}
      {/* <EmptyResult title="Пока здесь нет объявлений" place="advert" /> */}
    </div>
  );
}
