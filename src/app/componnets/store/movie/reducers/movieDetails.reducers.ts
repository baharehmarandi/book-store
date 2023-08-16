import {IMovieDetails} from "../../../models/movie-details.model";
import {createReducer, on} from "@ngrx/store";
import {MovieDetailsActions} from "../actions/movie.actions";
import {HttpErrorResponse} from "@angular/common/http";

export interface MovieDetailsState {
  movieDetails?: IMovieDetails,
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
}

export const initialState: MovieDetailsState = {
  movieDetails: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
}

export const movieDetailsReducer = createReducer(
  initialState,
  on(MovieDetailsActions.loadMovieDetails, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined,
  })),
  on(MovieDetailsActions.loadMovieDetailsSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    movieDetails: action.payload
  })),
  on(MovieDetailsActions.loadMovieDetailsFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
