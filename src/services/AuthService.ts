import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse, AxiosError } from "axios";
import { AuthResponse, SendSmsResponse } from "@/types/responses/AuthResponse";
import { setCookie, parseCookies, destroyCookie } from "nookies";

const endpoints = {
  login: "/user/login",
  sendSms: "/user/register",
  sandSmsAgain: "/user/send_new_sms",
  register: "/user/register_sms_verify",
};

export const AuthService = () => {
  const http = useHttp();

  const login = async (phone: string, password: string): Promise<AuthResponse> => {
    const res = await http.post<AuthResponse>(endpoints.login, { phone, password });
    console.log(res.data);

    setCookie(null, "access_token", res.data.AccessToken, {
      maxAge: 60 * 10,
      expires: new Date(Date.now() + 60000 * 10),
      path: "/",
    });

    setCookie(null, "refresh_token", res.data.RefreshToken, {
      maxAge: 60 * 10,
      expires: new Date(Date.now() + 60000 * 10),
      path: "/",
    });

    return res.data;
  };

  const sendSms = async (email: string, phone: string): Promise<SendSmsResponse> => {
    const res = await http.post<SendSmsResponse>(endpoints.sendSms, { email, phone });

    setCookie(null, "phone_number", phone, {
      maxAge: 3600 * 1000,
      path: "/",
    });

    return res.data;
  };

  const sendSmsAgain = async (): Promise<SendSmsResponse> => {
    const { phone_number: phone } = parseCookies();
    const res = await http.post(endpoints.sandSmsAgain, { phone });
    return res.data;
  };

  const register = async (code: string, password: string): Promise<AuthResponse> => {
    const { phone_number: phone } = parseCookies();

    const res = await http.post<AuthResponse>(endpoints.register, { code, phone, password });

    setCookie(null, "access_token", res.data.AccessToken, {
      maxAge: 60 * 10,
      expires: new Date(Date.now() + 60000 * 10),
      path: "/",
    });

    setCookie(null, "refresh_token", res.data.RefreshToken, {
      maxAge: 60 * 10,
      expires: new Date(Date.now() + 60000 * 10),
      path: "/",
    });

    return res.data;
  };

  const logOut = (): void => {
    destroyCookie(null, "access_token");
    destroyCookie(null, "refresh_token");
  };

  return { login, sendSms, sendSmsAgain, register, logOut };
};
