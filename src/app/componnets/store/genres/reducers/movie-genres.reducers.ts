import {IGenres} from "../../../models/genres.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {MovieGenresActions} from "../actions/genres.actions";

export interface MovieGenresState {
  genres?: IGenres[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}
export const initialState :MovieGenresState = {
  genres: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const movieGenresReducer = createReducer(
  initialState,
  on(MovieGenresActions.loadMovieGenres, (state) => ({
    ...state,
    loading: true
  })),
  on(MovieGenresActions.loadMovieGenresSuccess, (state, action) => ({
    ...state,
    genres: action.payload,
    loading: false,
    success: true
  })),
  on(MovieGenresActions.loadMovieGenresFailure, (state, action) => ({
   ...state,
    loading: false,
    error: action.error
  }))
)
