"use client";

import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { useRouter } from "next/navigation";

const cn = classNames.bind(cls);

interface BacklinkProps {
  className?: string;
  text?: string;
  alwaysShow?: boolean;
}

export const Backlink: FC<BacklinkProps> = (props) => {
  const { className, text = "Вернуться", alwaysShow = false } = props;
  const { back } = useRouter();

  return (
    <button
      className={cn(cls.backlink, className, { backlink_alwaysShow: alwaysShow })}
      onClick={() => back()}
    >
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13L1 7L7 1"
          stroke="#373538"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </button>
  );
};
