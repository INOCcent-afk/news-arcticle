export interface newsState {
  news: newsInfo[];
}

export interface newsInfo {
  title: string;
  image: string;
  desc: string;
  moreDesc: moreDesc[];
  rating: string;
  id: number;
}

export interface moreDesc {
  moreDesc1: string;
  moreDesc2: string;
}

export type GetNews = {
  type: "GET_NEWS";
};

export type Action = GetNews;
