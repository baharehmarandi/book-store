import {IResults} from "../../../models/movie.model";
import {createReducer, on} from "@ngrx/store";
import {TopRatedMovieActions} from "../actions/movie.actions";
import {HttpErrorResponse} from "@angular/common/http";

export interface TopRatedMoviesState {
  topRatedMoviesList?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

const initialState: TopRatedMoviesState = {
  topRatedMoviesList: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const topRatedMoviesReducer = createReducer(
  initialState,
  on(TopRatedMovieActions.loadTopRatedMovies, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(TopRatedMovieActions.loadTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    error: undefined,
    topRatedMoviesList: action.payload,
    total: action.total
  })),
  on(TopRatedMovieActions.loadTopRatedMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    success: undefined,
    error: action.error
  }))
)
