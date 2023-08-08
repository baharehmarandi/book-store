import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {NowPlayingMovieActions} from "../actions/movie.actions";

export interface NowPlayingMovieState {
  nowPlayingMovie?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number,
}

export const initialState: NowPlayingMovieState = {
  nowPlayingMovie: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined,
}

export const nowPlayingMovieReducer = createReducer(
  initialState,
  on(NowPlayingMovieActions.loadNowPlayingMovies, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(NowPlayingMovieActions.loadNowPlayingMoviesSuccess, (state, action) => ({
    ...state,
    loading: false,
    nowPlayingMovie: action.payload,
    success: true,
    total: action.total
  })),
  on(NowPlayingMovieActions.loadNowPlayingMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
