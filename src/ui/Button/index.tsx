import { FC, HTMLProps, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";

const cn = classNames.bind(cls);

export enum ThemeButton {
  FILL_YELLOW = "yellow",
  FILL_WHITE = "white",
  FILL_WHITE_ON_YELLOW = "onYellow",
  CLEAR = "clear",
}

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme = ThemeButton.FILL_YELLOW, children, ...otherProps } = props;

  return (
    <button className={cn(cls.button, cls[theme], className)} {...otherProps}>
      {children}
    </button>
  );
};
