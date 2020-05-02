import { SET_POPULAR_BOOKS, LOADING_DATA } from "../types";

const initialState = {
  popularBooks: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_POPULAR_BOOKS:
      return {
        ...state,
        popularBooks: action.payload,
        loading: false,
      };
  }
}
