"use client";

import { FC, useState, useEffect, MouseEvent } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Input, ThemeInput } from "@/ui/Input";
import { Button, ThemeButton } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { FacebookAuthIcon, GoogleAuthIcon } from "@/assets/icons";
import { Form, Formik } from "formik";
import { AuthService } from "@/services/AuthService";

const cn = classNames.bind(cls);

interface SmsCodeProps {
  className?: string;
  isRecovery?: boolean;
  isChangePass?: boolean;
  isChangePhone?: boolean;
  isChangeEmail?: boolean;
}

export const SmsCode: FC<SmsCodeProps> = (props) => {
  const { register, sendSmsAgain } = AuthService();
  const { push } = useRouter();
  const intervalOfQ = 60;
  const [canRepeatQ, setCanRepeatQ] = useState<boolean>(false);
  const [secondsCount, setSecondsCount] = useState<number>(intervalOfQ);

  const {
    className,
    isRecovery = false,
    isChangePass = false,
    isChangeEmail = false,
    isChangePhone = false,
  } = props;

  const changeEmailText = (isChangeEmail || isChangePass) && (
    <p className={cls.auth_repeatQuery_title}>На ваш email был выслан код подтверждения</p>
  );
  const changePhoneText = isChangePhone && (
    <p className={cls.auth_repeatQuery_title}>На ваш номер телефона был выслан код подтверждения</p>
  );

  useEffect(() => {
    const interval = setInterval(() => setSecondsCount((prev) => prev - 1), 1000);
    if (secondsCount === 0) {
      clearInterval(interval);
      setCanRepeatQ(true);
    }

    return () => clearInterval(interval);
  }, [secondsCount]);

  const onRepeatQHanler = async () => {
    setCanRepeatQ(false);
    setSecondsCount(intervalOfQ);
    const res = await sendSmsAgain();
  };

  return (
    <Formik
      initialValues={{ code: "", password: "", secondPassword: "" }}
      onSubmit={async (values) => {
        const { code, password } = values;
        const res = await register(code, password);
        push("/");
      }}
    >
      {({ values }) => (
        <Form className={cn(cls.auth, { auth_recovery: isRecovery })}>
          <div className={cls.auth_repeatQuery}>
            {changeEmailText}
            {changePhoneText}
            <span className={cls.auth_repeatQuery_title}>Вы не получили код?</span>
            {!canRepeatQ && (
              <span className={cls.auth_repeatQuery_descr}>
                Отправить повторно через {secondsCount}
              </span>
            )}
            {canRepeatQ && (
              <Button
                className={cls.auth_repeatQuery_btn}
                theme={ThemeButton.CLEAR}
                type="button"
                onClick={onRepeatQHanler}
              >
                Отправить код еще раз
              </Button>
            )}
          </div>

          <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            placeholder="Введите код подтверждения"
            autoComplete="off"
            name="code"
          />

          <input className={cn(cls.auth_input, cls.auth_input_hidden)} type="text" />

          <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            placeholder="Пароль"
            label="Новый пароль"
            type="password"
            name="password"
          />

          <Input
            className={cls.auth_input}
            theme={ThemeInput.BG_GREY}
            placeholder="Повторить пароль"
            label="Повторить пароль"
            type="password"
            name="secondPassword"
          />

          <div className={cn(cls.auth_submitBtns, { auth_submitBtns_changePass: isChangePass })}>
            <Button
              className={cls.auth_submit}
              //   onClick={submitHandler}
              // disabled={true}
            >
              {isRecovery || isChangePass ? "Подтвердить" : "Регистрация"}
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
};
