import {
  SET_BOOKS,
  SEARCH_BOOKS,
  LIKE_BOOK,
  UNLIKE_BOOK,
  LOADING_DATA,
  DELETE_BOOK,
  POST_BOOK,
  SET_BOOK,
  SUBMIT_COMMENT_BOOK,
  SUBMIT_EDIT_BOOK,
  EDIT_BOOK,
} from "../types";

const initialState = {
  books: [],
  filteredBooks: [],
  book: {},
  loading: false,
  edit: false,
};

const filterBooks = (books, value) => {
  return books.filter((book) => book.title.indexOf(value) > -1);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case SET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case EDIT_BOOK:
      return {
        ...state,
        edit: !state.edit,
      };
    case SUBMIT_EDIT_BOOK:
      return {
        ...state,
        book: action.payload,
        edit: false,
      };
    case LIKE_BOOK:
    case UNLIKE_BOOK:
      let index = state.books.findIndex(
        (book) => book.bookId === action.payload.bookId
      );
      state.books[index] = action.payload;
      if (state.book.bookId === action.payload.bookId) {
        state.book = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_BOOK:
      index = state.books.findIndex((book) => book.bookId === action.payload);
      state.books.splice(index, 1);
      return {
        ...state,
      };
    case POST_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    case SUBMIT_COMMENT_BOOK:
      return {
        ...state,
        book: {
          ...state.book,
          comments: [action.payload, ...state.book.comments],
        },
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        filteredBooks: filterBooks(state.books, action.payload),
        loading: false,
      };
    default:
      return state;
  }
}
