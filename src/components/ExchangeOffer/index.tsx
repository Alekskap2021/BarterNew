import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Button, ThemeButton } from "@/ui/Button";
import img from "../../../public/assets/images/SearchPageCardItem.png";
import img2 from "../../../public/assets/images/HomePageCardItem.png";
import Image from "next/image";
import { exchangeProd } from "@/types/AdvertTypes";
import { Linkto, ThemeLink } from "@/ui/Link";
import { UserProductsService } from "@/services/UserProductsService";

const cn = classNames.bind(cls);

interface ExchangeOfferProps extends exchangeProd {
  className?: string;
  view?: "active" | "waiting";
  num?: number;
}

export const ExchangeOffer: FC<ExchangeOfferProps> = (props) => {
  const {
    className,
    comment,
    name,
    num,
    view = "active",
    my_product: my,
    no_my_product: him,
    iexchange_id,
  } = props;

  const { rejectExchange } = UserProductsService();

  return (
    <div className={cn(cls.offer)}>
      <h2 className={cls.offer_count}>Предложение № {num + 1}</h2>

      <div className={cls.offer_goods}>
        <div className={cn(cls.offer_item, cls.item)}>
          <h3>Ваш товар</h3>
          <Image className={cls.item_img} src={my.img} width={130} height={110} alt="product img" />
          <div className={cls.item_text}>
            <h2>{my.name}</h2>
            <span className={cls.item_cats}>
              Категория: {my.category} / {my.subcategory} / {my.sscategory}
            </span>
            <span className={cls.item_adress}>
              {my.city}, {my.area} район
            </span>
            <span className={cls.item_price}>{my.price} ₸ </span>
          </div>
        </div>

        <div className={cn(cls.offer_item, cls.item)}>
          <h3>Предложенный товар</h3>
          <Image
            className={cls.item_img}
            src={him.img}
            width={130}
            height={110}
            alt="product img"
          />
          <div className={cls.item_text}>
            <h2>{him.name}</h2>
            <span className={cls.item_cats}>
              Категория: {him.category} / {him.subcategory} / {him.sscategory}
            </span>
            <span className={cls.item_adress}>
              {him.city}, {him.area} район
            </span>
            <span className={cls.item_price}>{him.price} ₸ </span>
          </div>
        </div>
      </div>

      <div className={cls.offer_info}>
        <h3>Информация:</h3>

        <p>
          <span>Имя:</span> {name}
        </p>
        <p>
          <span>Комментарий:</span> {comment}
        </p>
      </div>

      {view === "active" && (
        <div className={cls.offer_btns}>
          <Button className={cn(cls.offer_btn, cls.offer_accept)} theme={ThemeButton.CLEAR}>
            Принять
          </Button>
          <Linkto
            className={cn(cls.offer_btn, cls.offer_chat)}
            href="/cabinet/messages/1"
            theme={ThemeLink.CLEAR}
          >
            Перейти в чат
          </Linkto>
          <Button
            className={cn(cls.offer_btn, cls.offer_reject)}
            theme={ThemeButton.CLEAR}
            onClick={() => rejectExchange(iexchange_id)}
          >
            Отклонить
          </Button>
          <Button
            className={cn(cls.offer_btn, cls.offer_delivery)}
            theme={ThemeButton.CLEAR}
            disabled
          >
            Принять с другими условиями доставки
          </Button>
        </div>
      )}
    </div>
  );
};
