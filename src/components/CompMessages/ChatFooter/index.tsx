"use client";

import { FC, useRef, useEffect, useState, HTMLAttributes } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";

const cn = classNames.bind(cls);

interface ChatFooterProps extends HTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const ChatFooter: FC<ChatFooterProps> = (props) => {
  const { className, placeholder = "Напишите сообщение..." } = props;

  const [value, setValue] = useState<string>("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={cls.footer}>
      <label>
        <svg
          width="17"
          height="19"
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.263 9.89949L8.54548 16.617C6.78812 18.3744 3.93888 18.3744 2.18152 16.617V16.617C0.424163 14.8596 0.424163 12.0104 2.18152 10.253L10.3133 2.12132C11.4848 0.949747 13.3843 0.949747 14.5559 2.12132V2.12132C15.7275 3.29289 15.7275 5.19239 14.5559 6.36396L6.32315 14.5967C5.73736 15.1825 4.78761 15.1825 4.20183 14.5967V14.5967C3.61604 14.0109 3.61604 13.0612 4.20183 12.4754L11.0204 5.65685"
            stroke="#868686"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input type="file" accept=".png,.jpg,jpeg,.webp" />
      </label>
      <textarea
        className={cls[className]}
        autoFocus
        spellCheck
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        ref={textareaRef}
        value={value}
      ></textarea>
    </div>
  );
};
