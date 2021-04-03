import { Dispatch } from "react";
import { GetNews } from "./newsTypes";

export const loadNews = () => async (dispatch: Dispatch<GetNews>) => {
  dispatch({
    type: "GET_NEWS",
  });
};
