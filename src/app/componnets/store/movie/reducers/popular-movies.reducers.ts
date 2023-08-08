import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {PopularMovieActions} from "../actions/movie.actions";

export interface PopularMoviesState {
  moviePopularList?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

const initialState: PopularMoviesState = {
  moviePopularList: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const popularMoviesReducer = createReducer(
  initialState,
  on(PopularMovieActions.loadPopularMovies, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(PopularMovieActions.loadPopularMoviesSuccess, (state, action) => ({
    ...state,
    moviePopularList: action.payload,
    loading: false,
    success: true,
    total: action.total
  })),
  on(PopularMovieActions.loadPopularMoviesFailure, (state, action) => ({
   ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
