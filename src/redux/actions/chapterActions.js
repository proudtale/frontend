/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: chapterActions.js
 *
 * Key Options:
 * -
 *
 * Revision History:
 * - 05 June 2020, Queenie : Created
 * - 12 July 2020, Martin Hwang <m.hwang@proudtale.com>
 */
import {
  LOADING_DATA,
  SET_ERRORS,
  POST_CHAPTER,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_BOOK_CHAPTERS,
  SET_BOOK_CHAPTER,
  SUBMIT_EDIT_CHAPTER,
  EDIT_CHAPTER,
  // ADD_CHAPTER,
  // DELETE_CHAPTER,
  // EDIT_CHAPTER_TITLE,
  // STOP_LOADING_UI,
  // SUBMIT_COMMENT_CHAPTER,
} from "../types";
import axios from "axios";

// Get all chapters of the book
export const getChapters = (bookId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/book/${bookId}/chapters`)
    .then((res) => {
      dispatch({
        type: SET_BOOK_CHAPTERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOK_CHAPTERS,
        payload: null,
      });
      console.log(err);
    });
};
// Get a chapter
export const getChapter = (bookId, chapterId) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/book/${bookId}/chapter/${chapterId}`)
    .then((res) => {
      dispatch({
        type: SET_BOOK_CHAPTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_BOOK_CHAPTER,
        payload: [],
      });
      console.log(err);
    });
};
// Post a chapter
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

// Edit a chapter
export const submitEditChapter = (chapter, bookId) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post(`/book/${bookId}/chapter/${chapter.chapterId}/edit`, chapter)
    .then((res) => {
      dispatch({
        type: SUBMIT_EDIT_CHAPTER,
        payload: res.data,
      });
      // dispatch(getChapters(bookId));
      dispatch(clearErrors());
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err,
      });
    });
};
// This API is still in progress.
export const editChapter = () => (dispatch) => {
  dispatch({ type: EDIT_CHAPTER });
};

// Post a chapter to UI. No posting
// export const addChapter = (newChapter) => (dispatch) => {
//   dispatch({ type: ADD_CHAPTER, payload: newChapter });
// };
// export const editChapterTitle = (newTitle) => (dispatch) => {
//   dispatch({ type: EDIT_CHAPTER_TITLE, payload: newTitle });
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
