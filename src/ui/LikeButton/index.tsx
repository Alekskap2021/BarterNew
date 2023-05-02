"use client";

import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { IconFavorites } from "@/assets/icons";
import { FavoritesService } from "@/services/FavoritesService";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const cn = classNames.bind(cls);

interface LikeButtonProps {
  className?: string;
  initialStatus: boolean;
  productId: string;
}

export const LikeButton: FC<LikeButtonProps> = (props) => {
  const { className, initialStatus, productId } = props;
  const [favorites, setFavorites] = useState<boolean>(initialStatus);
  const { toggleLike } = FavoritesService();
  const isAuth = useAuth();
  const { push } = useRouter();

  const onClickHandler = async (e) => {
    e.preventDefault();
    if (!isAuth) {
      push("/auth");
      return;
    }
    const res = await toggleLike(productId);
    console.log(res);

    if (res.ok) setFavorites((prev) => !prev);
  };

  return (
    <button
      className={cn(cls.favoritesBtn, { favoritesBtn_active: favorites }, className)}
      onClick={onClickHandler}
      type="button"
    >
      <IconFavorites strokeColor="#FDCE05" />
    </button>
  );
};
