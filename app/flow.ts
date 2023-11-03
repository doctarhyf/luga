import {
  ICategory,
  ICountry,
  IFeature,
  ILang,
  ILugaWord,
  IRoute,
  ISubItem,
  IWord,
} from "./types/types";

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
  { fr: "Bonjour", sw: "Ni dje?", zh: "你好", py: "Ni hao!" },
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

export const LANGS: ILang[] = [
  { name: "Francais", symbol: "fr", flag: "fr.png", me: "Je parle francais" },
  { name: "Swahili", symbol: "sw", flag: "drc.png", me: "Na sema Kiswahili" },
  { name: "Chinois", symbol: "zh", flag: "prc.png", me: "我会讲中文" },
];

export const LANG_DEFAULT: ILang = LANGS[0];
export const CAT_DEFAULT: ICategory = categories[0];

export const clPage = "max-w-[900px]  mx-auto p-4";

export const ROUTES: Record<string, IRoute> = {
  ROOT: { label: "Home", path: "/" },
  HOME: { label: "Home", path: "/home" },
  LOGIN: { label: "Login", path: "/auth/login" },
  RECOVER: { label: "Recover password", path: "/auth/recover" },
  SUBSCRIPTION: { label: "Subscription", path: "/sub" },
  WORDS_REQUESTS: { label: "Words Request", path: "/word_req" },
  LANG: { label: "Language", path: "/lang" },
  ADMIN: { label: "Admin", path: "/admin" },
  CATEGORIES: { label: "Categories", path: "/categories" },
  ADD_WORD_OR_CAT: { label: "Add word or category", path: "/addwdcat" },
  SEARCH: { label: "Search", path: "/search" },
  WORD_VIEW: { label: "Word View", path: "/words_list/word_view" },
  WORDS_LIST: { label: "Words List", path: "/words_list" },
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

export const SUBS: ISubItem[] = [
  {
    id: 0,
    label: "12 MONTHS",
    sub: "Only $2.99 per month",
    oldPrice: "",
    price: "$35.99",
    note: "one-time payment, non-recurring",
  },
  {
    id: 1,
    label: "2 YEARS",
    sub: "Only $2.49 per month",
    oldPrice: "",
    price: "$59.99",
    note: "one-time payment, non-recurring",
  },
  {
    id: 2,
    label: "LIFETINE",
    sub: "Only $2.99 per month",
    oldPrice: "$129",
    price: "$119",
    note: "one-time payment",
  },
];

export const ILUGA_WORD_DEFAULT: ILugaWord = {
  id: 2,
  created_at: "2023-11-01T14:00:48.536413+00:00",
  fr: "J'ai besoin d'un tournevis",
  sw: "Niko besoin na tournevis",
  py: "wǒ xūyào yīgè luósīdāo",
  zh: "我需要一个螺丝刀",
  active: true,
};
