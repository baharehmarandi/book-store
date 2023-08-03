import {createReducer, on} from "@ngrx/store";
import {TvGenresActions} from "../actions/genres.actions";
import {IGenres} from "../../../models/genres.model";
import {HttpErrorResponse} from "@angular/common/http";

export interface TvGenresState {
  genres?: IGenres[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: TvGenresState = {
  genres: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const tvGenresReducer = createReducer(
  initialState,
  on(TvGenresActions.loadTvGenres, (state) => ({
    ...state,
    loading: true
  })),
  on(TvGenresActions.loadTvGenresSuccess, (state, action) => ({
    ...state,
    genres: action.payload,
    loading: false,
    success: true
  })),
  on(TvGenresActions.loadTvGenresFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
