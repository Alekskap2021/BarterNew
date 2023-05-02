export interface CatI {
  id: number;
  name: string;
}

export interface SubcatI {
  id: number;
  name: string;
  categ: number;
}

export interface SsubcatI {
  id: number;
  name: string;
  scateg: number;
}

export interface CatsResponse {
  ok: boolean;
  locale: string;
  data: CatI[];
}

export interface SubcatsResponse {
  ok: boolean;
  locale: string;
  upper: number;
  upper_name: string;
  data: SubcatI[];
}

export interface SsubcatResponse {
  ok: boolean;
  locale: string;
  upper: null;
  upper_name: null;
  data: SsubcatI[];
}
