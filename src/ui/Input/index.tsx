"use client";

import { FC, HTMLProps, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button, ThemeButton } from "@/ui/Button";
import { Field, ErrorMessage } from "formik";

const cn = classNames.bind(cls);

export enum ThemeInput {
  BG_GREY = "grey",
}

export interface inputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  inputClass?: string;
  theme?: ThemeInput;
  label?: string;
}

export const Input: FC<inputProps> = (props) => {
  const {
    className,
    inputClass,
    theme = ThemeInput.BG_GREY,
    label,
    type = "text",
    ...otherProps
  } = props;
  const isPassword = type === "password";

  const [isHiddemPass, setIsHiddenPass] = useState<boolean>(true);
  const toggleHissenState = () => {
    setIsHiddenPass((prev) => !prev);
  };

  return (
    <>
      {!isPassword && (
        <label className={cn(cls.label, className)}>
          {label}
          <Field className={cn(cls.input, cls[theme], inputClass)} type={type} {...otherProps} />
          <span className={cls.input_error}>
            <ErrorMessage name={props.name} />
          </span>
        </label>
      )}

      {isPassword && (
        <label className={cn(cls.label, className)}>
          {label}
          <div className={cls.input_wrapper}>
            <Field
              className={cn(cls.input, cls[theme])}
              type={isHiddemPass ? "password" : "text"}
              {...otherProps}
            />
            <Button
              className={cls.input_hideBtn}
              theme={ThemeButton.CLEAR}
              onClick={toggleHissenState}
              type="button"
            >
              {isHiddemPass ? (
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.20057 7.78442C0.933139 7.2954 0.933144 6.70445 1.20058 6.21544C2.9 3.10803 6.20336 1 9.99997 1C13.7966 1 17.1 3.10809 18.7994 6.21558C19.0669 6.7046 19.0669 7.29555 18.7994 7.78456C17.1 10.892 13.7966 13 10 13C6.20336 13 2.89997 10.8919 1.20057 7.78442Z"
                    stroke="#868686"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 7C7 8.65685 8.34315 10 10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.09 14.3263C12.7691 15.3849 11.1607 15.9715 9.5 16C4.09091 16 1 9.50001 1 9.50001C1.96119 7.61655 2.88433 6.29724 4.5 5M7.87727 3.19502C8.40917 3.06411 8.95373 2.99867 9.5 3.00002C14.9091 3.00002 18 9.50001 18 9.50001C17.5309 10.4227 16.9715 11.2914 16.3309 12.0919M11.1382 11.2225C10.926 11.462 10.67 11.6541 10.3857 11.7873C10.1013 11.9205 9.79433 11.9922 9.48307 11.9979C9.17181 12.0037 8.86263 11.9435 8.57397 11.8209C8.28532 11.6983 8.0231 11.5158 7.80297 11.2844C7.58284 11.0529 7.4093 10.7772 7.29271 10.4737C7.17612 10.1702 7.11886 9.8451 7.12435 9.51781C7.12984 9.19053 7.19797 8.86776 7.32468 8.56876C7.45138 8.26977 7.57521 8.08205 7.80297 7.8589"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L18 18"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Button>
          </div>
          <span className={cls.input_error}>
            <ErrorMessage name={props.name} />
          </span>
        </label>
      )}
    </>
  );
};
