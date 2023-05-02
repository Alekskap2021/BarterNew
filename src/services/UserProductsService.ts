import { useHttp } from "@/hooks/useHttp";
import {
  deleteI,
  exchangeAnsw,
  exchangeI,
  exchangeProd,
  rejectExchangeI,
  rejectedOffersResponse,
  responseI,
  waitingExchangeResponseI,
} from "@/types/AdvertTypes";
import { ProductPageI } from "@/types/responses/ProductPageRespone";

const endpoints = {
  getActive: "/ru/user/my_products_active",
  getRejectedOffers: "/ru/user/my_exchange_old_reject",
  deleteActive: "/ru/user/detele_product/",
  setExchange: "/user/set_exchange",
  rejectExchange: "/ru/user/reject_exchange/",
  waitingExchange: "/ru/user/my_exchange_pending",
  activeExchange: "/ru/user/my_exchange_active",
};

export const UserProductsService = () => {
  const http = useHttp();

  const getActive = async (): Promise<ProductPageI[]> => {
    const res = await http.get<responseI>(endpoints.getActive);
    return res.data.my_products;
  };

  const getRejectedOffers = async (): Promise<exchangeProd[]> => {
    const res = await http.get<rejectedOffersResponse>(endpoints.getRejectedOffers);
    return res.data.exchanges;
  };

  const deleteActive = async (id: string): Promise<deleteI> => {
    const res = await http.get<deleteI>(endpoints.deleteActive + id);
    return res.data;
  };

  const postExchange = async (obj: exchangeI): Promise<exchangeAnsw> => {
    const res = await http.post<exchangeAnsw>(endpoints.setExchange, obj);
    return res.data;
  };

  const rejectExchange = async (id): Promise<rejectExchangeI> => {
    const res = await http.get<rejectExchangeI>(endpoints.rejectExchange + id);
    console.log(res.data);
    return res.data;
  };

  const activeExchange = async (): Promise<exchangeProd[]> => {
    const res = await http.get<waitingExchangeResponseI>(endpoints.activeExchange);
    return res.data.exchanges;
  };

  const waitingExchange = async (): Promise<exchangeProd[]> => {
    const res = await http.get<waitingExchangeResponseI>(endpoints.waitingExchange);
    return res.data.exchanges;
  };

  return {
    getActive,
    deleteActive,
    postExchange,
    waitingExchange,
    activeExchange,
    rejectExchange,
    getRejectedOffers,
  };
};
