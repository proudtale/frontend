import { LOADING_DATA, SET_POPULAR_BOOKS, SET_ERRORS } from "../types";
import axios from "axios";

export const getPopularBooks = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios("/screams")
    .then((res) => {
      dispatch({
        type: SET_POPULAR_BOOKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err,
      });
    });
};

/*

          res.data.map((book, index) => ({
            index: index,
            title: book.title,
            author: book.userHandle,
            bookImage: book.userImage,
          }))
          
        )
        .then((popularBook) => {
          this.setState({
            popularBook,
            isLoading: false,
          });
          // console.log(popularBook)
        })
        .catch((error) => {
          this.setState({ error, isLoading: false });
        });


*/
