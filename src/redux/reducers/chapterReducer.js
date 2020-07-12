/**
 * Copyright (c) 2020 proudtale
 * All rights reserved.
 *
 * Filename: chapterReducer.js
 *
 * Key Options:
 * -
 *
 * Revision History:
 * - 05 June 2020, Queenie : Created
 * - 12 July 2020, Martin Hwang <m.hwang@proudtale.com>
 */
import {
  SET_BOOK_CHAPTERS,
  SET_BOOK_CHAPTER,
  LOADING_DATA,
  ADD_CHAPTER,
  POST_CHAPTER,
  EDIT_CHAPTER_TITLE,
  SUBMIT_EDIT_CHAPTER,
  EDIT_CHAPTER,
  //   DELETE_CHAPTER,
  //   SUBMIT_COMMENT_CHAPTER,
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
        chapters: action.payload,
        loading: false,
      };
    case SET_BOOK_CHAPTER:
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
    case SUBMIT_EDIT_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
        edit: false,
      };
    case EDIT_CHAPTER:
      return {
        ...state,
        edit: !state.edit,
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
