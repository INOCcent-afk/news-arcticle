import { Action, SponsorsState } from "./sponsorsTypes";

const initialState = {
  sponsors: [
    {
      image:
        "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 123123123,
    },
    {
      image:
        "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 123123146623,
    },
    {
      image:
        "https://images.pexels.com/photos/4035587/pexels-photo-4035587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 12312311232323,
    },
    {
      image:
        "https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 1254656123,
    },
    {
      image:
        "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: 12312898793123,
    },
  ],
};

export const sponsorsReducer = (
  state: SponsorsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "GET_SPONSORS": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
