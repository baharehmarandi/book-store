import {popularMoviesReducer, PopularMoviesState} from "./popular-movies.reducers";
import {nowPlayingMovieReducer, NowPlayingMovieState} from "./nowPlaying-movie.reducers";
import {upComingMovieReducer, UpComingMovieState} from "./upComing-movie.reducers";
import {combineReducers} from "@ngrx/store";

export interface MovieState {
  popularMovie: PopularMoviesState,
  nowPlayingMovie: NowPlayingMovieState,
  upComingMovie: UpComingMovieState
}

export const movieKeyFeature = 'movies';

export const movieReducer = combineReducers({
  popularMovie: popularMoviesReducer,
  nowPlayingMovie: nowPlayingMovieReducer,
  upComingMovie: upComingMovieReducer
})
