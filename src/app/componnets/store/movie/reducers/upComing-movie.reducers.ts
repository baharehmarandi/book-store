import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {UpComingMovieActions} from "../actions/movie.actions";

export interface UpComingMovieState {
  upComingMoviesList?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

export const initialState: UpComingMovieState = {
  upComingMoviesList: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const upComingMovieReducer = createReducer(
  initialState,
  on(UpComingMovieActions.loadUpComingMovies, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(UpComingMovieActions.loadUpComingMoviesSuccess, (state, action) =>({
    ...state,
    upComingMoviesList: action.payload,
    loading: false,
    success: true,
    total: action.total
  })),
  on(UpComingMovieActions.loadUpComingMoviesFailure,(state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
