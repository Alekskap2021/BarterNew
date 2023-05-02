import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import imageProduct from "@/assets/images/imageProduct.png";
import Image from "next/image";
import { Radio } from "@/ui/Radio";
import { ProductPageI } from "@/types/responses/ProductPageRespone";

const cn = classNames.bind(cls);

interface indexProps extends ProductPageI {
  className?: string;
}

export const DeliveryCalculateItem: FC<indexProps> = (props) => {
  const { className, name, price, img, id } = props;

  return (
    <div className={cn(cls.item, className)}>
      <Radio name="my_product" value={id.toString()} />
      <div className={cls.item_img}>
        <Image src={img} alt="Exchange product image" width={64} height={64} />
        {name}
      </div>
      <span className={cls.item_price}>{price} ₸</span>
    </div>
  );
};
