"use client";

import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { Select } from "@/ui/Select";
import { Checkbox } from "@/ui/Checkbox";
import { CardItemAdvert } from "@/components/CardItem";
import { EmptyResult } from "@/components/EmptyResult";
import { ThemeCardAdvert } from "@/types/cardTypes";
import { SuccessAddModal } from "@/components/Modals";
import { createPortal } from "react-dom";

const cn = classNames.bind(cls);

export default function Waiting() {
  return (
    <div className={cls.advert}>
      <div className={cn(cls.advert_filters, cls.advert_filters_inactive)}>
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
        {/* <CardItemAdvert theme={ThemeCardAdvert.WAITING} /> */}
      </div>

      {/* {createPortal(<SuccessAddModal visibility={true} />, document.body)} */}
      <EmptyResult title="Пока здесь нет объявлений" place="advert" />
    </div>
  );
}
