import { Dispatch } from "react";
import { GetSponsors } from "./sponsorsTypes";

export const loadSponsors = () => async (dispatch: Dispatch<GetSponsors>) => {
  dispatch({
    type: "GET_SPONSORS",
  });
};
