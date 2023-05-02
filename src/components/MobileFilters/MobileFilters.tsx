import { FC, useState, useEffect, Dispatch, SetStateAction } from "react";
import classNames from "classnames/bind";
import cls from "./MobileFilters.module.scss";
import { Select } from "@/ui/Select";
import { Radio } from "@/ui/Radio";
import { Form, Formik } from "formik";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { CategoriesService } from "@/services/CategoriesService";
import { CatI } from "@/types/responses/CategoriesResponse";

const cn = classNames.bind(cls);

interface MobileFiltersProps {
  className?: string;
  visibility?: boolean;
  toggleVisibility: Dispatch<SetStateAction<boolean>>;
}

export const MobileFilters: FC<MobileFiltersProps> = (props) => {
  const { className, toggleVisibility, visibility = false } = props;
  const [cats, setCats] = useState<CatI[]>([]);
  const { getAllCats } = CategoriesService();

  useEffect(() => {
    const func = async () => {
      const res = await getAllCats();
      setCats(res.data);
    };

    func();
  }, []);

  return (
    <div className={cn(cls.filters, { filters_active: visibility })}>
      <div className={cls.filters__wrapper}>
        <h2>Фильтры</h2>

        <Formik
          initialValues={{
            cats: "",
            geo: "",
            price_from: "",
            price_to: "",
            cheapest: "",
            expensive: "",
            newest: "",
            recommended: "",
            free: "",
            all: "",
            business: "",
            private: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Select label="Категория" name="cats">
              {cats &&
                cats.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </Select>

            <Select label="Местоположение" name="geo">
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Select>

            <div className={cls.filters__price}>
              <h3>Цена</h3>
              <Input label="От:" name="price_from" />
              <Input label="До:" name="price_to" />
            </div>

            <Radio name="type" value="Цена" textField="Цена" />
            <Radio name="type" value="Бесплатно" textField="Бесплатно" />
            <Radio name="type" value="Обмен" textField="Обмен" />

            <div className={cls.filters__price}>
              <h3>Сортировка</h3>
              <Radio name="price" value="expensive" textField="Самые догорогие" />
              <Radio name="price" value="cheapest" textField="Самые дешевые" />
              <Radio name="price" value="newest" textField="Самые новые" />
              <Radio name="price" value="recommended" textField="Рекомендованные" />
              <Radio name="price" value="free" textField="Отдам даром" />
            </div>

            <div className={cls.filters__type}>
              <h3>Частное лицо / Бизнес</h3>
              <Radio name="isPrivate" value="all" textField="Все объявления" />
              <Radio name="isPrivate" value="business" textField="Бизнес" />
              <Radio name="isPrivate" value="private" textField="Частные" />
            </div>

            <Button className={cls.filters__submit}>Показать результаты</Button>
          </Form>
        </Formik>

        <button className={cls.filters__close} onClick={() => toggleVisibility(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#373538"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#373538"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
