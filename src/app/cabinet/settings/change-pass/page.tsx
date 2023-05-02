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

export default function ChangePass() {
  const { isMobile } = useMedia();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const onSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsConfirm((prev) => !prev);
  };

  return (
    <Formik initialValues={{ pass: "", pass2: "", pass3: "" }} onSubmit={() => {}}>
      {({ values }) => (
        <div className={cls.form_wrapper}>
          {!isConfirm && (
            <form className={cls.form}>
              {isMobile && <h2 className="title">Изменить пароль</h2>}
              <Input label="Текущий пароль" type="password" name="pass" />
              <Input label="Новый пароль" type="password" name="pass2" />
              <Input label="Подтвердите новый пароль" type="password" name="pass3" />
              <Link href="/auth/forgot-password">Забыли пароль?</Link>
              <Button className={cls.form_btn} onClick={onSubmitHandler}>
                Сменить пароль
              </Button>
            </form>
          )}
          {isConfirm && <SmsCode isChangePass={true} />}
        </div>
      )}
    </Formik>
  );
}
