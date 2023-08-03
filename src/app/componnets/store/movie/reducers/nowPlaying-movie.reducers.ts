import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {UpComingMovieActions} from "../actions/movie.actions";

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
  on(UpComingMovieActions.loadUpComingMovies, (state) => ({
    ...state,
    loading: true
  })),
  on(UpComingMovieActions.loadUpComingMoviesSuccess, (state, action) => ({
    ...state,
    loading: false,
    upcomingMovies: action.payload,
    success: true
  })),
  on(UpComingMovieActions.loadUpComingMoviesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
