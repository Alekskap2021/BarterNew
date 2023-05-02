import { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { LinkProps } from "next/link";
import Link from "next/link";

const cn = classNames.bind(cls);

export enum ThemeLink {
  FILL_YELLOW = "yellow",
  FILL_WHITE = "white",
  FILL_WHITE_ON_YELLOW = "onYellow",
  CLEAR = "clear",
}

interface LinktoProps extends LinkProps {
  className?: string;
  theme?: ThemeLink;
  href: string;
  children: ReactNode;
}

export const Linkto: FC<LinktoProps> = (props) => {
  const { className, children, theme = ThemeLink.FILL_WHITE, ...otherProps } = props;

  return (
    <Link className={cn(cls.Linkto, className, cls[theme])} {...otherProps}>
      {children}
    </Link>
  );
};
