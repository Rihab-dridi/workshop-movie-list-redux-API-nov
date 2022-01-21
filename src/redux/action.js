import { FETCH } from "./action-type";

export const fetchHandler = (movies) => {
  return {
    type: FETCH,
    payload: movies,
  };
};
