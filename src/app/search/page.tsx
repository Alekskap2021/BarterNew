"use client";

import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { HomepageSearch } from "@/components/CompHomepage";
import { CardsList } from "@/components/CardsList";
import { mockHomepageCard } from "@/mocks/mockHomepageCards";
import { SearchService } from "@/services/SearchService";
import { CategoriesService } from "@/services/CategoriesService";
import { CatI, SubcatI } from "@/types/responses/CategoriesResponse";
import { Form, Formik } from "formik";
import { Select } from "@/ui/Select";
import { Input } from "@/ui/Input";
import { Button, ThemeButton } from "@/ui/Button";
import { Checkbox } from "@/ui/Checkbox";
import { EmptyResult } from "@/components/EmptyResult";
import { parseCookies, destroyCookie } from "nookies";

const cn = classNames.bind(cls);

export default function Search() {
  const { getProducts, searchProducts } = SearchService();
  const { getAllCats, getSubcats, getSscats } = CategoriesService();
  const { search, area } = parseCookies();
  const [prods, setProds] = useState([]);
  const [cats, setCats] = useState<CatI[]>([]);
  const [subcats, setSubcats] = useState<CatI[]>([]);
  const [sscats, setSscats] = useState<CatI[]>([]);
  const [searchCash, setSearchCash] = useState<string>(search);

  useEffect(() => {
    const func = async () => {
      const catsRes = await getAllCats();
      setCats(catsRes.data);
    };

    func();
  }, []);

  useEffect(() => {
    const func = async () => {
      let res;
      if (search) {
        res = await searchProducts({ search });
      } else {
        res = await getProducts();
      }
      setProds(res);

      destroyCookie(null, "search");
      destroyCookie(null, "area");
    };
    func();
  }, []);

  return (
    <div className={cn(cls.search)}>
      {cats && subcats && (
        <Formik
          initialValues={{
            search: searchCash ? searchCash : "",
            category: "",
            subcategory: "",
            price_from: "",
            price_to: "",
            sort: "",
            area: area ? area : "",
            withPhoto: false,
            withDescr: false,
          }}
          //   validationSchema={registerSchema}
          onSubmit={async (values) => {
            // const { email, phone } = values;
            const res = await searchProducts(values);
            setProds(res);
            // console.log(values);
            // push("/search");
          }}
        >
          {({ values, handleChange, setFieldValue }) => {
            return (
              <Form
                className={cn(cls.form, cls.form_margins, cls.form_withFilters, cls.serach_form)}
              >
                <>
                  <h2 className="title">Фильтры</h2>
                  <div className={cls.form_filters}>
                    <Select
                      label="Категория*"
                      name="category"
                      onChange={async (e: any) => {
                        const currCat = e.target.value;
                        const res = await getSubcats(currCat);
                        setSubcats(res.data);
                        setFieldValue("category", currCat);
                      }}
                    >
                      <option value="0">Выберете категорию</option>
                      {cats.map((cat) => (
                        <option value={cat.id} key={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </Select>

                    <Select
                      label="Подкатегория*"
                      name="subcategory"
                      onFocus={() => console.log(values)}
                      disabled={!subcats.length}
                      onChange={async (e: any) => {
                        const currCat = e.target.value;
                        const res = await getSscats(currCat);
                        setSscats(res.data);
                        setFieldValue("subcategory", currCat);
                      }}
                    >
                      <option value="0">Выберете подкатегорию</option>
                      {subcats.map((cat) => {
                        return (
                          <option value={cat.id} key={cat.id}>
                            {cat.name}
                          </option>
                        );
                      })}
                    </Select>

                    <Select
                      label="Тип товара*"
                      name="sscategory"
                      disabled={!sscats.length}
                      onChange={(e: any) => {
                        const currCat = e.target.value;
                        setFieldValue("sscategory", currCat);
                      }}
                    >
                      <option value="0">Выберете тип товара</option>
                      {sscats.map((cat) => (
                        <option value={cat.id} key={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </Select>

                    <Select label="Сортировать по" name="sort">
                      <option value="byPriceAscending">Дороже</option>
                      <option value="byPriceDescending">Дешевле</option>
                      <option value="byNew">Новое</option>
                    </Select>
                    <Input label="Цена" placeholder="От:" name="price_from" />
                    <Input placeholder="До:" name="price_to" />
                  </div>
                </>

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
                  <Button theme={ThemeButton.FILL_YELLOW}>Найти</Button>
                </div>
                {/* <div className={cls.form_checkboxes}>
                  <Checkbox name="withDescr" textField="Искать в описании" />
                  <Checkbox name="withPhoto" textField="Только с фото" />
                </div> */}
              </Form>
            );
          }}
        </Formik>
      )}
      <div className={cls.search_content}>
        {prods.length ? (
          <h3 className={cls.search_content_title}>Мы нашли {prods.length} объявлений</h3>
        ) : null}
        <div className={cls.search_list}>
          {prods.length ? (
            <CardsList productsArr={prods} mode="row" />
          ) : (
            <EmptyResult place="search" title="Не найдено" />
          )}
        </div>
      </div>
    </div>
  );
}
