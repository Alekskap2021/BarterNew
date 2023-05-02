"use client";

import { FC, useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import cls from "./SuccessAddModal.module.scss";
import img from "@/assets/images/imageSuccessAdd.png";
import Image from "next/image";
import { Linkto, ThemeLink } from "@/ui/Link";
import { destroyCookie, parseCookies } from "nookies";

const cn = classNames.bind(cls);

interface SuccessAddModalProps {
  className?: string;
  visibility?: boolean;
}

export const SuccessAddModal: FC<SuccessAddModalProps> = (props) => {
  const { className } = props;
  const { new_add } = parseCookies();

  const [isOpen, setIsOpen] = useState<boolean>(!!new_add);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", closeModal);

    return () => document.removeEventListener("click", closeModal);
  }, [isOpen, new_add]);

  function closeModal(e: any) {
    if (e.target === modalRef.current || e.target === closeBtnRef.current) {
      console.log(e.target);
      destroyCookie(null, "new_add", { path: "/" });
      setIsOpen(false);
    }
  }

  return (
    <div className={cn(cls.modal, { modal_active: isOpen })} ref={modalRef}>
      <div className={cls.modal__wrapper}>
        <h2 className={cls.modal__title}>
          Поздравляем! <br /> Ваше успешно подали объявление
        </h2>

        <Image src={img} alt="success" />

        <div className={cls.modal__links}>
          <Linkto href="/" theme={ThemeLink.FILL_YELLOW}>
            Подать еще объявление
          </Linkto>
          <Linkto href="/">Вернуться на главную</Linkto>
        </div>

        <button className={cls.modal__close} onClick={closeModal} ref={closeBtnRef}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#868686"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#868686"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
