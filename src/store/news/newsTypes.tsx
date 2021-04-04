export interface newsState {
  news: newsInfo[];
}

export interface newsInfo {
  title: string;
  image: string;
  desc: string;
  moreDesc: string[];
  rating: string;
  id: number;
}

export type GetNews = {
  type: "GET_NEWS";
};

export type Action = GetNews;
