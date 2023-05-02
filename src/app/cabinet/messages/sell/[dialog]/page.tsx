import classNames from "classnames/bind";
import cls from "./page.module.scss";

const cn = classNames.bind(cls);

export default function SellDialog(ctx) {
  const { params } = ctx;
  return <h1>Sell {params.dialog}</h1>;
}
