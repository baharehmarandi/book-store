import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {NowPlayingMovieActions} from "../actions/movie.actions";

export interface NowPlayingMovieState {
  nowPlayingMovie?: IResults[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: NowPlayingMovieState = {
  nowPlayingMovie: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const nowPlayingMovieReducer = createReducer(
  initialState,
  on(NowPlayingMovieActions.loadNowPlayingMovies, (state) => ({
    ...state,
    loading: true
  })),
  on(NowPlayingMovieActions.loadNowPlayingMoviesSuccess, (state, action) => ({
    ...state,
    loading: false,
    nowPlayingMovie: action.payload,
    success: true
  })),
  on(NowPlayingMovieActions.loadNowPlayingMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
