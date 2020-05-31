import {
  LOADING_DATA,
  //   DELETE_CHAPTER,
  ADD_CHAPTER,
  POST_CHAPTER,
  SET_BOOK_CHAPTERS,
  EDIT_CHAPTER_TITLE,
  //   SUBMIT_COMMENT_CHAPTER,
  //   SUBMIT_EDIT_CHAPTER,
  //   EDIT_CHAPTER,
} from "../types";

const initialState = {
  chapters: [],
  chapter: {},
  loading: false,
  edit: false,
};

//TODO: Fill in other functions!
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_BOOK_CHAPTERS:
      return {
        ...state,
        chapter: action.payload,
        loading: false,
      };
    //   case EDIT_BOOK:
    //     return {
    //       ...state,
    //       edit: !state.edit,
    //     };
    //   case SUBMIT_EDIT_BOOK:
    //     return {
    //       ...state,
    //       book: action.payload,
    //       edit: false,
    //     };
    case EDIT_CHAPTER_TITLE:
      return {
        ...state,
        chapters: state.chapters.map((c) => {
          if (c.title === state.chapter.title) {
            c.title = action.payload;
          }
          return c;
        }),
        chapter: { ...state.chapter, title: action.payload },
      };
    case ADD_CHAPTER:
      return {
        ...state,
        chapters: [...state.chapters, action.payload],
        chapter: action.payload,
      };
    case POST_CHAPTER:
      return {
        ...state,
        chapters: [action.payload, ...state.chapters],
      };
    //   case SUBMIT_COMMENT_BOOK:
    //     return {
    //       ...state,
    //       book: {
    //         ...state.book,
    //         comments: [action.payload, ...state.book.comments],
    //       },
    //     };
    default:
      return state;
  }
}
