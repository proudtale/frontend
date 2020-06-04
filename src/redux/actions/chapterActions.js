import {
  LOADING_DATA,
  //   DELETE_CHAPTER,
  ADD_CHAPTER,
  SET_ERRORS,
  POST_CHAPTER,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_BOOK_CHAPTERS,
  EDIT_CHAPTER_TITLE,
  //   STOP_LOADING_UI,
  //   SUBMIT_COMMENT_CHAPTER,
  //   SUBMIT_EDIT_CHAPTER,
  //   EDIT_CHAPTER,
} from "../types";
import axios from "axios";

// Get all chapters of a book
export const getBookChaptersData = (bookId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/books/${bookId}/chapters`)
    .then((res) => {
      dispatch({
        type: SET_BOOK_CHAPTERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOK_CHAPTERS,
        payload: [],
      });
      console.log(err);
    });
};
// Post a chapter to UI. No posting
export const addChapter = (newChapter) => (dispatch) => {
  dispatch({ type: ADD_CHAPTER, payload: newChapter });
};

export const editChapterTitle = (newTitle) => (dispatch) => {
  dispatch({ type: EDIT_CHAPTER_TITLE, payload: newTitle });
};
// Post a chapter to book
export const postChapter = (newChapter, bookId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/book/${bookId}/chapter`, newChapter)
    .then((res) => {
      dispatch({
        type: POST_CHAPTER,
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

//TODO: Fill the rest of this out
// // Edit a chapter
// export const submitEdit = (book) => (dispatch) => {
//   dispatch({ type: LOADING_UI });

//   axios
//     .post(`/book/${book.bookId}/edit`, book)
//     .then((res) => {
//       dispatch({
//         type: SUBMIT_EDIT_BOOK,
//         payload: res.data,
//       });
//       dispatch(getBook(book.bookId));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const submitComment = (bookId, commentBook) => (dispatch) => {
//   axios
//     .post(`/book/${bookId}/comment`, commentBook)
//     .then((res) => {
//       dispatch({
//         type: SUBMIT_COMMENT_BOOK,
//         payload: res.data,
//       });
//       dispatch(clearErrors());
//     })
//     .catch((err) => {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data,
//       });
//     });
// };

// export const deleteBook = (bookId) => (dispatch) => {
//   axios
//     .delete(`/book/${bookId}`)
//     .then(() => {
//       dispatch({ type: DELETE_BOOK, payload: bookId });
//     })
//     .catch((err) => console.log(err));
// };

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
