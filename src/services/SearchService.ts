import { useHttp } from "@/hooks/useHttp";
import { ProductPageI } from "@/types/responses/ProductPageRespone";
import { CardItemI } from "@/types/responses/HomepageResponse";

const endpoints = {
  productData: "/ru/search/products",
};

interface searchOpt {
  category?: string;
  subcategory?: string;
  price_from?: string;
  price_to?: string;
  city?: string;
  area?: string;
  search: string;
}

export const SearchService = () => {
  const http = useHttp();

  const getProducts = async (): Promise<CardItemI[]> => {
    const res = await http.post<CardItemI[]>(endpoints.productData);
    return res.data;
  };

  const searchProducts = async (opt: searchOpt): Promise<CardItemI[]> => {
    const res = await http.post<CardItemI[]>(endpoints.productData, opt);
    return res.data;
  };

  return { getProducts, searchProducts };
};
