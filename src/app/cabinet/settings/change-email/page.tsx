"use client";
import { useState, MouseEvent } from "react";
import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { useMedia } from "@/hooks/useMedia";
import Link from "next/link";
import { SmsCode } from "@/components/SmsCode";
import { Formik } from "formik";

const cn = classNames.bind(cls);

export default function ChangeEmail() {
  const { isMobile } = useMedia();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const onSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirm((prev) => !prev);
  };

  return (
    <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
      {({ values }) => (
        <div className={cls.form_wrapper}>
          {!isConfirm && (
            <form className={cls.form}>
              <Input
                label="Новый E-mail"
                placeholder="Введите новый Email"
                type="text"
                name="email"
              />
              <Button className={cls.form_btn} onClick={onSubmitHandler}>
                Сменить E-mail
              </Button>
            </form>
          )}
          {isConfirm && <SmsCode isChangeEmail={true} />}
        </div>
      )}
    </Formik>
  );
}
