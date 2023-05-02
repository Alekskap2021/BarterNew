import { FC, HTMLProps } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Field } from "formik";

const cn = classNames.bind(cls);

export enum ThemeCheckbox {
  DEFAULT = "",
  FILL_WHITE = "control_fill-white",
}

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  textField?: string;
  theme?: ThemeCheckbox;
  asForm?: boolean;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className,
    textField,
    asForm = true,
    theme = ThemeCheckbox.DEFAULT,
    ...otherProps
  } = props;

  return (
    <label className={cn(cls.control, cls.control_checkbox, cls[theme], className)}>
      {textField}
      {asForm ? <Field type="checkbox" {...otherProps} /> : <input type="checkbox" />}
      <div className={cn(cls.control_indicator)}></div>
    </label>
  );
};
