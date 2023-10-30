import { Category, Country, IRoute, Word } from "./types";

export const categories: Category[] = [
  {
    id: 0,
    name: { fr: "Cimenterie", zh: "水泥车间", sw: "Atelier ya ciment" },
    pic: "/ciment.jpg",
    path: "ciment",
  },
  {
    id: 1,
    name: { fr: "Outillages", zh: "工具", sw: "Ma outils" },
    pic: "/tools.jpg",
    path: "tools",
  },
  {
    id: 2,
    name: { fr: "Verbes d'actions", zh: "动词", sw: "Ma verbes" },
    pic: "/verbs.jpg",
    path: "verb",
  },
  {
    id: 3,
    name: { fr: "Bureau", zh: "办公室", sw: "Mu bureau" },
    pic: "/office.jpg",
    path: "office",
  },
  {
    id: 4,
    name: { fr: "Magasin", zh: "库房", sw: "Ku magasin" },
    pic: "/wh.jpg",
    path: "wh",
  },
  {
    id: 4,
    name: {
      fr: "Mots popuplaire",
      zh: "youming ciyu",
      sw: "Ma mots populaire",
    },
    pic: "/wh.jpg",
    path: "wh",
  },
];

export const strings: Word[] = [
  { fr: "Bonjour", sw: "Ni dje?", zh: "你好" },
  { fr: "Demarrer", sw: "Anza", zh: "开始" },
  { fr: "Rechercher", sw: "Mina tafuta ...", zh: "搜索" },
  { fr: "Catégories", sw: "Categories", zh: "类别" },
  {
    fr: "Choisir le type de categorie",
    sw: "Choose the words category",
    zh: "选择类别",
  },
];

export const countries: Record<string, Country> = {
  DRC: {
    id: 0,
    img: "/drc.png",
    name: "DR Congo",
    me: "Swahili",
    lang: "sw",
  },
  PRC: {
    id: 1,
    img: "/prc.png",
    name: "PR. China",
    me: "中文",
    lang: "zh",
  },
  FR: {
    id: 2,
    img: "/fr.png",
    name: "France",
    me: "Francais",
    lang: "fr",
  },
};

export const clPage = "w-[900px]  mx-auto p-4";

export const ROUTES: Record<string, IRoute> = {
  ROOT: { label: "", path: "/" },
  HOME: { label: "Home", path: "/home" },
  LOGIN: { label: "Login", path: "/login" },
  SUBSCRIPTION: { label: "Subscription", path: "/sub" },
  LANG: { label: "Language", path: "/lang" },
};
