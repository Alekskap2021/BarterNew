import { ChangeEvent, FC, FocusEventHandler, ReactElement, useState } from "react";
import { IMaskInput } from "react-imask";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { ThemeInput, inputProps } from "@/ui/Input";
import { ErrorMessage } from "formik";

const cn = classNames.bind(cls);

interface MaskedInputProps extends inputProps {
  className?: string;
  value: string;
  reset?: (field: string, value: any, shouldValidate?: boolean) => void;
  onChange: (e: ChangeEvent<any>) => void;
}

export const MaskedInput: FC<MaskedInputProps> = (props) => {
  const {
    className,
    theme = ThemeInput.BG_GREY,
    label,
    value,
    onChange,
    reset,
    ...otherProps
  } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onBlurHandler = (e) => {
    setIsFocused(false);
    if (value.includes("_")) {
      reset(props.name, "");
    }
  };

  return (
    <label className={cn(cls.label, className)}>
      {label}
      <IMaskInput
        className={cn(cls.input, cls[theme])}
        value={value}
        onInput={onChange}
        placeholder="Введите номер телефона"
        label="Номер телефона"
        name="phone"
        mask="+{7} (000) 000-00-00"
        lazy={!isFocused}
        onFocus={() => setIsFocused(true)}
        // {...otherProps}
        onBlur={onBlurHandler}
      />
      <span className={cls.input_error}>
        <ErrorMessage name={props.name} />
      </span>
    </label>
  );
};
