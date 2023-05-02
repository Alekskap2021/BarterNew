import { useHttp } from "@/hooks/useHttp";
import { UserInfoResponse, ShowPhoneResponse, userDataI } from "@/types/responses/InfoResponse";

const endpoints = {
  getUserInfo: "/ru/user/info",
  showPhone: "user/show_phone/",
  postUserInfo: "/user/change_user_information",
};

export const UserInfoService = () => {
  const http = useHttp();

  const getUserInfo = async (): Promise<UserInfoResponse> => {
    const res = await http.get<UserInfoResponse>(endpoints.getUserInfo);
    return res.data;
  };

  const showUserPhone = async (id: number): Promise<ShowPhoneResponse> => {
    const res = await http.get<ShowPhoneResponse>(endpoints.showPhone + id);
    return res.data;
  };

  //   const postUserInfo = async (obj: userDataI): Promice => {
  //     const res = await http.post(endpoints.postUserInfo, obj);
  //   };

  return { getUserInfo, showUserPhone };
};
