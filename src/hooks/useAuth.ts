import { parseCookies } from "nookies";

export const useAuth = () => {
  const { access_token } = parseCookies();
  return !!access_token;
};
