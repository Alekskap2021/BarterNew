"use client";

import { FC, HTMLProps, ReactNode, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { ThemeInput } from "@/ui/Input";
import { ErrorMessage, Field } from "formik";

const cn = classNames.bind(cls);

interface indexProps extends HTMLProps<HTMLSelectElement> {
  className?: string;
  selectClass?: string;
  theme?: ThemeInput;
  label?: string;
  children: ReactNode;
  asForm?: boolean;
}

export const Select: FC<indexProps> = (props) => {
  const {
    selectClass,
    className,
    children,
    label,
    asForm = true,
    placeholder = "",
    theme = ThemeInput.BG_GREY,
    ...otherProps
  } = props;
  //   const [value, setValue] = useState<string>(placeholder);

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //   };

  return (
    <label className={cn(cls.label, className, { label_disabled: props.disabled })}>
      {label}
      {asForm ? (
        <Field
          className={cn(cls.select, cls[theme], selectClass)}
          as="select"
          // value={value}
          // onChange={handleChange}
          {...otherProps}
        >
          {/* {value && <option disabled>{value}</option>} */}
          {children}
        </Field>
      ) : (
        <select className={cn(cls.select, cls[theme], selectClass)} {...otherProps}>
          {children}
        </select>
      )}

      <span className={cls.error}>{props.name ? <ErrorMessage name={props.name} /> : <></>}</span>
    </label>
  );
};
