import { Interface } from "readline";

export interface ISubItem {
  label: string;
  sub: string;
  oldPrice: string;
  price: string;
  note: string;
}

export interface ICountry {
  id: number;
  img: string;
  name: string;
  me: string;
  lang: string;
}

export interface ILang {
  id?: number;
  name: string;
  symbol: string;
  flag: string;
  me: string;
}

export interface IWord {
  id?: number;
  fr: string;
  sw: string;
  zh: string;
  py?: string;
}

export interface ICategory {
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

export const enum GUI_STATE {
  IDLE = 0,
  EDITING_CATEGORY,
  EDITING_WORD,
}

export type GuiState =
  | GUI_STATE.IDLE
  | GUI_STATE.EDITING_CATEGORY
  | GUI_STATE.EDITING_WORD;
