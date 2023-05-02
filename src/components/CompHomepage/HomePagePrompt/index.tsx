"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { CloseIco, ExchangeIco, ExhangeBigIco } from "@/assets/icons";
import Link from "next/link";
import { Linkto, ThemeLink } from "@/ui/Link";

const cn = classNames.bind(cls);

interface HomePagePromptProps {
  className?: string;
  text?: string;
}

export const HomepagePrompt: FC<HomePagePromptProps> = (props) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { className } = props;

  return (
    <div className={cn(cls.prompt, { hidden: isHidden }, className)}>
      <div>
        <ExchangeIco />
        <p> Обменяйте любую ненужную вещь на любую нужную!</p>
      </div>

      <div>
        <Link href="/">
          <span>Подробнее</span>
        </Link>
        <button onClick={() => setIsHidden((prev) => !prev)}>
          <CloseIco />
        </button>
      </div>
    </div>
  );
};

export const HomepagePromptBig: FC<HomePagePromptProps> = (props) => {
  const { className, text } = props;

  return (
    <div className={cn(cls.promptBig)}>
      <ExhangeBigIco />

      <p> {text}</p>

      <Linkto theme={ThemeLink.FILL_YELLOW} href="/">
        <span>Подробнее</span>
      </Linkto>
    </div>
  );
};
