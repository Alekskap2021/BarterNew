export interface HomepgaeCardI {
  id: number;
  img: string;
  title: string;
  price: number;
  is_favorite: boolean;
  lable: "TOP" | "VIP" | "HOT" | null;
  str_date: [string, string];
  str_time: [string, string];
}

export enum ThemeCardAdvert {
  ACTIVE = "active",
  UNPAID = "unpaid",
  REJECTED = "rejected",
  WAITING = "waiting",
  INACTIVE = "inactive",
}
