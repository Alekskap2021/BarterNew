import { useHttp } from "@/hooks/useHttp";
import { UserInfoResponse, ShowPhoneResponse } from "@/types/responses/InfoResponse";

const endpoints = {
  postAdd: "ru/user/set_product",
};

export const CreateAddService = () => {
  const http = useHttp();

  const PostAdd = async (advert): Promise<{ ok: true }> => {
    const res = await http.post<{ ok: true }>(endpoints.postAdd, advert);
    return res.data;
  };

  return { PostAdd };
};
