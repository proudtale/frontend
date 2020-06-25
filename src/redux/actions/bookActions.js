import {
  SET_BOOKS,
  LOADING_DATA,
  LIKE_BOOK,
  UNLIKE_BOOK,
  DELETE_BOOK,
  SET_ERRORS,
  POST_BOOK,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_BOOK,
  STOP_LOADING_UI,
  SUBMIT_COMMENT_BOOK,
  SUBMIT_EDIT_BOOK,
  EDIT_BOOK,
  SEARCH_BOOKS,
} from "../types";
import axios from "axios";

// Get all books
export const getBooks = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/books")
    .then((res) => {
      dispatch({
        type: SET_BOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOKS,
        payload: [],
      });
      console.log(err);
    });
};
export const getBook = (bookId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/book/${bookId}`)
    .then((res) => {
      dispatch({
        type: SET_BOOK,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
// Post a book
export const postBook = (newBook) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/book", newBook)
    .then((res) => {
      dispatch({
        type: POST_BOOK,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err,
      });
    });
};

// Edit a book
export const submitEdit = (book) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post(`/book/${book.bookId}/edit`, book)
    .then((res) => {
      dispatch({
        type: SUBMIT_EDIT_BOOK,
        payload: res.data,
      });
      dispatch(getBook(book.bookId));
    })
    .catch((err) => {
      console.log(err);
    });
};

// Edit book cover image
export const uploadBookImage = (formData, bookId, handle) => (dispatch) => {
  axios
    .post(`/book/bookImage/${bookId}`, formData)
    .then(() => {
      dispatch({ type: LOADING_DATA, payload: bookId });
      dispatch(getBookData(handle));
    })
    .catch((err) => console.log(err));
};

// Post initial book cover image
export const initialPostBookImage = (formData) => (dispatch) => {
  axios
    .post("/book/initialBookImage", formData)
    .catch((err) => console.log(err));
};

export const editBook = () => (dispatch) => {
  dispatch({ type: EDIT_BOOK });
};

// Like a book
export const likeBook = (bookId) => (dispatch) => {
  axios
    .get(`/book/${bookId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_BOOK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a book
export const unlikeBook = (bookId) => (dispatch) => {
  axios
    .get(`/book/${bookId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_BOOK,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
// Submit a comment
export const submitComment = (bookId, commentBook) => (dispatch) => {
  axios
    .post(`/book/${bookId}/comment`, commentBook)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT_BOOK,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deleteBook = (bookId) => (dispatch) => {
  axios
    .delete(`/book/${bookId}`)
    .then(() => {
      dispatch({ type: DELETE_BOOK, payload: bookId });
    })
    .catch((err) => console.log(err));
};

// complete Book
export const completeBook = (bookId, handle) => (dispatch) => {
  axios
    .post(`/book/${bookId}/completeBook`)
    .then(() => {
      dispatch({ type: LOADING_DATA, payload: bookId });
      dispatch(getBookData(handle));
    })
    .catch((err) => console.log(err));
};

export const getBookData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}/books`)
    .then((res) => {
      dispatch({
        type: SET_BOOKS,
        payload: res.data.books,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_BOOKS,
        payload: null,
      });
    });
};

export const searchBooks = (value, books) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  if (books.length < 1) {
    axios
      .get("/books")
      .then((res) => {
        dispatch({
          type: SET_BOOKS,
          payload: res.data,
        });
      })
      .then(() => {
        dispatch({
          type: SEARCH_BOOKS,
          payload: value,
        });
      });
  } else {
    dispatch({
      type: SEARCH_BOOKS,
      payload: value,
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
