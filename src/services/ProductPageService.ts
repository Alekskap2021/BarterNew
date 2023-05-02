import { useHttp } from "@/hooks/useHttp";
import { ProductPageI } from "@/types/responses/ProductPageRespone";

const endpoints = {
  productData: "/ru/page/product/",
};

export const ProductPageService = () => {
  const http = useHttp();

  const getProductData = async (id: string): Promise<ProductPageI> => {
    const res = await http.get<ProductPageI>(endpoints.productData + id);
    return res.data;
  };

  return { getProductData };
};
