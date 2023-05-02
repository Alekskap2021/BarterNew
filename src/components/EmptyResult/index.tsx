import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import Image from "next/image";
import imageEmptyMessages from "../../../public/assets/images/imageEmptyMessages.png";
import imageEmptyFavorites from "../../../public/assets/images/imageEmptyFavorites.png";
import imageEmptySearch from "../../../public/assets/images/imageEmptySearch.png";
import Link from "next/link";
import { Linkto, ThemeLink } from "@/ui/Link";

const cn = classNames.bind(cls);

interface EmptyResultProps {
  className?: string;
  title: string;
  place: "favorites" | "messages" | "search" | "advert";
}

export const EmptyResult: FC<EmptyResultProps> = (props) => {
  const { className, title, place } = props;

  const chooseImg = () => {
    if (place === "favorites") return imageEmptyFavorites;
    if (place === "messages") return imageEmptyMessages;
    else return imageEmptySearch;
  };

  return (
    <div className={cn(cls.empty)}>
      <Image className={cls.empty_img} src={chooseImg()} alt="empty result image" />
      <h2 className={cls.empty_title}>{title}</h2>

      {place === "favorites" && (
        <p className={cls.empty_descr}>
          Добавить в избранное можно со страницы объявления либо со страницы списка объявлений
          Теперь избранные объявления всегда доступны на любом компьютере, а также на мобильной
          версии сайта, после входа в Мои объявления
        </p>
      )}

      {place === "messages" && (
        <>
          <p className={cls.empty_descr}>
            Это самое безопасное место для общения с другими участниками <b>TUDA-SUDA.</b>
            Используйте его, чтобы делиться фото, местоположением, а также для заключения сделок.
          </p>

          <p className={cls.empty_descr}>
            Чтобы начать общаться с другими участниками,
            <Link href="/search"> найдите что-нибудь</Link> или
            <Link href="/create-add"> опубликуйте объявление</Link> на
            <b>TUDA-SUDA.</b>
          </p>
        </>
      )}

      {place === "advert" && (
        <>
          <p className={cls.empty_descr}>Здесь будут появляться ваши новые объявления</p>
          <Linkto href="/create-add" theme={ThemeLink.FILL_YELLOW}>
            Подать объявление
          </Linkto>
        </>
      )}
    </div>
  );
};
