import {
  SET_SCREAMS,
  SEARCH_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
  SUBMIT_EDIT,
  EDIT_SCREAM,
} from "../types";

const initialState = {
  screams: [],
  filteredScreams: [],
  scream: {},
  loading: false,
  edit: false,
};

const filterScreams = (screams, value) => {
  return screams.filter((scream) => scream.title.indexOf(value) > -1);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
      };
    case EDIT_SCREAM:
      return {
        ...state,
        edit: !state.edit,
      };
    case SUBMIT_EDIT:
      return {
        ...state,
        scream: action.payload,
        edit: false,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments],
        },
      };
    case SEARCH_SCREAMS:
      return {
        ...state,
        filteredScreams: filterScreams(state.screams, action.payload),
        loading: false,
      };
    default:
      return state;
  }
}
