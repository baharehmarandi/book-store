import {IResults} from "../../../models/movie.model";
import {createReducer, on} from "@ngrx/store";
import {TopRatedMovieActions} from "../actions/movie.actions";
import {HttpErrorResponse} from "@angular/common/http";

export interface TopRatedMovieState {
  topRatedMovieLists?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

export const initialState: TopRatedMovieState = {
  topRatedMovieLists: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const topRatedMovieReducer = createReducer(
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
    topRatedMovieLists: action.payload,
    success: true,
    total: action.total
  })),
  on(TopRatedMovieActions.loadTopRatedMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
