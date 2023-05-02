import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";

const cn = classNames.bind(cls);

interface PaginationProps {
  className?: string;
  text?: string;
  onPrevHandler?: () => void;
  onNextHandler?: () => void;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { className, text, onNextHandler, onPrevHandler } = props;

  return (
    <div className={cn(cls.pagination)}>
      <nav className={cls.pagination_btns}>
        <button className={cn(cls.pagination_prev, cls.pagination_btn)} onClick={onPrevHandler}>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3124 9L15.6988 5.70711C16.1004 5.31658 16.1004 4.68342 15.6988 4.29289L12.3124 1M15.3976 5L1 5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button className={cn(cls.pagination_next, cls.pagination_btn)} onClick={onNextHandler}>
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3124 9L15.6988 5.70711C16.1004 5.31658 16.1004 4.68342 15.6988 4.29289L12.3124 1M15.3976 5L1 5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {text && (
        <Link className={cls.pagination_seeAll} href="/">
          {text}
        </Link>
      )}
    </div>
  );
};
