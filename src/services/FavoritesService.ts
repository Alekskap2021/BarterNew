import { useHttp } from "@/hooks/useHttp";
import { FavoritesResponseI } from "@/types/responses/FavoritesResponse";
import { CardItemI } from "@/types/responses/HomepageResponse";

const endpoints = {
  toggleLike: "/user/change_like/",
  getAll: "/ru/user/get_favorites",
};

export const FavoritesService = () => {
  const http = useHttp();

  const toggleLike = async (id: string): Promise<FavoritesResponseI> => {
    const res = await http.get<FavoritesResponseI>(endpoints.toggleLike + id);
    return res.data;
  };

  const getAllFavorites = async (): Promise<CardItemI[]> => {
    const res = await http.get<CardItemI[]>(endpoints.getAll);
    return res.data;
  };

  return { toggleLike, getAllFavorites };
};
