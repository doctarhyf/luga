import { Interface } from "readline";

export type ISubItem = {
  label: string;
  sub: string;
  oldPrice: string;
  price: string;
  note: string;
};

export type Country = {
  id: number;
  img: string;
  name: string;
  me: string;
  lang: string;
};

export interface Word {
  fr: string;
  sw: string;
  zh: string;
  py?: string;
}

export interface Category {
  id: number;
  name: Record<string, string>;
  pic: string;
  path: string;
}

export interface IRoute {
  label: string;
  path: string;
}

export interface IFeature {
  title: string;
  desc: string;
  img: string;
  big: boolean;
  btn: string;
}
