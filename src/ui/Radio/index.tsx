import { FC, HTMLProps } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Field } from "formik";

const cn = classNames.bind(cls);

interface RadioProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  textField?: string;
  name: string;
  value: string;
}

export const Radio: FC<RadioProps> = (props) => {
  const { className, name, value, textField, ...otherProps } = props;

  return (
    <label className={cn(cls.control, cls.control_checkbox, className)}>
      {textField}
      <Field type="radio" name={name} value={value} {...otherProps} />
      <div className={cn(cls.control_indicator)}></div>
    </label>
  );
};
