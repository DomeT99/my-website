export type SocialButton = {
  icon: string;
  url: string;
};

export type MenuOptions = {
  label: string;
  url: string;
};

export type PageData = {
  title: string;
  description: string;
};

export type Size =
  | "is-small"
  | "is-medium"
  | "is-large"
  | "is-halfheight"
  | "is-fullheight";

export type TextSize =
  | "is-size-1"
  | "is-size-2"
  | "is-size-3"
  | "is-size-4"
  | "is-size-5"
  | "is-size-6"
  | "is-size-7";

export type LatestArticles = {
  image?: string;
  placeholder?: string;
  title?: string;
  url?: string;
  description?: string;
  date: string;
};
