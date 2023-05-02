interface OtherInfo {
  country: number;
  region: number;
  cities: number;
  area: number;
  adress: string;
  coordinates: string;
  email_inf: string;
  phone_inf: string;
  last_seen: null | string;
}

export interface UserInfoResponse {
  ok: boolean;
  main_info: {
    id: number;
    phone: string;
    email: string;
    sms_verified: number;
  };
  oth_info: OtherInfo;
}

export interface ShowPhoneResponse {
  ok: boolean;
  phone: string;
  product_id: number;
  user_id: string;
}

export interface userDataI {
  name: string;
  city: string;
  country: string;
  street: string;
  area: string;
  building: string;
  flat: string;
}
