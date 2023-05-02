"use client";

import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { Input, ThemeInput } from "@/ui/Input";
import { Button } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { MaskedInput } from "@/ui/Input/MaskedInput";
import * as Yup from "yup";

const cn = classNames.bind(cls);

export default function Register() {
  const { push } = useRouter();

  const ForgotSchema = Yup.object().shape({
    phone: Yup.string().required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={ForgotSchema}
      onSubmit={async (values: { phone: string }) => {
        console.log(values);
        // const res = await sendSms(email, phone);
        push("/auth/recovery");
      }}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <Form className={cn(cls.auth)}>
          <h2 className={cn(cls.auth_forgotPassTitle, "title")}>Забыли пароль?</h2>

          <p className={cn(cls.auth_forgotPassDescr)}>
            Введите ваш номер телефона, и мы вышлем вам код подтверждения. Вы сможете установить
            новый пароль после ввода этого кода
          </p>

          <MaskedInput
            className={cls.auth_input}
            placeholder="Введите номер телефона"
            label="Номер телефона"
            onChange={handleChange}
            reset={setFieldValue}
            value={values.phone}
            name="phone"
          />

          <div className={cls.auth_submitBtns}>
            <Button className={cls.auth_submit}>Отправить код</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
