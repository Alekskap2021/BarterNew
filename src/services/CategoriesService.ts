import { useHttp } from "@/hooks/useHttp";
import {
  CatsResponse,
  SsubcatResponse,
  SubcatsResponse,
} from "@/types/responses/CategoriesResponse";

const endpoints = {
  getAll: "/ru/info/categories",
  getSubcats: "/ru/info/subcategories",
  getSsubcuts: "/ru/info/subsubcategories",
};

export const CategoriesService = () => {
  const http = useHttp();

  const getAllCats = async (): Promise<CatsResponse> => {
    const res = await http.get<CatsResponse>(endpoints.getAll);
    return res.data;
  };

  const getSubcats = async (id: string): Promise<SubcatsResponse> => {
    const res = await http.get<SubcatsResponse>(endpoints.getSubcats + `?categ=${id}`);
    return res.data;
  };

  const getSscats = async (id: string): Promise<SsubcatResponse> => {
    const res = await http.get<SsubcatResponse>(endpoints.getSsubcuts + `?scateg=${id}`);
    return res.data;
  };

  return { getAllCats, getSubcats, getSscats };
};
