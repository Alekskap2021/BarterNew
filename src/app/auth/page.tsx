"use client";

import classNames from "classnames/bind";
import cls from "./page.module.scss";
import { useRouter } from "next/navigation";
import { ErrorMessage, Form, Formik } from "formik";
import { Input, ThemeInput } from "@/ui/Input";
import { Button, ThemeButton } from "@/ui/Button";
import { FacebookAuthIcon, GoogleAuthIcon } from "@/assets/icons";
import Link from "next/link";
import { Checkbox } from "@/ui/Checkbox";
import { AuthService } from "@/services/AuthService";
import { loginSchema } from "@/helpers/validation/authValidate";
import { MaskedInput } from "@/ui/Input/MaskedInput";

const cn = classNames.bind(cls);

export default function Auth() {
  const { push } = useRouter();
  const { login } = AuthService();

  return (
    <Formik
      initialValues={{ phone: "", password: "", isAgreed: false, notRobot: false }}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        console.log(values);
        const { password, phone } = values;
        const res = await login(phone, password);
        push("/");
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className={cn(cls.auth)}>
          <MaskedInput
            placeholder="Введите номер телефона"
            label="Номер телефона"
            onChange={handleChange}
            reset={setFieldValue}
            value={values.phone}
            name="phone"
          />

          <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            type="password"
            placeholder="Введите пароль"
            label="Пароль "
            name="password"
          />

          <Link className={cls.auth_forgotPass} href="/auth/forgot-password">
            Забыли пароль?
          </Link>

          <Checkbox
            className={cls.auth_checkbox}
            textField="Соглашаюсь с условиями Политики конфиденциальности"
            name="isAgreed"
          />
          <Checkbox className={cls.auth_checkbox} textField="Я не робот" name="notRobot" />

          <div className={cls.auth_submitBtns}>
            <Button className={cls.auth_submit} disabled={!values.isAgreed || !values.notRobot}>
              Войти
            </Button>

            <div className={cls.auth_authWith}>
              <Button theme={ThemeButton.CLEAR} type="button">
                <GoogleAuthIcon />
              </Button>
              <Button theme={ThemeButton.CLEAR} type="button">
                <FacebookAuthIcon />
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
