import { useHttp } from "@/hooks/useHttp";
import { HomepageResponse } from "@/types/responses/HomepageResponse";

const endpoints = {
  main: "/ru/page/main",
};

export const HomepageService = () => {
  const http = useHttp();

  const getHomepageData = async (): Promise<HomepageResponse> => {
    const res = await http.get<HomepageResponse>(endpoints.main);
    return res.data;
  };

  return { getHomepageData };
};
