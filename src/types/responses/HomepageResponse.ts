export interface CategoryI {
  id: number;
  name: string;
  img: string;
}

export interface CardItemI {
  id: number;
  name: string;
  img: string;
  description: string;
  views: number;
  updated_at: string;
  like: boolean;
  price: number;
  category: string;
  subcategory: string;
  sscategory: string;
  city: string;
  area: string;
  prod_condition: "новый" | "б/у";
  vip_hot: "TOP" | "VIP" | "HOT" | null;
  str_date: [string, string];
  str_time: [string, string] | null;
}

export interface HomepageResponse {
  ok: boolean;
  user_id: string;
  authenticated: boolean;
  categories: CategoryI[];
  products_popular: CardItemI[];
  products_hot: CardItemI[];
  products_vip: CardItemI[];
  promt_footer_1: string;
  promt_footer_2: string;
}
