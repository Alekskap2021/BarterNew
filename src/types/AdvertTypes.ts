import { ProductPageI } from "@/types/responses/ProductPageRespone";

export interface responseI {
  ok: boolean;
  my_products: ProductPageI[];
}

export interface deleteI {
  ok: boolean;
  user: number;
  product_id_deleted: number;
}

export interface exchangeI {
  my_product: string;
  your_product: string;
  delivery_type: string;
  comment: string;
}

export interface exchangeAnsw extends exchangeI {
  ok: boolean;
  db_names: string;
  db_values: string;
}

interface prodI {
  id: number;
  name: string;
  img: string;
  price: number;
  category: string;
  subcategory: string;
  sscategory: string;
  city: string;
  area: string;
  prod_condition: string;
  vip_hot: null | string;
  str_date: string[];
  str_time: string[];
  like: boolean;
}

export interface exchangeProd {
  iexchange_id: number;
  my_product: prodI;
  no_my_product: prodI;
  comment: string;
  name: string;
  surcharge: string;
  seller_id: number;
}

export interface waitingExchangeResponseI {
  ok: true;
  exchanges: exchangeProd[];
}

export interface rejectExchangeI {
  ok: boolean;
  deleted_exchange_id: string;
}

export interface rejectedOffersResponse {
  ok: boolean;
  exchanges: exchangeProd[];
}
