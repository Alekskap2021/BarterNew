import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosHeaders } from "axios";
import { AuthResponse } from "@/types/responses/AuthResponse";
// import nookies from "nookies";
import { parseCookies, setCookie } from "nookies";
// import { useRouter } from "next/navigation";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const useHttp = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://api.tudasuda.kz/api";
  const http = axios.create({
    baseURL,
  });

  http.interceptors.request.use((config) => {
    const { access_token } = parseCookies();

    config.headers["AccessToken"] = access_token;
    config.headers["Content-Type"] = "multipart/form-data; boundary=*";

    return config;
  });

  http.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest: MyAxiosRequestConfig = error.config;

      if (error.response.status == 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        console.log(originalRequest._isRetry);

        try {
          const { refresh_token } = parseCookies();

          const response = await axios.post<AuthResponse>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/user/new_tokens`,
            { refresh_token }
          );

          setCookie(null, "access_token", response.data.AccessToken, {
            maxAge: 3600 * 1000,
            path: "/",
          });

          setCookie(null, "refresh_token", response.data.RefreshToken, {
            maxAge: 3600 * 1000,
            path: "/",
          });

          return http.request(originalRequest);
        } catch (e) {
          console.error(`Unauthorized error from Http`, e);
          //   push("/auth");
        }
      }
      throw error;
    }
  );

  return http;
};
