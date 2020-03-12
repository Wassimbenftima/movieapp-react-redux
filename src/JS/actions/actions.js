import {
  SEARCH_INPUT,
  RATING_SEARCH,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE
} from "../Const/actionTypes";
export const searchHandler = payload => ({
  type: SEARCH_INPUT,
  payload
});
export const ratingSearch = payload => ({
  type: RATING_SEARCH,
  payload
});
export const addNewMovie = payload => ({
  type: ADD_MOVIE,
  payload: {
    ...payload,
    id: Date.now()
  }
});
export const deleteMovie = payload => ({
  type: DELETE_MOVIE,
  payload
});
export const editMovie = payload => ({
  type: EDIT_MOVIE,
  payload
});
