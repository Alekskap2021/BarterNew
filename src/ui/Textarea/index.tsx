"use client";

import { FC, HTMLProps, useRef, useEffect, useState, HTMLAttributes } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { ErrorMessage, Field } from "formik";

const cn = classNames.bind(cls);

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  className?: string;
  areaClassName?: string;
  label?: string;
  limit?: number;
}

export const Textarea: FC<TextareaProps> = (props) => {
  const {
    className,
    areaClassName,
    label,
    placeholder,
    limit,
    autoFocus = false,
    ...otherProps
  } = props;
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <label className={cn(cls.label, className)}>
      {label}

      <Field
        as="textarea"
        className={cn(cls.textarea, areaClassName)}
        autoFocus={autoFocus}
        spellCheck
        placeholder="Напишите сообщение..."
        name={props.name}
        // onChange={(e) => setValue(e.target.value)}
        // ref={textareaRef}
        // value={value}
      />
      {limit && <span className={cls.limit}>0/{limit}</span>}

      <span className={cls.error}>
        <ErrorMessage name={props.name} />
      </span>
    </label>
  );
};
