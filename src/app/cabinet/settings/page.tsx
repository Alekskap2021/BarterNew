"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { Input } from "@/ui/Input";
import { Select } from "@/ui/Select";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Button } from "@/ui/Button";
import { Form, Formik } from "formik";
import { UserInfoService } from "@/services/UserInfoService";
import { useEffect, useState } from "react";

const cn = classNames.bind(cls);

export default function Settings() {
  const { getUserInfo } = UserInfoService();
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const func = async () => {
      const res = await getUserInfo();
      setEmail(res.main_info.email);
      setPhone(res.main_info.phone);
      console.log(res);
    };

    func();
  }, []);

  //   console.log("values", values);

  return (
    <Formik
      initialValues={{ phone: phone, email: phone, name: "", city: "", flat: "", home: "street" }}
      //   validationSchema={registerSchema}
      onSubmit={async (values) => {
        console.log(values);
        // const { email, phone } = values;
        // const res = await sendSms(email, phone);
        // push("/auth/sms-code");
      }}
    >
      {({ values }) => (
        <Form className={cls.settings}>
          <div className={cls.settings_changePhoto}>
            <Image src={avatar} alt="user avatar" />
            <label className={cls.settings_label}>
              Изменить фото
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5137 3.80576C14.5869 2.73101 16.3274 2.73035 17.4013 3.80429L19.8932 6.29615C20.958 7.36093 20.969 9.08469 19.918 10.1631L10.6849 19.6363C9.97933 20.3602 9.01167 20.7684 8.00124 20.7683L5.24909 20.7682C3.96984 20.7682 2.94823 19.7018 3.00203 18.4227L3.12019 15.6137C3.15968 14.6746 3.54996 13.7846 4.2138 13.1198L13.5137 3.80576ZM16.3415 4.86576C15.8533 4.3776 15.0622 4.3779 14.5744 4.86642L12.9113 6.53203L17.1911 10.8118L18.8446 9.1153C19.3224 8.62513 19.3173 7.8416 18.8333 7.35761L16.3415 4.86576ZM5.27446 14.1804L11.8514 7.59349L16.144 11.8861L9.61148 18.5886C9.18816 19.0229 8.60756 19.2678 8.0013 19.2678L5.24916 19.2676C4.82274 19.2676 4.4822 18.9122 4.50014 18.4858L4.61829 15.6768C4.64199 15.1133 4.87616 14.5794 5.27446 14.1804ZM20.5148 20.695C20.9289 20.695 21.2645 20.3591 21.2645 19.9447C21.2645 19.5304 20.9289 19.1945 20.5148 19.1945H14.3931C13.9791 19.1945 13.6434 19.5304 13.6434 19.9447C13.6434 20.3591 13.9791 20.695 14.3931 20.695H20.5148Z"
                  fill="#868686"
                />
              </svg>
              <input type="file" accept="image/*" />
            </label>
          </div>

          <div className={cls.settings_inputs}>
            <Input label="Контактное лицо *" placeholder="Ф.И.О" name="name" />
            <Select label="Город *" placeholder="Выберите город" name="city">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>

            <Input label="Улица *" placeholder="Название улицы" name="street" />
            <Input
              className={cls.settings_inputs_home}
              label="Номер дома *"
              placeholder="№"
              name="home"
            />
            <Input
              className={cls.settings_inputs_flat}
              label="Номер квартиры *"
              placeholder="№"
              name="flat"
            />

            <p>
              * Вы сами несете ответственность за правильность заполнения ваших данных. Потому что
              курьер может неправильно донести вашу посылку.
            </p>
          </div>

          <Button className={cls.settings_btn}>Сохранить</Button>
        </Form>
      )}
    </Formik>
  );
}
