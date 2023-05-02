"use client";
import { useState, MouseEvent } from "react";
import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { useMedia } from "@/hooks/useMedia";
import { SmsCode } from "@/components/SmsCode";
import { Formik } from "formik";

const cn = classNames.bind(cls);

export default function ChangePhone() {
  const { isMobile } = useMedia();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const onSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirm((prev) => !prev);
  };

  return (
    <Formik initialValues={{ phone: "" }} onSubmit={() => {}}>
      {({ values }) => (
        <div className={cls.form_wrapper}>
          {!isConfirm && (
            <form className={cls.form}>
              <Input
                label="Новый телефон"
                placeholder="Введите новый телефон"
                type="text"
                name="phone"
              />
              <Button className={cls.form_btn} onClick={onSubmitHandler}>
                Сменить Телефон
              </Button>
            </form>
          )}
          {isConfirm && <SmsCode isChangePhone={true} />}
        </div>
      )}
    </Formik>
  );
}
