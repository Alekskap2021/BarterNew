"use client";

import { FC, MouseEvent, useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Linkto, ThemeLink } from "@/ui/Link";
import { Checkbox, ThemeCheckbox } from "@/ui/Checkbox";
import { Select } from "@/ui/Select";
import { Input, ThemeInput } from "@/ui/Input";
import { Button, ThemeButton } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { Field, Form, Formik } from "formik";
import { CatI, SubcatI } from "@/types/responses/CategoriesResponse";
import { SearchService } from "@/services/SearchService";
import { setCookie } from "nookies";

const cn = classNames.bind(cls);

interface SearchProps {
  className?: string;
  place?: "main" | "search" | "card";
  withMargins?: boolean;
  withFilters?: boolean;
  cats?: CatI[];
  subCats?: SubcatI[];
}

export const HomepageSearch: FC<SearchProps> = (props) => {
  const {
    className,
    withMargins = true,
    withFilters = false,
    cats,
    subCats,
    place = "search",
  } = props;
  const { push } = useRouter();
  const isSearchPage = place === "search";
  const { searchProducts } = SearchService();

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(place);

    if (!isSearchPage) {
      push("/search");
    }
  };

  return (
    <Formik
      initialValues={{
        search: "",
        cats: "",
        scats: "",
        area: "",
        withPhoto: false,
        withDescr: false,
      }}
      //   validationSchema={registerSchema}
      onSubmit={async (values) => {
        const { search, area } = values;
        search &&
          setCookie(null, "search", search, {
            maxAge: 30 * 24 * 60 * 60,
          });
        location &&
          setCookie(null, "area", area, {
            maxAge: 30 * 24 * 60 * 60,
          });
        push("/search");
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form
          className={cn(
            cls.form,
            { form_margins: withMargins, form_withFilters: withFilters },
            className
          )}
        >
          {withFilters && (
            <>
              <h2 className="title">Фильтры</h2>

              <div className={cls.form_filters}>
                <Select label="Выберите категорию" name="cats">
                  {cats.map((cat) => (
                    <option value={cat.name} key={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </Select>

                <Select className={cls.form_selectBig} label="Выберите подкатегорию" name="scats">
                  {subCats.map((sub) => (
                    <option value={sub.name} key={sub.id}>
                      {sub.name}
                    </option>
                  ))}
                </Select>

                <Select label="Сортировать по">
                  <option value="some">1</option>
                </Select>

                <Input label="Цена" placeholder="От:" name="priceFrom" />
                <Input placeholder="До:" name="priceTo" />
              </div>
            </>
          )}

          <div className={cls.form_mainSearch}>
            <Input
              inputClass={cls.form_mainInp}
              type="text"
              placeholder="3 141 318 объявлений рядом"
              name="search"
            />

            <Select selectClass={cls.form_select} name="area" id="">
              <option value="all">По всему миру</option>
              <option value="almaty">Алматы</option>
              <option value="astana">Астана</option>
            </Select>

            <Button
              theme={withFilters ? ThemeButton.FILL_YELLOW : ThemeButton.FILL_WHITE_ON_YELLOW}
            >
              Найти
            </Button>
          </div>

          {withFilters && (
            <div className={cls.form_checkboxes}>
              <Checkbox name="withDescr" textField="Искать в описании" />
              <Checkbox name="withPhoto" textField="Только с фото" />
            </div>
          )}
        </Form>
      )}
    </Formik>

    // <form className={cn(cls.form, { form_margins: withMargins }, className)} action="">
    //   <input className={cls.form_mainInp} type="text" placeholder={`3 141 318 объявлений рядом`} />

    //   <select className={cls.form_select} name="" id="">
    //     <option value="all">По всему миру</option>
    //     <option value="almaty">Алматы</option>
    //     <option value="astana">Астана</option>
    //   </select>

    //   <Button theme={ThemeButton.FILL_WHITE_ON_YELLOW} onClick={onSubmit}>
    //     Найти
    //   </Button>

    //   {withFilters && (
    //     <div className={cls.form_checkboxes}>
    //       <Checkbox theme={ThemeCheckbox.FILL_WHITE} textField="Искать в описании" />
    //       <Checkbox theme={ThemeCheckbox.FILL_WHITE} textField="Только с фото" />
    //     </div>
    //   )}

    //   {withFilters && (
    //     <div className={cls.form_filters}>
    //       <h2 className="title">Фильтры</h2>
    //       <Select label="Выберите категорию" />
    //       <Input label="Цена" placeholder="От:" />
    //       <Input placeholder="До:" />
    //       <Select label="Сортировать по" />
    //     </div>
    //   )}
    // </form>
  );
};
