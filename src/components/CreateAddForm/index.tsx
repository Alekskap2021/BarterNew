"use client";

import { FC, useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import { Checkbox } from "@/ui/Checkbox";
import { Textarea } from "@/ui/Textarea";
import { Radio } from "@/ui/Radio";
import { Button } from "@/ui/Button";
import { useMedia } from "@/hooks/useMedia";
import { Backlink } from "@/ui/Backlink";
import { Formik, Form, Field } from "formik";
import { createAddSchema } from "@/helpers/validation/createAddValidate";
import { convertToBase64 } from "@/helpers/base64Converter";
import { CreateAddService } from "@/services/CreateAddService";
import { CategoriesService } from "@/services/CategoriesService";
import { CatI, CatsResponse } from "@/types/responses/CategoriesResponse";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

const cn = classNames.bind(cls);

interface CreateAddFormProps {
  className?: string;
}

export const CreateAddForm: FC<CreateAddFormProps> = (props) => {
  const { className } = props;
  const { isMobile } = useMedia();
  const [photos, setPhotos] = useState([]);
  const [strings64, setStrings64] = useState([]);
  const [photosUrl, setPhotosUrl] = useState([]);
  const [cats, setCats] = useState<CatI[]>([]);
  const [subcats, setSubcats] = useState<CatI[]>([]);
  const [sscats, setSscats] = useState<CatI[]>([]);
  const { PostAdd } = CreateAddService();
  const { getAllCats, getSscats, getSubcats } = CategoriesService();
  const fileRef = useRef(null);
  const { push } = useRouter();

  const initialValues = {
    name: "",
    category: "",
    subcategory: "",
    sscategory: "",
    description: "",
    price: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    is_glass: false,
    international_delivery: false,
    prod_condition: "",
    country: "1",
    city: "1",
    building: "",
    flat: "",
    street: "",
    exchange_or_sale: "0",
    userName: "",
    userEmail: "",
    userPhone: "",
    auto_renewal: false,
  };

  useEffect(() => {
    const func = async () => {
      const cts = await getAllCats();
      //   console.log(cts);

      setCats(cts.data);
    };

    func();
  }, []);

  useEffect(() => {
    if (photos.length < 1) return;
    const imgUrls = [];
    photos.forEach((img) => imgUrls.push(URL.createObjectURL(img)));
    setPhotosUrl(imgUrls);
  }, [photos]);

  const onPhotoHandler = async (e) => {
    e.preventDefault();
    const promises = [];
    for (let i = 0; i < e.target.files.length; i++) {
      promises.push(convertToBase64(e.target.files[i]));
    }
    const base64strings = await Promise.all(promises);
    setStrings64(base64strings);
    setPhotos(Array.from(e.target.files));
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // Выполняем явную валидацию формы перед отправкой
    try {
      const res = await createAddSchema.validate(values, { abortEarly: false });
      // Если ошибок валидации нет, выполняем действия по отправке формы
      console.log("Form values:", values);
      // const res = await sendSms(email, phone);
      // push("/auth/sms-code");
    } catch (errors) {
      // Если есть ошибки валидации, скроллим до первого поля с ошибкой
      console.log(errors);
      const firstErrorField = errors.inner[0].path;
      console.dir(firstErrorField);

      //   if (firstErrorFieldElement) {
      //     firstErrorFieldElement.scrollIntoView({ behavior: "smooth" });
      //   }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createAddSchema}
      onSubmit={async (values) => {
        const { ok } = await PostAdd({ ...values, photos: JSON.stringify(strings64) });
        console.log(values);
        if (ok) {
          setCookie(null, "new_add", "true", {
            maxAge: 30 * 24 * 60 * 60,
          });
          push("/cabinet/advert");
        }
      }}
    >
      {({ values, handleChange, setFieldValue, errors }) => (
        <Form className={cn(cls.createAdd)}>
          {!isMobile && <h3 className={cls.titleMain}>Создать объявление</h3>}
          {isMobile && <Backlink />}

          <div className={cls.photo}>
            <div className={cls.photo_name}>
              <h4 className={cls.title}>Опишите в подробностях</h4>
              <Input label="Укажите название*" name="name" placeholder="Например, Macbook Air" />

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
            </div>

            <div className={cls.photo_gallery}>
              <h4 className={cls.title}>Фото</h4>
              <p className={cls.text}>
                Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок.
              </p>

              <div className={cls.photo_gallery_inputs}>
                <label className={cls.photo_gallery_input} htmlFor="file">
                  <input
                    type="file"
                    id="file"
                    accept=".jpg, .jpeg, .png, .webp"
                    ref={fileRef}
                    multiple
                    onInput={onPhotoHandler}
                  />
                  Добавить фото
                </label>

                {photosUrl.map((img, i) => (
                  <img src={img} key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className={cls.descr}>
            <div className={cls.descr_left}>
              <h4 className={cls.title}>Описание</h4>

              <Textarea
                className={cls.descr_left_textarea}
                areaClassName={cls.descr_left_textareaContent}
                label="Укажите описание*"
                name="description"
                placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
              />

              <Input
                className={cls.descr_left_price}
                label="Предложите цену*"
                name="price"
                placeholder="Напишите стоимость вашего  товара"
              />

              <Radio name="exchange_or_sale" value="0" textField="Только обмен" checked />
              <Radio name="exchange_or_sale" value="1" textField="Только продажа" />
              <Radio name="exchange_or_sale" value="2" textField="Обмен или продажа" />
            </div>

            <div className={cls.descr_right}>
              <h4 className={cls.title}>Габариты*</h4>
              <Input className={cls.half} name="length" label="Длина*" placeholder="0 м" />
              <Input className={cls.half} name="width" label="Ширина*" placeholder="0 м" />
              <Input className={cls.half} name="height" label="Высота*" placeholder="0 кг" />
              <Input className={cls.half} name="weight" label="Вес*" placeholder="0 кг" />

              <Checkbox className={cls.glass} name="is_glass" textField="Осторожно стекло" />
              <Checkbox name="international_delivery" textField="Международная доставка" />

              <Select label="Состояние товара*" name="prod_condition">
                <option value="0">Новый</option>
                <option value="1">Б/У</option>
              </Select>

              <Select label="Местоположение товара*" placeholder="Выберите страну" name="country">
                <option value="1">Казахстан</option>
                <option value="2">Россия</option>
                <option value="3">Киргизия</option>
              </Select>

              <Select placeholder="Выберите город" name="city">
                <option value="1">Алматы</option>
                <option value="2">Москва</option>
                <option value="4">Бишкек</option>
              </Select>

              <Input
                label="Точное название улицы*"
                placeholder="Напишите название вашей улицы"
                name="street"
              />
              <Input className={cls.half} label="Номер дома" placeholder="№ дома" name="building" />
              <Input className={cls.half} label="Номер квартиры" placeholder="№ кВ" name="flat" />
            </div>
          </div>

          <div className={cls.contacts}>
            <h4 className={cls.title}>Контактная информация</h4>
            <Input label="Контактное лицо*" name="userName" placeholder="Ваше Имя" />
            <Input label="Email-адрес" name="userEmail" placeholder="Напишите Вашу почту" />
            <Input label="Номер телефона" name="userPhone" placeholder="Напишите номер телефона" />
            <div className={cls.contacts_renewal}>
              <Checkbox textField="Автопродление" name="auto_renewal" />
              <p className={cls.text}>
                При клике на кнопку «Автопродление», объявление включает функцию автоматического
                продления каждые 30 дней
              </p>
            </div>
            <Button className={cls.contacts_submit}>Опубликовать</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
