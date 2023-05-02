import classNames from "classnames/bind";
import cls from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/assets/images/avatar.png";
import { Button, ThemeButton } from "@/ui/Button";

const cn = classNames.bind(cls);

export default function Dialog(ctx) {
  const { params } = ctx;
  return (
    <div className={cls.dialog}>
      {/* {params.dialog} */}
      <div className={cls.msg}>
        <span className={cls.msg_date}>{params.dialog} февраля</span>
        <ul className={cls.msg_list}>
          <li className={cn(cls.msg_item, cls.msg_item_their)}>
            <p className={cn(cls.msg_text, cls.msg_text_readed)}>
              Здравствуйте, Юлия. В ближайшее время истекает срок действия тарифа “Премиум”, в сумму
              900 тг. <br /> <br /> В любое время можете продлить тариф.
              <br /> <br /> С Уважением отдел по работе с клиентами\TUDA-SUDA
              <span className={cls.msg_times}>12:30</span>
            </p>
          </li>

          <li className={cn(cls.msg_item, cls.msg_item_my)}>
            <p className={cn(cls.msg_text, cls.msg_text_notReaded)}>
              Здравствуйте, Юлия. В ближайшее время истекает срок действия тарифа “Премиум”, в сумму
              900 тг. <br /> <br /> В любое время можете продлить тариф.
              <br /> <br /> С Уважением отдел по работе с клиентами\TUDA-SUDA
              <span className={cls.msg_times}>12:30</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={cls.msg}>
        <span className={cls.msg_date}>{params.dialog + 1} февраля</span>
        <ul className={cls.msg_list}>
          <li className={cn(cls.msg_item, cls.msg_item_their)}>
            <p className={cn(cls.msg_text, cls.msg_text_readed)}>
              Здравствуйте, Юлия. В ближайшее время истекает срок действия тарифа “Премиум”, в сумму
              900 тг. <br /> <br /> В любое время можете продлить тариф.
              <br /> <br /> С Уважением отдел по работе с клиентами\TUDA-SUDA
              <span className={cls.msg_times}>12:30</span>
            </p>
          </li>

          <li className={cn(cls.msg_item, cls.msg_item_my)}>
            <p className={cn(cls.msg_text, cls.msg_text_notReaded)}>
              Здравствуйте, Юлия. В ближайшее время истекает срок действия тарифа “Премиум”, в сумму
              900 тг. <br /> <br /> В любое время можете продлить тариф.
              <br /> <br /> С Уважением отдел по работе с клиентами\TUDA-SUDA
              <span className={cls.msg_times}>12:30</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
