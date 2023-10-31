import { ICategory, ICountry, IFeature, IRoute, IWord } from "./types";

export const categories: ICategory[] = [
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

export const strings: IWord[] = [
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

export const countries: Record<string, ICountry> = {
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

export const clPage = "max-w-[900px]  mx-auto p-4";

export const ROUTES: Record<string, IRoute> = {
  ROOT: { label: "", path: "/" },
  HOME: { label: "Home", path: "/home" },
  LOGIN: { label: "Login", path: "/auth/login" },
  RECOVER: { label: "Recover password", path: "/auth/recover" },
  SUBSCRIPTION: { label: "Subscription", path: "/sub" },
  LANG: { label: "Language", path: "/lang" },
  ADMIN: { label: "Admin", path: "/admin" },
};

export const Words: IWord[] = strings;

export const features: IFeature[] = [
  {
    title: "Free access",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_1.png",
    big: false,
    btn: "",
  },
  {
    title: "Subcription",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_2.png",
    big: false,
    btn: "",
  },
  {
    title: "Real world examples",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_3.png",
    big: false,
    btn: "",
  },
  {
    title: "Add Friends",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_4.png",
    big: false,
    btn: "",
  },
  {
    title: "Downloadable Materials",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_5.png",
    big: false,
    btn: "",
  },
  {
    title: "Videos",
    desc: "All graded reading lessons are free to learn and practice.",
    img: "/feat_6.png",
    big: false,
    btn: "",
  },
  {
    title: "Downloadable Materials",
    desc: "Practice your Chinese skills with our Chinese grammar exercises! See what you’ve learned well and what you need to practice more. It contains key grammar points from all HSK levels.",
    img: "/feat_7.png",
    big: true,
    btn: "Chinese Grammar Exercises",
  },
  {
    title: "Videos",
    desc: "Practice your Chinese skills with our Chinese grammar exercises! See what you’ve learned well and what you need to practice more. It contains key grammar points from all HSK levels.",
    img: "/feat_8.png",
    big: true,
    btn: "HSK Sample Tests",
  },
];
