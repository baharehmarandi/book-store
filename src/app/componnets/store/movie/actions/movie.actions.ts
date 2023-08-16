import {createActionGroup, props} from "@ngrx/store";
import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {IMovieDetails} from "../../../models/movie-details.model";

export const PopularMovieActions = createActionGroup({
  source: 'MoviePopular',
  events: {
    'Load PopularMovies': props<{page: number}>(),
    'Load PopularMovies Success': props<{payload: IResults[], total: number}>(),
    'Load PopularMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});

export const UpComingMovieActions = createActionGroup({
  source: 'MovieUpComing',
  events: {
    'Load UpComingMovies': props<{page: number}>(),
    'Load UpComingMovies Success': props<{payload: IResults[], total: number}>(),
    'Load UpComingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});

export const NowPlayingMovieActions = createActionGroup({
  source: 'MovieNowPlaying',
  events: {
    'Load NowPlayingMovies': props<{page: number}>(),
    'Load NowPlayingMovies Success': props<{payload: IResults[], total: number}>(),
    'Load NowPlayingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});

export const TopRatedMovieActions = createActionGroup({
  source: 'MovieTopRated',
    events: {
      'Load TopRatedMovies': props<{page: number}>(),
      'Load TopRatedMovies Success': props<{payload: IResults[], total: number}>(),
      'Load TopRatedMovies Failure': props<{error: HttpErrorResponse}>(),
    }
});

export const MovieDetailsActions = createActionGroup({
  source: 'MovieDetails',
  events: {
    'Load MovieDetails': props<{id: number}>(),
    'Load MovieDetails Success': props<{payload: IMovieDetails}>(),
    'Load MovieDetails Failure': props<{error: HttpErrorResponse}>(),
  }
})
