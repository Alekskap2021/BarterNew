"use client";

import { FC, HTMLInputTypeAttribute, HTMLProps, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button, ThemeButton } from "@/ui/Button";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { MobileFilters } from "@/components/MobileFilters/MobileFilters";

const cn = classNames.bind(cls);

interface inputProps extends HTMLProps<HTMLInputTypeAttribute> {
  className?: string;
  place?: string;
}

export const SearchInputMobile: FC<inputProps> = (props) => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { className, place } = props;

  const onSearchHandler = () => {
    if (place !== "search") push("/search");
  };

  return (
    <div className={cls.input_wrapper}>
      <input className={cls.input} type="text" placeholder="Что ищите?" />
      <Button
        className={cls.input_btn}
        type="button"
        theme={ThemeButton.CLEAR}
        onClick={onSearchHandler}
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5831 11.5489C17.204 9.70179 17.1293 7.69155 16.3731 5.89557C15.6169 4.09959 14.2312 2.64137 12.4761 1.79465C10.7209 0.947933 8.71711 0.770944 6.84074 1.29691C4.96438 1.82287 3.3445 3.01562 2.28521 4.65125C1.22592 6.28688 0.800046 8.25291 1.08754 10.1803C1.37504 12.1076 2.35614 13.8638 3.84666 15.1191C5.33718 16.3744 7.23463 17.0424 9.1828 16.9979C11.131 16.9534 12.9959 16.1993 14.4275 14.8772"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 14.958L19.5 19.958"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      <div className={cls.filters}>
        <Button
          className={cls.filters__btn}
          theme={ThemeButton.CLEAR}
          onClick={() => setIsOpen((prev) => !prev)}
          disabled={isOpen}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9997 4.6665L7.33301 4.6665"
              stroke="#373538"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="1.33333"
              cy="1.33333"
              r="1.33333"
              transform="matrix(-1 0 0 1 4.66699 3.33325)"
              stroke="#373538"
            />
            <path
              d="M2.00033 11.3333L8.66699 11.3333"
              stroke="#373538"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12.6663" cy="11.3333" r="1.33333" stroke="#373538" />
          </svg>
          Фильтры
          {/* {document ? (
            createPortal(
              <MobileFilters visibility={isOpen} toggleVisibility={setIsOpen} />,
              document.body
            )
          ) : (
            <></>
          )} */}
        </Button>
      </div>
    </div>
  );
};
