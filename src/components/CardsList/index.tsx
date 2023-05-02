import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { CardItem, CardItemFullSize } from "@/components/CardItem";
import { CardItemI } from "@/types/responses/HomepageResponse";

const cn = classNames.bind(cls);

interface CardsListProps {
  className?: string;
  productsArr: CardItemI[];
  mode?: "row" | "grid";
}

export const CardsList: FC<CardsListProps> = (props) => {
  const { className, productsArr, mode = "grid" } = props;
  const isRowMode = mode === "row";

  return (
    <div className={cn(cls.list, { list_row: isRowMode }, className)}>
      {productsArr.map((el) =>
        isRowMode ? <CardItemFullSize {...el} key={el.id} /> : <CardItem {...el} key={el.id} />
      )}
    </div>
  );
};
