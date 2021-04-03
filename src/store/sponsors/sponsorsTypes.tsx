export interface SponsorsState {
  sponsors: SponsorsInfo[];
}

export interface SponsorsInfo {
  image: string;
  id: number;
}

export type GetSponsors = {
  type: "GET_SPONSORS";
};

export type Action = GetSponsors;
