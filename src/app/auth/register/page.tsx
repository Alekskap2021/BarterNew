"use client";

import classNames from "classnames/bind";
import cls from "../page.module.scss";
import { Input, ThemeInput } from "@/ui/Input";
import { Checkbox } from "@/ui/Checkbox";
import { Button, ThemeButton } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { FacebookAuthIcon, GoogleAuthIcon } from "@/assets/icons";
import { Field, Form, Formik } from "formik";
import { AuthService } from "@/services/AuthService";
import { registerSchema } from "@/helpers/validation/authValidate";
import { MaskedInput } from "@/ui/Input/MaskedInput";

const cn = classNames.bind(cls);

export default function Register() {
  const { push } = useRouter();

  const { sendSms } = AuthService();

  return (
    <Formik
      initialValues={{ phone: "", email: "", isAgreed: false, notRobot: false }}
      validationSchema={registerSchema}
      onSubmit={async (values) => {
        const { email, phone } = values;
        const res = await sendSms(email, phone);
        push("/auth/sms-code");
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

          {/* <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            placeholder="Введите номер телефона"
            label="Номер телефона"
            name="phone"
            onBlur={() => {
              console.log("blur");
              setFieldValue("phone", "");
            }}
          /> */}

          <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            placeholder="Введите email"
            label="Email"
            name="email"
          />
          {/* <ErrorMessage name="email" /> */}

          <Checkbox
            className={cls.auth_checkbox}
            textField=" Я соглашаюсь с правилами использования сервиса,
    		а также с передачей и обработкой моих данных в TUDA-SUDA. Я подтверждаю своё совершеннолетие и ответственность за размещение объявления"
            name="isAgreed"
          />
          <Checkbox className={cls.auth_checkbox} textField="Я не робот" name="notRobot" />

          <div className={cls.auth_submitBtns}>
            <Button
              className={cls.auth_submit}
              disabled={!values.isAgreed || !values.notRobot}
              type="submit"
            >
              Регистрация
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
