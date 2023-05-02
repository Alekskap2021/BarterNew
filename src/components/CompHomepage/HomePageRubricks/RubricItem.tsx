import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/images/rubric.png";
import { CategoryI } from "@/types/responses/HomepageResponse";

const cn = classNames.bind(cls);

interface RubricItemProps extends CategoryI {
  className?: string;
}

export const RubricItem: FC<RubricItemProps> = (props) => {
  const { className, name, img } = props;

  return (
    <Link
      className={cn(cls.rubricItem, {
        rubricItem_active: className == "active",
      })}
      href="/search"
    >
      <div className={cls.rubricItem_img}>
        <Image src={img} alt="rubric omage" width={125} height={125} />
      </div>

      <h3 className={cls.rubricItem_title}>{name}</h3>
    </Link>
  );
};
